
// export const servicesTwoFill = async (data: any) => {
//     const [tab] = await chrome.tabs.query({
//         active: true,
//         currentWindow: true
//     })

//     if (!tab?.id) {
//         alert("No active tab found")
//         return
//     }

//     try {
//         await chrome.scripting.executeScript({
//             target: { tabId: tab.id },
//             func: (data) => {
//                 console.log(data)


//                 // Οδός	
//                 const propertyAddress = [
//                     'input[id="pt1:r1:3:pt1:it18::content"]',
//                     'input[id="pt1:r1:4:pt1:it18::content"]',
//                     'input[id="pt1:r1:1:pt1:it18::content"]',
//                 ]
//                 propertyAddress.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data.propertyAddress || "No Value Found"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })


//                 // Αρ. από	
//                 const propertyNumber = [
//                     'input[id="pt1:r1:3:pt1:it7::content"]',
//                     'input[id="pt1:r1:4:pt1:it7::content"]',
//                     'input[id="pt1:r1:1:pt1:it7::content"]',
//                     'input[id="r1:3:it2::content"]',
//                 ]
//                 propertyNumber.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data.propertyNumber || "No Value Found"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })

//                 // Πόλη/Οικισμός	
//                 const municipalityCommunity = [
//                     'input[id="pt1:r1:3:pt1:it17::content"]',
//                     'input[id="pt1:r1:4:pt1:it17::content"]',
//                     'input[id="pt1:r1:1:pt1:it17::content"]',
//                     'input[id="r1:3:it3::content"]',
//                     'input[id="r1:3:it3::content"]',

//                 ]
//                 municipalityCommunity.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data.municipalityCommunity || "No Value Found"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })

//                 // ΤΚ
//                 //not working issues in selector
//                 const propertyPostalCode = [
//                     'input[id="pt1:r1:3:pt1:it19::content"]',
//                     'input[id="pt1:r1:4:pt1:it19::content"]',
//                     'input[id="pt1:r1:1:pt1:it19::content"]',
//                     'input[id="r1:3:it18::content"]',

//                 ]
//                 propertyPostalCode.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data.propertyPostalCode || "No Value Found"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })


//                 // todo 
//                 // 1. ot form new api (kaek lookup)
//                 const ot = [
//                     'input[id="pt1:r1:3:pt1:it15::content"]',
//                     'input[id="pt1:r1:1:pt1:it15::content"]',
//                     'input[id="r1:3:it19::content"]',

//                 ]
//                 ot.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data.otNumber || "No Value Found"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })

//                 //to-do
//                 // id="r1:3:it17::content"

//                 // Δημοτική Ενότητα / Περιοχή	
//                 //issues here also 
//                 // const propertyPlace = [
//                 //   'textarea[id="pt1:r1:4:pt1:it12::content"]',
//                 //   'textarea[id="pt1:r1:1:pt1:it12::content"]',
//                 // ]
//                 // propertyPlace.forEach((selector) => {
//                 //   const elements = document.querySelectorAll(selector)
//                 //   elements.forEach((element) => {
//                 //     if (
//                 //       element instanceof HTMLInputElement ||
//                 //       element instanceof HTMLTextAreaElement
//                 //     ) {
//                 //       element.value = data.propertyPlace || "No Value Found"
//                 //       element.dispatchEvent(new Event("input", { bubbles: true }))
//                 //       element.dispatchEvent(new Event("change", { bubbles: true }))
//                 //     }
//                 //   })
//                 // })


