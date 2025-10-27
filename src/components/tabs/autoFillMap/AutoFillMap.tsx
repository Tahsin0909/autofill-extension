import React from "react";

const AutoFillMap = () => {
    const coords = `
473962.615919509 4201336.016213698,
473945.157056989 4201356.653754973,
473952.0362374059 4201362.874175472,
473956.004995344 4201357.182926999,
473964.7396268935 4201348.1077137
`;

    const handleAutoFill = async () => {
        try {
            // Get current tab
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            console.log("Current tab:", tab);

            // Send message to background script
            chrome.runtime.sendMessage(
                {
                    action: "autoFillMap",
                    coords: coords,
                    tabId: tab.id
                },
                (response) => {
                    if (response?.success) {
                        console.log("✅ Autofill completed successfully");
                    } else {
                        console.error("❌ Autofill failed:", response?.error);
                    }
                }
            );
        } catch (error) {
            console.error("Error:", error);
            alert("⚠️ Error: " + error.message);
        }
    };

    return (
        <div className="p-4">
            <button
                onClick={handleAutoFill}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Auto Fill Map
            </button>
        </div>
    );
};

export default AutoFillMap;