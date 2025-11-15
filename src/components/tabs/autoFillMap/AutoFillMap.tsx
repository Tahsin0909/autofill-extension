import React from "react";

const AutoFillMap = ({ kaek }: { kaek: string }) => {

    const handleAutoFill = async () => {
        try {
            // 1) Fetch data using KAEK
            const res = await fetch(
                `http://31.97.37.168:8019/api/v1/kaek_lookup?kaek=${kaek}`
            );

            const result = await res.json();

            // 2) Get geometry_egsa rings
            const rings = result?.geometry_egsa?.rings?.[0] || [];
            console.log(rings)
            // 3) Convert rings to coords string
            const coords = rings
                .map((pair: number[]) => `${pair[0]} ${pair[1]}`)
                .join(",\n");
            console.log(coords)
            // 4) Get active tab
            const [tab] = await chrome.tabs.query({
                active: true,
                currentWindow: true
            });

            // 5) Send coords to background
            chrome.runtime.sendMessage(
                {
                    action: "autoFillMap",
                    coords,
                    tabId: tab.id
                },
                (response) => {
                    if (response?.success) {
                        console.log("Autofill done");
                    }
                }
            );

        } catch (error: any) {
            alert(error.message);
        }
    };

    return (
        <div className="relative flex items-center gap-5 my-2 p-3 rounded-lg bg-gray-100">

            <div className="flex flex-col items-start bg-white p-3 rounded-lg shadow w-full">
                <h2 className="text-sm font-semibold">Map Auto Fill</h2>

                <button
                    onClick={handleAutoFill}
                    className="mt-2 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Auto Fill Map
                </button>

                {/* <p className="text-sm mt-2 font-medium">KAEK: {kaek}</p> */}

                <p className="text-xs text-gray-500 mt-2">
                    Click to autofill coordinates
                </p>
            </div>
        </div>
    );
};

export default AutoFillMap;