//                 // project_description
//                 // Περιγραφή Έργου/Εγκατάστασης
//                 const project_description = [
//                     // 'textarea[id="r1:3:it20::content"',
//                     'textarea[id="r1:1:it28::content"]',
//                     'textarea[id="pt1:r1:3:pt1:it16::content"]',
//                     'textarea[id="pt1:r1:12:pt1:it16::content"]',
//                     'textarea[id="r1:0:it28::content"]',
//                     'textarea[id="pt1:r1:1:pt1:it16::content"]',
//                     'textarea[id="pt1:r1:4:pt1:it16::content"]',
//                     // id="r1:1:it28::content"
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 project_description.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data.projectDescriptions || "No Value Found"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })
//                 // violation_description
//                 const violation_description = [
//                     'textarea[id="r1:2:it11::content"]'
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 violation_description.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data?.violationDescription || "No Value Found"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })
//                 // vGeospatials coordinates
//                 const geospatial_coordinates = [
//                     'textarea[id="r1:2:it9::content"]'
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 geospatial_coordinates.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data?.violationDescription || "No Value Found"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })
//                 const kaek_land = [
//                     'textarea[id="r1:2:it1::content"]'
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 kaek_land.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data?.violationDescription || "No Value Found"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })
//                 // postal_code
//                 const postal_code = [
//                     'input[id="r1:2:it21::content"]',
//                     'input[id="r1:1:it21::content"]',
//                     'input[id="r1:0:it21::content"]',
//                     'input[id="pt1:r1:12:pt1:it19::content"]',
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 postal_code.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (element instanceof HTMLInputElement) {
//                             element.value = data?.postalCode || ""
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })
//                 const residential_permit_number = [
//                     'input[id="r1:2:it2::content"]'
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 residential_permit_number.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (element instanceof HTMLInputElement) {
//                             element.value = data?.permitNo || "Permit"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })
//                 const main_area = [
//                     'input[id="r1:2:it6::content"]'
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 main_area.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (element instanceof HTMLInputElement) {
//                             element.value = data?.area || "Area is main area"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })
//                 const spaces_discount_coefficient_03 = [
//                     'input[id="r1:2:it53::content"]'
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 spaces_discount_coefficient_03.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (element instanceof HTMLInputElement) {
//                             element.value = ""
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })
//                 const spaces_discount_coefficient_05 = [
//                     'input[id="r1:2:it8::content"]'
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 spaces_discount_coefficient_05.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (element instanceof HTMLInputElement) {
//                             element.value = ""
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })
//                 const height_diff = [
//                     'input[id="r1:2:it7::content"]'
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 height_diff.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (element instanceof HTMLInputElement) {
//                             element.value = data?.height_diff || "No Data"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })
//                 const coverage_area = [
//                     'input[id="r1:2:it10::content"]'
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 coverage_area.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (element instanceof HTMLInputElement) {
//                             element.value = ""
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })
//                 const swimmingPool_km = [
//                     'input[id="r1:2:it5::content"]'
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 swimmingPool_km.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (element instanceof HTMLInputElement) {
//                             element.value = ""
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })
//                 const others_Violation = [
//                     'input[id="r1:2:it3::content"]'
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 others_Violation.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (element instanceof HTMLInputElement) {
//                             element.value = ""
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })

//                 // kaekProperty
//                 // ΚΑΕΚ	
//                 const kaek = [
//                     'input[id="pt1:r1:3:pt1:it13::content"]',
//                     'input[id="pt1:r1:12:pt1:it13::content"]',
//                     'input[id="pt1:r1:4:pt1:it13::content"]',
//                     'input[id="pt1:r1:1:pt1:it13::content"]',
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 kaek.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (element instanceof HTMLInputElement) {
//                             element.value = data?.kaekProperty || ""
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })


//                 const municipal = [

//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 municipal.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data?.municipal || ""
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })
//                 const plot_area = [
//                     'input[id="pt1:r1:6:pt1:it17::content"]'
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 plot_area.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data?.area.split(" ")[0].toString() || ""
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })
//                 const floor = [
//                     'input[id="pt1:r1:6:pt1:it19::content"]'
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 floor.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data?.floor || ""
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })

//                 //Owners


//                 // find ALL owner row prefixes
//                 const allInputs = Array.from(document.querySelectorAll('input[id*=":it3::content"]')); // last name is stable field
//                 const rowPrefixes = [];

//                 allInputs.forEach(input => {
//                     // example: id = "pt1:r1:7:pt1:pc1:t2:4:it3::content"
//                     const match = input.id.match(/^(.*?:t2:\d+:)/);
//                     if (match && !rowPrefixes.includes(match[1])) {
//                         rowPrefixes.push(match[1]);
//                     }
//                 });

//                 data.owners.forEach((owner, idx) => {
//                     const prefix = rowPrefixes[idx];
//                     if (!prefix) return; // if UI has fewer rows, skip

//                     const fill = (field, value) => {
//                         const selector = `input[id="${prefix}${field}"]`;
//                         const el = document.querySelector(selector);
//                         if (el instanceof HTMLInputElement) {
//                             el.value = value;
//                             el.dispatchEvent(new Event("input", { bubbles: true }));
//                             el.dispatchEvent(new Event("change", { bubbles: true }));
//                         }
//                     };

//                     fill("it6::content", owner.firstName || "");
//                     fill("it3::content", owner.lastName || "");
//                     fill("it4::content", owner.fatherFirstLastName || "");
//                     fill("it7::content", owner.motherFirstLastName || "");
//                     fill("it2::content", owner.addressNumber || "");
//                     fill("it11::content", owner.city || "");
//                     fill("it5::content", owner.postalCode || "");
//                     fill("it15::content", owner.phone || "");
//                     fill("it1::content", owner.email || "");
//                     fill("it9::content", owner.afm || "");
//                 });


//                 // experimenting 
//                 // find delect value with id 
//                 // function setSelectValueById(selectId, newValue) {
//                 //   const selectElement = document.getElementById(selectId);
//                 //   if (selectElement instanceof HTMLSelectElement) {
//                 //     selectElement.value = newValue;
//                 //     selectElement.dispatchEvent(new Event('change', { bubbles: true }));
//                 //     console.log(`Select with ID '${selectId}' value set to '${newValue}'.`);
//                 //     return true;
//                 //   }
//                 //   console.error(`Select element with ID '${selectId}' not found.`);
//                 //   return false;
//                 // }

