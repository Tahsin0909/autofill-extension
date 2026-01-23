chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

  if (message.type === "FETCH_PROJECT") {

    if (typeof message.url !== "string") {
      sendResponse({ success: false, error: "Invalid request" })
      return
    }
    if (!message.url.startsWith("https://api.buildai.gr")) {
      sendResponse({ success: false, error: "Invalid URL" })
      return
    }

    fetch(message.url)
      .then((res) => res.json())
      .then((data) => sendResponse({ success: true, data }))
      .catch((err) => sendResponse({ success: false, error: err.message }))
    return true
  }

  if (message.action === "autoFillMap") {
    const coords = message.coords;
    const tabId = message.tabId;

    (async () => {
      try {
        // console.log("Executing script in tab:", tabId);

        // Execute script in all frames
        await chrome.scripting.executeScript({
          target: { tabId: tabId, allFrames: true },
          func: (coordsData) => {
            function findAndFill(selector, isTextarea) {
              const elements = document.querySelectorAll(selector);
              let count = 0;

              elements.forEach(el => {
                if (isTextarea) {
                  el.removeAttribute('readonly');
                }
                el.value = coordsData.trim();
                el.dispatchEvent(new Event('input', { bubbles: true }));
                el.dispatchEvent(new Event('change', { bubbles: true }));
                count++;
              });

              return count;
            }

            // Wait for popup to load
            setTimeout(() => {
              const textareaCount = findAndFill('textarea[id*="GisLocation"]', true);
              const inputCount = findAndFill('input[name="GisLocation"]', false);

              // console.log(`✅ Updated ${textareaCount} textareas and ${inputCount} inputs`);

              if (textareaCount > 0 || inputCount > 0) {
                // Only alert in the main frame
                if (window === window.top) {
                  alert(`✅ Coordinates filled in ${textareaCount + inputCount} fields!`);
                }
              } else {
                if (window === window.top) {
                  console.warn("⚠️ No matching fields found");
                }
              }
            }, 3000);
          },
          args: [coords]
        });

        sendResponse({ success: true });
      } catch (error) {
        console.error("Error executing script:", error);
        sendResponse({ success: false, error: error.message });
      }
    })();

    return true; // Keep the message channel open for async response
  }
  if (chrome.runtime.lastError) {
    console.error("Injection error:", chrome.runtime.lastError.message)
    sendResponse({ success: false, error: chrome.runtime.lastError.message })
    return
  }
});

// Listen for extension icon click
chrome.sidePanel?.setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.log('Side panel API not available:', error));

// Alternative: Use action.onClicked
chrome.action.onClicked.addListener((tab) => {
  // Method 1: Using sidePanel API (Chrome 114+)
  if (chrome.sidePanel) {
    chrome.sidePanel.open({ windowId: tab.windowId });
    return;
  }

  // Method 2: Fallback for older Chrome versions or other browsers
  chrome.tabs.sendMessage(tab.id, { action: "toggleSidebar" });
});

