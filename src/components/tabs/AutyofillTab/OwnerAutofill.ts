// id="pt1:r1:7:pt1:pc1:t2:0:it4::content"
// id="pt1:r1:7:pt1:pc1:t2:1:it4::content"
//   const rowId = `pt1:r1:9:pt1:pc1:t2:${index}:`
function fillOwners(owners) {
    const rowPatterns = [
        "pt1:r1:9:pt1:pc1:t2",
        "pt1:r1:7:pt1:pc1:t2"
    ];


    owners?.forEach((owner, index) => {

        const selectors = {
            firstName: rowPatterns.map(p => `input[id="${p}:${index}:it6::content"]`),
            lastName: rowPatterns.map(p => `input[id="${p}:${index}:it3::content"]`),
            fatherName: rowPatterns.map(p => `input[id="${p}:${index}:it4::content"]`),
            motherName: rowPatterns.map(p => `input[id="${p}:${index}:it7::content"]`),
            address: rowPatterns.map(p => `input[id="${p}:${index}:it2::content"]`),
            city: rowPatterns.map(p => `input[id="${p}:${index}:it11::content"]`),
            postalCode: rowPatterns.map(p => `input[id="${p}:${index}:it5::content"]`),
            phone: rowPatterns.map(p => `input[id="${p}:${index}:it15::content"]`),
            email: rowPatterns.map(p => `input[id="${p}:${index}:it1::content"]`),
            afm: rowPatterns.map(p => `input[id="${p}:${index}:it9::content"]`)
        };

        const fillField = (selectorArray, value) => {
            selectorArray.forEach((selector) => {
                const elements = document.querySelectorAll(selector);
                elements.forEach((el) => {
                    if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
                        el.value = value;
                        el.dispatchEvent(new Event("input", { bubbles: true }));
                        el.dispatchEvent(new Event("change", { bubbles: true }));
                    }
                });
            });
        };

        fillField(selectors.firstName, owner?.firstName || "");
        fillField(selectors.lastName, owner?.lastName || "");
        fillField(selectors.fatherName, owner?.fatherFirstLastName || "");
        fillField(selectors.motherName, owner?.motherFirstLastName || "");
        fillField(selectors.address, owner?.addressNumber || "");
        fillField(selectors.city, owner?.city || "");
        fillField(selectors.postalCode, owner?.postalCode || "");
        fillField(selectors.phone, owner?.phone || "");
        fillField(selectors.email, owner?.email || "");
        // dateOfBirth
        // idNumber
        // ownerAddress
        // ownerTypeOwnership
        // ownershipPercentageOwner
        // placeOfBirth
        // postalCode
        // taxIdentificationNumber
    });
}