//                 // const formSelectors2 = [
//                 //   'select[id="pt1:r1:3:pt1:pc1:t2:0:soc1::content"]'
//                 // ];

//                 // formSelectors2.forEach((selector) => {
//                 //   const elements = document.querySelectorAll(selector);
//                 //   console.log("elements", elements);

//                 //   elements.forEach((el) => {
//                 //     if (el instanceof HTMLSelectElement) {
//                 //       // set value directly
//                 //       setSelectValueById(el.id, "3");
//                 //     } else if (el instanceof HTMLInputElement) {
//                 //       el.value = "someValue";
//                 //       el.dispatchEvent(new Event("input", { bubbles: true }));
//                 //       el.dispatchEvent(new Event("change", { bubbles: true }));
//                 //     }
//                 //   });
//                 // });

//                 // const formSelectors3 = [
//                 //   'select[id="pt1:r1:3:pt1:pc1:t2:0:soc2::content"]'
//                 // ];

//                 // formSelectors3.forEach((selector) => {
//                 //   const elements = document.querySelectorAll(selector);
//                 //   console.log("elements", elements);

//                 //   elements.forEach((el) => {
//                 //     if (el instanceof HTMLSelectElement) {
//                 //       // set value directly
//                 //       setSelectValueById(el.id, "3");
//                 //     } else if (el instanceof HTMLInputElement) {
//                 //       el.value = "someValue";
//                 //       el.dispatchEvent(new Event("input", { bubbles: true }));
//                 //       el.dispatchEvent(new Event("change", { bubbles: true }));
//                 //     }
//                 //   });
//                 // });
//                 // ΥΠ.ΕΝ
//                 // issuingAuthority
//                 // id="pt1:r1:3:pt1:pc1:t2:0:it4::content"
//                 const issuingAuthority = [
//                     'input[id="pt1:r1:3:pt1:pc1:t2:0:it4::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:1:it4::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:2:it4::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:3:it4::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:4:it4::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:5:it4::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:6:it4::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:7:it4::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:8:it4::content"]',
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 issuingAuthority.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data?.issuingAuthority || ""
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })

//                 // Αριθμός πράξης
//                 // 
//                 const legalizationStatementNumber = [
//                     'input[id="pt1:r1:3:pt1:pc1:t2:0:it3::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:1:it3::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:2:it3::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:3:it3::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:4:it3::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:5:it3::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:6:it3::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:7:it3::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:8:it3::content"]',
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 legalizationStatementNumber.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (element instanceof HTMLInputElement) {
//                             element.value = data?.legalizationStatementNumber || ""
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })



//                 // Δόμηση (τ.μ.)
//                 const titleArea = [
//                     'input[id="pt1:r1:3:pt1:pc1:t2:0:it1::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:1:it1::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:2:it1::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:3:it1::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:4:it1::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:5:it1::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:6:it1::content"]',
//                     'input[id="pt1:r1:3:pt1:pc1:t2:7:it1::content"]',
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 titleArea.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector);
//                     elements.forEach((element) => {
//                         if (element instanceof HTMLInputElement) {
//                             const rawValue = data?.titleArea || "";

//                             // remove anything except digits and dot
//                             let cleanedValue = rawValue.replace(/[^\d.]/g, "");

//                             // allow only one dot
//                             cleanedValue = cleanedValue.replace(/^([^.]*\.)|\./g, (m, g1) => g1 || "");

//                             // convert dot to comma
//                             cleanedValue = cleanedValue.replace(".", ",");

//                             console.log("cleanedValue:", cleanedValue);

//                             element.value = cleanedValue;

//                             element.dispatchEvent(new Event("input", { bubbles: true }));
//                             element.dispatchEvent(new Event("change", { bubbles: true }));
//                         }
//                     });
//                 });
//                 const propertyPlace = [
//                     'input[id="r1:3:it15::content"]',
//                     // `textarea[name="r1:2:it28"]`
//                 ]
//                 propertyPlace.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (element instanceof HTMLInputElement) {
//                             element.value = data?.propertyPlace || ""
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })

//                 // project_description_htk_plot
//                 // Περιγραφή Οικοπέδου/Γηπέδου
//                 const project_description_htk_plot = [
//                     'textarea[id="r1:3:it20::content"]',


//                 ]
//                 project_description_htk_plot.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data.projectDescriptionHtkPlot || "projectDescriptionHtkPlot"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })

//                 // horizontalPropertyName
//                 // 'textarea[id="r1:7:it20::content"]',
//                 const horizontalPropertyName = [
//                     'textarea[id="r1:7:it20::content"]',


//                 ]
//                 horizontalPropertyName.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data.horizontalPropertyName || "horizontalPropertyName"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })
//                 const property_address = [
//                     // 'input[id="r1:3:it5::content"]',
//                     'input[id="r1:2:it13::content"]',

