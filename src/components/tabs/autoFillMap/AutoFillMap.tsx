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
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            chrome.runtime.sendMessage(
                {
                    action: "autoFillMap",
                    coords: coords,
                    tabId: tab.id
                },
                (response) => {
                    if (response?.success) console.log("Autofill done");
                }
            );
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="relative flex items-center gap-5 my-2 p-3 rounded-lg overflow-hidden bg-gray-100">
            {/* Right Panel */}
            <div className="flex flex-col items-start bg-white p-3 rounded-lg shadow z-10 w-full ">
                <h2 className="text-sm font-semibold">Map Auto Fill</h2>

                <button
                    onClick={handleAutoFill}
                    className="mt-2 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Auto Fill Map
                </button>

                <p className="text-xs text-gray-500 mt-2">
                    Click to autofill coordinates
                </p>
            </div>
        </div>
    );
};

export default AutoFillMap;
