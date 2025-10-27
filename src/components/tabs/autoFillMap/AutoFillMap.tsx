import React from "react";

const AutoFillMap = () => {
    const coords = `
473962.615919509 4201336.016213698,
473945.157056989 4201356.653754973,
473952.0362374059 4201362.874175472,
473956.004995344 4201357.182926999,
473964.7396268935 4201348.1077137
`;

    // This function will run when button is clicked
    const handleAutoFill = async () => {
        console.log("⏳ Περιμένω να φορτώσει το popup...");
        await new Promise((r) => setTimeout(r, 3000));

        // Search all frames
        function findInAllFrames(selector) {
            const found = [];
            function search(doc) {
                try {
                    const el = doc.querySelectorAll(selector);
                    if (el.length) found.push(...el);
                    for (let i = 0; i < doc.defaultView.frames.length; i++) {
                        try {
                            search(doc.defaultView.frames[i].document);
                        } catch (err) { }
                    }
                } catch (err) { }
            }
            search(document);
            return found;
        }

        // Update textarea
        const textareas = findInAllFrames('textarea[id*="GisLocation"]');
        if (textareas.length > 0) {
            textareas.forEach((t) => {
                t.removeAttribute("readonly");
                t.value = coords.trim();
                t.dispatchEvent(new Event("input", { bubbles: true }));
            });
            console.log(`✅ Ενημερώθηκαν ${textareas.length} textareas με συντεταγμένες.`);
        } else {
            console.warn("⚠️ Δεν βρέθηκε κανένα textarea GisLocationRO::content.");
        }

        // Update hidden input
        const inputs = findInAllFrames('input[name="GisLocation"]');
        if (inputs.length > 0) {
            inputs.forEach((i) => {
                i.value = coords.trim();
                i.dispatchEvent(new Event("input", { bubbles: true }));
            });
            alert(`✅ Συντεταγμένες περάστηκαν σε ${inputs.length} πεδία GisLocation!`);
        } else {
            alert("⚠️ Δεν βρέθηκε το input GisLocation (ούτε μέσα σε iframe).");
        }
    };

    return (
        <div className="p-4">
            <button
                onClick={handleAutoFill}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Auto Fill Map
            </button>
        </div>
    );
};

export default AutoFillMap;