//                 ]
//                 property_address.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data.propertyAddress || "No Value Found"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })
//                 // ΚΑΕΚ Οικοπέδου its a kaek plot
//                 const kaekProperty = [
//                     'input[id="r1:3:it17::content"]',
//                     'input[id="r1:7:it5::content"]',
//                     'input[id="r1:3:it5::content"]',
//                 ]
//                 kaekProperty.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data.kaekProperty || "No Value Found"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })
//                 // percentageCoOwnershipParcel
//                 // id="r1:7:it2::content"
//                 const percentageCoOwnershipParcel = [
//                     'input[id="r1:7:it2::content"]',

//                 ]
//                 percentageCoOwnershipParcel.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data.percentageCoOwnershipParcel.split("/")[0] || "No Value Found"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })

//                 // numberEstablishmentHorizontalOwnership
//                 // if has this reviewsNumbersEstablishmentHorizontalOwnership then reviewsNumbersEstablishmentHorizontalOwnership , if not then  numberEstablishmentHorizontalOwnership 
//                 // id="r1:7:it3::content"
//                 const reviewsNumbersEstablishmentHorizontalOwnership = [
//                     'input[id="r1:7:it3::content"]',

//                 ]
//                 reviewsNumbersEstablishmentHorizontalOwnership.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data.reviewsNumbersEstablishmentHorizontalOwnership || data.numberEstablishmentHorizontalOwnership || "No Value Found"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })

//                 // id="r1:7:it7::content"
//                 // notaryReviewsEstablishmentHorizontalOwnership || notaryEstablishmentHorizontalOwnership
//                 const notaryReviewsEstablishmentHorizontalOwnership = [
//                     'input[id="r1:7:it7::content"]',

//                 ]
//                 notaryReviewsEstablishmentHorizontalOwnership.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data.notaryReviewsEstablishmentHorizontalOwnership || data.notaryEstablishmentHorizontalOwnership || "No Value Found"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })


//                 // Επιφάνεια (τμ)
//                 // plotArea
//                 // id="r1:3:it13::content"
//                 // need to fix the comma issuer 277,50 become 27750,
//                 const plotArea = [
//                     'input[id="r1:3:it13::content"]',
//                 ]
//                 plotArea.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector);
//                     elements.forEach((element) => {
//                         if (element instanceof HTMLInputElement) {
//                             const rawValue = data?.plotArea || "";

//                             // extract only number with comma or dot
//                             let cleanedValue = rawValue.match(/[\d.,]+/g)?.[0] || "";

//                             console.log("cleanedValue:", cleanedValue);

//                             element.value = cleanedValue;

//                             element.dispatchEvent(new Event("input", { bubbles: true }));
//                             element.dispatchEvent(new Event("change", { bubbles: true }));
//                         }
//                     });
//                 });
//                 // Αριθμός κτιρίων
//                 const kaekLookUoANdOt = [
//                     // 'input[id="r1:3:it6::content"]',
//                 ]
//                 kaekLookUoANdOt.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = `${data.otNumber} kaek` || "No Value Found"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })
//                 const prop = [
//                     'input[id="r1:3:it7::content"]',
//                 ]
//                 prop.forEach((selector) => {
//                     const elements = document.querySelectorAll(selector)
//                     elements.forEach((element) => {
//                         if (
//                             element instanceof HTMLInputElement ||
//                             element instanceof HTMLTextAreaElement
//                         ) {
//                             element.value = data.prop || "No Value Found"
//                             element.dispatchEvent(new Event("input", { bubbles: true }))
//                             element.dispatchEvent(new Event("change", { bubbles: true }))
//                         }
//                     })
//                 })


//             },

//             args: [data]
//         })



//         // Επώνυμο/ία (Υποχρεωτικό) :::  id="pt1:r1:8:pt1:pc1:t2:0:it3::content" ::: owner surname
//         //Όνομα (Υποχρεωτικό) ::: id="pt1:r1:8:pt1:pc1:t2:0:it6::content" ::: owner name
//         // Όνομα πατέρα ::: id="pt1:r1:8:pt1:pc1:t2:0:it7::content" ::: owner father only name
//         //Όνομα μητέρας ::: id="pt1:r1:8:pt1:pc1:t2:0:it7::content" ::: owner mother only name
//         //Ποσοστό (Υποχρεωτικό) :::: id="pt1:r1:8:pt1:pc1:t2:0:it14::content" :: percentage of owner
//         ///Διεύθυνση (Υποχρεωτικό) ::: id="pt1:r1:8:pt1:pc1:t2:0:it2::content" :: owner address
//         //Πόλη (Υποχρεωτικό) ::: id="pt1:r1:8:pt1:pc1:t2:0:it11::content" ::: municipality of owner
//         //ΤΚ (Υποχρεωτικό) :: id="pt1:r1:8:pt1:pc1:t2:0:it5::content" ::: postal code of owner
//         //Τηλέφωνο ::: id="pt1:r1:8:pt1:pc1:t2:0:it15::content" ::: phone of owner
//         //ΑΦΜ ::: id="pt1:r1:8:pt1:pc1:t2:0:it9::content" ::: taxIdentificationNumber
//         //ΑΔΤ ::: id="pt1:r1:8:pt1:pc1:t2:0:it12::content"::: idNumber
//         //

