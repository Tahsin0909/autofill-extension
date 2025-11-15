import React, { useState } from "react";

const AllData = ({ data }: any) => {
    const project = data || {};

    const [copied, setCopied] = useState("");

    const notInclude = [
        "owners",
        "engineers",
        "processedDocuments",
        "service",
        "serviceId",
        "tokenUsage",
        "processingStatus",
        "createdBy",
        "createdById",
        "createdAt",
    ];

    const copyValue = (value: any) => {
        const text = String(value);
        navigator.clipboard.writeText(text);
        setCopied(text);

        setTimeout(() => setCopied(""), 1500);
    };

    return (
        <div className="overflow-hidden">
            <h1 className="text-sm font-semibold mb-2">All Value Are here</h1>

            <div className=" shadow-sm rounded-md">
                {Object.entries(project)
                    .filter(([key, value]) => {
                        if (notInclude.includes(key)) return false;
                        if (value === null) return false;
                        if (typeof value === "string" && value.trim() === "") return false;
                        return true;
                    })
                    .map(([key, value]) => {
                        const textValue =
                            typeof value === "object" ? JSON.stringify(value) : String(value);

                        return (
                            <div key={key} className="">
                                <p className="p-2 font-semibold bg-gray-100 border-r border-gray-300">
                                    {key}
                                </p>

                                <p className="p-2 flex items-center gap-2">
                                    {textValue}

                                    <button
                                        onClick={() => copyValue(textValue)}
                                        className="px-2 py-1 text-sm rounded"
                                    >
                                        {copied === textValue ? (
                                            // tick
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="#2d8000"
                                            >
                                                <g fill="none" stroke="#2d8000" strokeWidth="2">
                                                    <circle cx="12" cy="12" r="9" />
                                                    <path d="m8 12l3 3l5-6" />
                                                </g>
                                            </svg>
                                        ) : (
                                            // copy icon
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 16 16"
                                                fill="#000000"
                                            >
                                                <g fill="#000000">
                                                    <path d="m4 4l1-1h5.414L14 6.586V14l-1 1H5l-1-1V4zm9 3l-3-3H5v10h8V7z" />
                                                    <path d="M3 1L2 2v10l1 1V2h6.414l-1-1H3z" />
                                                </g>
                                            </svg>
                                        )}
                                    </button>
                                </p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default AllData;