//         // Close popup after successful autofill
//         // window.close()


//         //third serviuces owner 
//         // id="r1:7:pc3:t8:0:it36::content" -> third dervice owner percentage -> Ποσοστό
//         // id="r1:7:pc3:t8:0:it37::content" -> owner surname -> Επώνυμο/ία
//         //id="r1:7:pc3:t8:0:it25::content" -> father pnly name
//         //id="r1:7:pc3:t8:0:it33::content" -> adress and number owner -> ownerAddress addressNumber || Διεύθυνση
//         // id="r1:7:pc3:t8:0:it24::content" -> Πόλη || city
//         //id="r1:7:pc3:t8:0:it41::content" -> postal code
//         // id="r1:7:pc3:t8:0:it17::content" -> TEE mumber

//         //id="r1:3:pc1:t2:0:it27::content" -> Α/Α πράξης (Υποχρεωτικό) -> permitNumber
//         //id="r1:3:pc1:t2:0:id6::content" -> dateIssuanceBuildingPermit
//         // id="r1:3:pc1:t2:0:it29::content" -> static text -> ΟΙΚΟΔΟΜΙΚΗ ΑΔΕΙΑ
//         // id="r1:3:pc1:t2:0:it30::content" -Z> issuingAuthority
//     } catch (error) {
//         console.error("Autofill failed:", error)
//         alert("Autofill failed. Make sure you're on a page with forms.")
//     }
// }

/**
 * N.4495/2017 SERVICES
 * Extension integration for autofill
 */

// ═══════════════════════════════════════
// N.4495 SERVICE 1: ΒΑΣΙΚΑ ΣΤΟΙΧΕΙΑ
// ═══════════════════════════════════════



export const executeN4495_BasicInfo = async (data: any) => {
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    if (!tab?.id) {
        alert("No active tab found");
        return;
    }

    try {
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (data) => {
                // console.log("🚀 N.4495 - Βασικά Στοιχεία", data); 

                // Greek municipality conversion (genitive → nominative)
                const municipalityExceptions: Record<string, string> = {
                    "ΧΑΛΑΝΔΡΙΟΥ": "Χαλάνδρι",
                    "ΑΓΙΟΥ ΔΗΜΗΤΡΙΟΥ": "Άγιος Δημήτριος",
                    "ΝΕΑΣ ΣΜΥΡΝΗΣ": "Νέα Σμύρνη",
                    // ... (add more as needed)
                };

                const convertMunicipalityToNominative = (genitive: string): string => {
                    if (!genitive) return "";

                    const upper = genitive.toUpperCase();
                    if (municipalityExceptions[upper]) {
                        return municipalityExceptions[upper];
                    }

                    // Grammatical rules
                    let nominative = genitive;
                    nominative = nominative.replace(/ΡΙΟΥ$/i, "ρι");
                    nominative = nominative.replace(/ΙΟΥ$/i, "ι");
                    nominative = nominative.replace(/ΩΝ$/i, "α");
                    nominative = nominative.replace(/ΟΥ$/i, "ος");
                    nominative = nominative.replace(/ΑΣ$/i, "α");
                    nominative = nominative.replace(/ΗΣ$/i, "η");

                    return nominative.charAt(0).toUpperCase() + nominative.slice(1).toLowerCase();
                };

                const toTitleCase = (str: string): string => {
                    if (!str) return "";
                    return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
                };

                const normalize = (s: string) => s?.replace(/\s+/g, " ").trim() || "";

                const setValue = (el: HTMLElement | null, value: string) => {
                    if (!el || !value) return false;

                    const input = el as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
                    input.focus();
                    input.value = value;
                    input.dispatchEvent(new Event("input", { bubbles: true }));
                    input.dispatchEvent(new Event("change", { bubbles: true }));
                    input.dispatchEvent(new Event("blur", { bubbles: true }));

                    return true;
                };

                const findFieldByLabel = (labelText: string): HTMLElement | null => {
                    const searchText = normalize(labelText);
                    const rows = document.querySelectorAll("tr");

                    for (const row of rows) {
                        const firstTd = row.querySelector("td:first-child");
                        if (!firstTd) continue;

                        const tdText = normalize(firstTd.textContent || "");

                        if (tdText === searchText || tdText.startsWith(searchText)) {
                            const field = row.querySelector("input, select, textarea");
                            if (field) return field as HTMLElement;
                        }
                    }

                    return null;
                };

                // Field mappings
                const fields = [
                    {
                        label: "Περιγραφή Ακινήτου",
                        value: data.horizontalPropertyName || ""
                    },
                    {
                        label: "Οδός-Αρ.",
                        value: toTitleCase(`${data.propertyAddress || ""} ${data.numberProperty || ""}`.trim())
                    },
                    {
                        label: "Περιοχή",
                        value: convertMunicipalityToNominative(data.municipalityCommunity || "")
                    },
                    {
                        label: "ΤΚ",
                        value: data.propertyPostalCode || ""
                    },
                    {
                        label: "Τιμή Ζώνης (€)",
                        value: data.newPrice || ""
                    },
                    {
                        label: "Αριθμός οικ. άδειας",
                        value: [
                            data.permitNumber,
                            data.licenseNumberRevision,
                            data.licenseNumberRevisionTwo
                        ].filter(Boolean).join(", ")
                    }
                ];

                let count = 0;
                fields.forEach(({ label, value }) => {
                    if (!value) return;

                    const field = findFieldByLabel(label);
                    if (field && setValue(field, value)) {
                        // console.log(`✅ ${label}: ${value}`); 
                        count++;
                    } else {
                        console.warn(`❌ Field not found: ${label}`);
                    }
                });

                // console.log(`✅ N.4495 Basic Info Done! (${count}/${fields.length} fields)`); 
            },
            args: [data]
        });
    } catch (error) {
        console.error("N.4495 Basic Info failed:", error);
        alert("Autofill failed. Make sure you're on the N.4495 form.");
    }
};

// ═══════════════════════════════════════
// N.4495 SERVICE 2: ΠΑΡΑΒΑΣΕΙΣ
// ═══════════════════════════════════════

export const executeN4495_Violations = async (data: any) => {
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    if (!tab?.id) {
        alert("No active tab found");
        return;
    }

    try {
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (data) => {
                // console.log("🚀 N.4495 - Παραβάσεις", data); 

                let violationsData = [
                    {
                        id: "6944ed11becdd5dcede745bb",
                        age: "Μέχρι 31/12/1982",
                        category: "2",
                        formId: 0,
                        otherViolation: false,
                        showRemainingViolations: null,
                        violations: [
                            "Αλλαγή χρήσης από αποθήκη σε επαγγελματικό χώρο/κατάστημα"
                        ],
                        projectId: "6944ed03becdd5dcede745ba",
                        createdAt: "2025-12-19T06:13:37.650Z",
                        updatedAt: "2025-12-19T06:13:37.650Z"
                    }
                ];

                // Sort by priority: 1,2,4,5 first, then 3
                violationsData = violationsData.sort((a: any, b: any) => {
                    const catA = parseInt(a.category);
                    const catB = parseInt(b.category);
                    if (catA === 3 && catB !== 3) return 1;
                    if (catB === 3 && catA !== 3) return -1;
                    return 0;
                });

                const categoryMap: Record<string, string> = {
                    "1": "0", "2": "1", "3": "2", "4": "3", "5": "4"
                };

                const ageMap: Record<string, string> = {
                    "Προ της 9/6/1975": "0",
                    "Μέχρι 31/12/1982": "1",
                    "Από 1/1/2004 μέχρι 28/7/2011": "2",
                    "Από 1/1/1983 μέχρι 31/12/1992": "3",
                    "Από 1/1/1993 μέχρι 31/12/2003": "4"
                };

                const findPlusButton = () => {
                    const imgs = Array.from(document.querySelectorAll("img"));
                    const plusImg = imgs.find((img: any) => img.src && img.src.includes("plus"));
                    return plusImg?.closest("button") || plusImg?.closest("a");
                };

                const findEmptyForm = () => {
                    const textareas = document.querySelectorAll("textarea");
                    for (const textarea of textareas) {
                        const row = (textarea as HTMLElement).closest("tr");
                        if (!row) continue;

                        const label = row.querySelector("label");
                        if (label && label.textContent?.includes("Περιγραφή παράβασης")) {
                            const ta = textarea as HTMLTextAreaElement;
                            if (!ta.value || ta.value.trim() === "") {
                                return ta;
                            }
                        }
                    }
                    return null;
                };

                const findFieldByLabelGlobal = (labelText: string) => {
                    const labels = document.querySelectorAll("label");
                    for (const label of labels) {
                        const text = label.textContent?.trim();
                        if (text && (text === labelText || text.includes(labelText))) {
                            const row = label.closest("tr");
                            if (row) {
                                const field = row.querySelector("input, select, textarea");
                                if (field) return field;
                            }
                        }
                    }
                    return null;
                };

                const setVal = (el: any, value: string) => {
                    if (!el || !value) return false;
                    el.focus();
                    el.value = value;
                    el.dispatchEvent(new Event("input", { bubbles: true }));
                    el.dispatchEvent(new Event("change", { bubbles: true }));
                    el.dispatchEvent(new Event("blur", { bubbles: true }));
                    return true;
                };

                if (typeof (window as any).violationIndex === "undefined") {
                    (window as any).violationIndex = 0;
                }

                (async () => {
                    const idx = (window as any).violationIndex;

                    if (idx >= violationsData.length) {
                        // console.log("✅ All violations processed!"); 
                        (window as any).violationIndex = 0;
                        return;
                    }

                    const v = violationsData[idx];
                    // console.log(`📋 Violation ${idx + 1}/${violationsData.length}: ${v.id}`); 

                    let descriptionField = findEmptyForm();

                    if (!descriptionField) {
                        const btn = findPlusButton();
                        if (btn) {
                            // console.log("🔵 Clicking plus button..."); 
                            (btn as HTMLElement).click();
                            await new Promise(r => setTimeout(r, 1500));
                        }
                        descriptionField = findEmptyForm();
                    }

                    if (!descriptionField) {
                        console.warn("⚠️ No empty form found");
                        return;
                    }

                    let count = 0;

                    // Περιγραφή παράβασης
                    if (setVal(descriptionField, v.violations.join("\n"))) {
                        // console.log("✅ Περιγραφή παράβασης"); 
                        count++;
                    }

                    // Κατηγορία
                    const categoryField = findFieldByLabelGlobal("Κατηγορία αυθαιρεσίας");
                    if (categoryField && setVal(categoryField, categoryMap[v.category])) {
                        // console.log("✅ Κατηγορία"); 
                        count++;
                    }

                    // Παλαιότητα
                    const ageField = findFieldByLabelGlobal("Παλαιότητα");
                    if (ageField && setVal(ageField, ageMap[v.age])) {
                        // console.log("✅ Παλαιότητα"); 
                        count++;
                    }

                    // Λοιπές παραβάσεις
                    if (v.otherViolation) {
                        const otherField = findFieldByLabelGlobal("Λοιπές παραβάσεις");
                        if (otherField && setVal(otherField, "1")) {
                            // console.log("✅ Λοιπές παραβάσεις"); 
                            count++;
                        }
                    }

                    (window as any).violationIndex++;

                    // console.log(`✅ Done! (${count} fields)`); 
                    if ((window as any).violationIndex < violationsData.length) {
                        // console.log(`👉 Run again for violation ${(window as any).violationIndex + 1}`); 
                    }
                })();
            },
            args: [data]
        });
    } catch (error) {
        console.error("N.4495 Violations failed:", error);
        alert("Autofill failed. Make sure you're on the N.4495 violations tab.");
    }
};

// ═══════════════════════════════════════
// N.4495 SERVICE 3: ΙΔΙΟΚΤΗΤΕΣ
// ═══════════════════════════════════════

export const executeN4495_Owners = async (data: any) => {
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    if (!tab?.id) {
        alert("No active tab found");
        return;
    }

    try {
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (data) => {
                // console.log("🚀 N.4495 - Ιδιοκτήτες", data); 

                const owners = data.owners || [];

                const getOwnerTypeValue = (type: string) => {
                    // Default to "Ιδιοκτήτης" (0) if not specified
                    if (!type) return "0";
                    const t = type.toLowerCase();
                    if (t.includes("ιδιοκτ")) return "0";
                    if (t.includes("εργολ")) return "1";
                    if (t.includes("μισθ")) return "2";
                    if (t.includes("νόμιμ") || t.includes("εκπρ")) return "3";
                    if (t.includes("φερόμ") || t.includes("πρόστ")) return "4";
                    if (t.includes("εξαγορ") || t.includes("3147")) return "5";
                    if (t.includes("νομέας") || t.includes("κάτοχ")) return "6";
                    return "0"; // Default to Ιδιοκτήτης
                };

                const getApplicantValue = (val: string, isFirstOwner: boolean) => {
                    // First owner is always "Ναι" (0)
                    if (isFirstOwner) return "0";
                    if (!val) return "1";
                    return val.toLowerCase().includes("ναι") ? "0" : "1";
                };

                const cleanPercentage = (val: string) => {
                    if (!val) return "";
                    const match = val.match(/^(\d+)/);
                    return match ? match[1] : val.replace(/[^\d]/g, "");
                };

                const findPlusButton = () => {
                    const imgs = Array.from(document.querySelectorAll("img"));
                    const plusImg = imgs.find((img: any) => img.src && img.src.includes("plus"));
                    return plusImg?.closest("button") || plusImg?.closest("a");
                };

                const findEmptyRow = () => {
                    const tables = document.querySelectorAll("table");
                    for (const table of tables) {
                        const rows = table.querySelectorAll("tr[role='row']");
                        for (const row of rows) {
                            const cells = row.querySelectorAll("td[role='gridcell']");
                            if (cells.length === 16) {
                                const input0 = cells[0]?.querySelector("input") as HTMLInputElement;
                                if (input0 && (!input0.value || input0.value.trim() === "")) {
                                    return row;
                                }
                            }
                        }
                    }
                    return null;
                };

                const setVal = (cell: Element | null, value: string) => {
                    if (!cell || !value) return false;
                    const el = cell.querySelector("input, select") as any;
                    if (el) {
                        el.focus();
                        el.value = value;
                        el.dispatchEvent(new Event("input", { bubbles: true }));
                        el.dispatchEvent(new Event("change", { bubbles: true }));
                        el.dispatchEvent(new Event("blur", { bubbles: true }));
                        return true;
                    }
                    return false;
                };

                if (typeof (window as any).ownerIndex === "undefined") {
                    (window as any).ownerIndex = 0;
                }

                (async () => {
                    const idx = (window as any).ownerIndex;

                    if (idx >= owners.length) {
                        // console.log("✅ All owners processed!"); 
                        (window as any).ownerIndex = 0;
                        return;
                    }

                    const o = owners[idx];

                    // Map field names from actual data structure
                    const ownerData = {
                        lastName: o.lastName,
                        firstName: o.firstName,
                        ownerType: o.ownerTypeOwnership || "ΠΛΗΡΗΣ",
                        isApplicant: "", // Will be set based on isFirstOwner
                        fatherName: o.fatherFirstLastName?.split(" ")[1] || "", // Extract father's name
                        motherName: o.motherFirstLastName?.split(" ")[1] || "", // Extract mother's name
                        percentage: o.ownershipPercentageOwner?.replace("%", "") || "100",
                        address: o.ownerAddress ? `${o.ownerAddress} ${o.addressNumber || ""}`.trim() : "",
                        city: o.city || "",
                        postalCode: o.postalCode || "",
                        phone: o.phone || "",
                        mobile: "",
                        fax: "",
                        email: o.email || "",
                        afm: o.taxIdentificationNumber || "",
                        foreignAfm: ""
                    };

                    // console.log(`👤 Owner ${idx + 1}/${owners.length}: ${ownerData.lastName} ${ownerData.firstName}`); 

                    let row = findEmptyRow();

                    if (!row) {
                        const btn = findPlusButton();
                        if (btn) {
                            // console.log("🔵 Clicking plus button..."); 
                            (btn as HTMLElement).click();
                            await new Promise(r => setTimeout(r, 1500));
                        }
                        row = findEmptyRow();
                    }

                    if (!row) {
                        console.warn("⚠️ No empty row found");
                        return;
                    }

                    const cells = row.querySelectorAll("td[role='gridcell']");
                    let count = 0;

                    const isFirstOwner = idx === 0;

                    if (setVal(cells[0], ownerData.lastName)) { console.log("✅ Επώνυμο"); count++; }
                    if (setVal(cells[1], ownerData.firstName)) { console.log("✅ Όνομα"); count++; }
                    if (setVal(cells[2], getOwnerTypeValue(ownerData.ownerType))) { console.log("✅ Ιδιότητα"); count++; }
                    if (setVal(cells[3], getApplicantValue(ownerData.isApplicant, isFirstOwner))) { console.log(`✅ Αιτών: ${isFirstOwner ? "ΝΑΙ" : "ΟΧΙ"}`); count++; }
                    if (setVal(cells[4], ownerData.fatherName)) { console.log("✅ Πατρώνυμο"); count++; }
                    if (ownerData.motherName && setVal(cells[5], ownerData.motherName)) { console.log("✅ Μητρώνυμο"); count++; }
                    if (setVal(cells[6], cleanPercentage(ownerData.percentage))) { console.log("✅ Ποσοστό"); count++; }
                    if (ownerData.address && setVal(cells[7], ownerData.address)) { console.log("✅ Διεύθυνση"); count++; }
                    if (ownerData.city && setVal(cells[8], ownerData.city)) { console.log("✅ Πόλη"); count++; }
                    if (ownerData.postalCode && setVal(cells[9], ownerData.postalCode)) { console.log("✅ ΤΚ"); count++; }
                    if (ownerData.phone && setVal(cells[10], ownerData.phone)) { console.log("✅ Τηλέφωνο"); count++; }
                    if (ownerData.mobile && setVal(cells[11], ownerData.mobile)) { console.log("✅ Κινητό"); count++; }
                    if (ownerData.fax && setVal(cells[12], ownerData.fax)) { console.log("✅ Φαξ"); count++; }
                    if (ownerData.email && setVal(cells[13], ownerData.email)) { console.log("✅ Email"); count++; }
                    if (setVal(cells[14], ownerData.afm)) { console.log("✅ ΑΦΜ"); count++; }
                    if (ownerData.foreignAfm && setVal(cells[15], ownerData.foreignAfm)) { console.log("✅ ΑΦΜ εξωτ."); count++; }

                    (window as any).ownerIndex++;

                    // console.log(`✅ Done! (${count} fields)`); 
                    if ((window as any).ownerIndex < owners.length) {
                        console.log(`👉 Run again for owner ${(window as any).ownerIndex + 1}`);
                    }
                })();
            },
            args: [data]
        });
    } catch (error) {
        console.error("N.4495 Owners failed:", error);
        alert("Autofill failed. Make sure you're on the N.4495 owners tab.");
    }
};



export const servicesTwoFill = (data: any) => {
    executeN4495_BasicInfo(data)
    executeN4495_Violations(data)
    executeN4495_Owners(data)
}

