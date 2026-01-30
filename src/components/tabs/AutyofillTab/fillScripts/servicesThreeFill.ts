
// export const servicesThreeFill2 = async (data: any) => {
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
//                             element.value = data.projectDescriptionHtkPlot || ""
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
 * HTK Service - Chrome Extension
 * Ηλεκτρονική Ταυτότητα Κτιρίου
 */

// ═══════════════════════════════════════════════════════════════
// HTK 0 - ΟΙΚΟΠΕΔΟ
// ═══════════════════════════════════════════════════════════════

export const htkPlotFill = async (data: any) => {
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
            func: (data2: any) => {
                const plotData = {
                    projectDescriptionHtkPlot: data2.projectDescriptionHtkPlot || "",
                    propertyAddress: data2.propertyAddress || "",
                    propertyNumber: data2.propertyNumber || "",
                    municipalityCommunity: data2.municipalityCommunity || "",
                    propertyPostalCode: data2.propertyPostalCode || "",
                    propertyPlace: data2.propertyPlace || "",
                    otNumber: data2.otNumber || "",
                    kaekProperty: data2.kaekProperty || "",
                    plotArea: data2.plotArea || "",
                    withinOutsideCityPlan: data2.withinOutsideCityPlan || "",
                    prop: data2.prop || "1",
                    numberEstablishmentHorizontalOwnership: data2.numberEstablishmentHorizontalOwnership || "",
                    reviewsNumbersEstablishmentHorizontalOwnership: data2.reviewsNumbersEstablishmentHorizontalOwnership || "",
                    horizontalPropertyName: data2.horizontalPropertyName || ""
                };

                const getInsidePlanValue = (val: string): string => {
                    if (!val) return "4";
                    const v = val.toUpperCase();
                    if (v.includes("ΕΝΤΟΣ") && v.includes("ΣΧΕΔ")) return "4";
                    if (v.includes("ΕΝΤΟΣ") && v.includes("ΟΙΚΙΣ")) return "5";
                    if (v.includes("ΕΚΤΟΣ")) return "3";
                    return "4";
                };

                const getDivisionValue = (): string => {
                    if (plotData.numberEstablishmentHorizontalOwnership || plotData.reviewsNumbersEstablishmentHorizontalOwnership) {
                        return "1";
                    }
                    if (plotData.horizontalPropertyName && plotData.horizontalPropertyName.toUpperCase().includes("ΟΡΙΖΟΝΤ")) {
                        return "1";
                    }
                    return "0";
                };

                const transformKaek = (kaek: string): string => {
                    if (!kaek) return "";
                    return kaek.replace(/\/(\d+)$/, "/0");
                };

                const cleanArea = (area) => {
                    if (!area) return "";
                    let cleaned = area.replace(/τ\.?μ\.?/gi, "").trim();
                    cleaned = cleaned.replace(/[^\d,]/g, "");
                    return cleaned;
                };


                const setValue = (el: any, value: string): boolean => {
                    if (!el || value === undefined || value === null || value === "") return false;
                    el.focus();
                    el.value = value;
                    el.dispatchEvent(new Event("input", { bubbles: true }));
                    el.dispatchEvent(new Event("change", { bubbles: true }));
                    el.dispatchEvent(new Event("blur", { bubbles: true }));
                    return true;
                };

                const getFieldByRowIndex = (rowIndex: number): any => {
                    const rows = document.querySelectorAll("tr");
                    return rows[rowIndex]?.querySelector("input, textarea, select");
                };

                let count = 0;
                const divisionValue = getDivisionValue();
                // console.log(`Διαίρεση: ${divisionValue === "1" ? "ΜΕ σύσταση οριζοντίου" : "ΧΩΡΙΣ σύσταση"}`);

                const fields = [
                    { row: 10, value: plotData.projectDescriptionHtkPlot, name: "Περιγραφή" },
                    { row: 12, value: plotData.propertyAddress, name: "Οδός" },
                    { row: 13, value: plotData.propertyNumber, name: "Αριθμός" },
                    { row: 14, value: plotData.municipalityCommunity, name: "Πόλη/Οικισμός" },
                    { row: 15, value: plotData.propertyPostalCode, name: "ΤΚ" },
                    { row: 16, value: plotData.propertyPlace, name: "Περιοχή/Τοποθεσία" },
                    { row: 17, value: plotData.otNumber, name: "ΟΤ" },
                    { row: 24, value: transformKaek(plotData.kaekProperty), name: "ΚΑΕΚ Οικοπέδου" },
                    { row: 25, value: cleanArea(plotData.plotArea), name: "Επιφάνεια" },
                    { row: 26, value: getInsidePlanValue(plotData.withinOutsideCityPlan), name: "Εντός σχεδίου" },
                    { row: 27, value: "8", name: "Ειδικό καθεστώς" },
                    { row: 28, value: divisionValue, name: "Διαίρεση" },
                    { row: 29, value: "1", name: "Αδόμητο" },
                    { row: 30, value: "1", name: "Αριθμός κτιρίων" },
                    { row: 31, value: String(plotData.prop), name: "Αριθμός Ιδιοκτησιών" }
                ];

                fields.forEach(({ row, value, name }) => {
                    if (value === undefined || value === null || value === "") return;
                    const field = getFieldByRowIndex(row);
                    if (field && setValue(field, String(value))) {
                        // console.log(`✓ ${name}: ${value}`);
                        count++;
                    }
                });

                // console.log(`\n✅ HTK ΟΙΚΟΠΕΔΟ - Done! (${count} πεδία)`);
            },
            args: [data]
        });
    } catch (e) {
        console.error("HTK Plot Fill Error:", e);
    }
};

// ═══════════════════════════════════════════════════════════════
// HTK 1 - ΙΔΙΟΚΤΗΣΙΑ
// ═══════════════════════════════════════════════════════════════

export const htkPropertyFill = async (data: any) => {
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
            func: (data2: any) => {
                const data = {
                    horizontalPropertyName: data2.horizontalPropertyName || "",
                    kaekProperty: data2.kaekProperty || "",
                    percentageCoOwnershipParcel: data2.percentageCoOwnershipParcel || "",
                    numberEstablishmentHorizontalOwnership: data2.numberEstablishmentHorizontalOwnership || "",
                    reviewsNumbersEstablishmentHorizontalOwnership: data2.reviewsNumbersEstablishmentHorizontalOwnership || "",
                    notaryEstablishmentHorizontalOwnership: data2.notaryEstablishmentHorizontalOwnership || "",
                    notaryReviewsEstablishmentHorizontalOwnership: data2.notaryReviewsEstablishmentHorizontalOwnership || "",
                    technicalDescriptionThree: data2.technicalDescriptionThree || "",
                    technicalDescriptionFour: data2.technicalDescriptionFour || "",
                    technicalDescriptionFive: data2.technicalDescriptionFive || "",
                    technicalDescriptionEight: data2.technicalDescriptionEight || "",
                    technicalDescriptionNine: data2.technicalDescriptionNine || "",
                    exclusiveUseProperty: data2.exclusiveUseProperty || ""
                };

                const getPropertyTypeValue = (): string => {
                    return data.horizontalPropertyName ? "2" : "0";
                };

                const cleanPermillage = (val: string): string => {
                    if (!val) return "";
                    const match = val.match(/^(\d+)/);
                    return match ? match[1] : val.replace(/[^\d]/g, "");
                };

                const getContractNumber = (): string => {
                    return data.reviewsNumbersEstablishmentHorizontalOwnership || data.numberEstablishmentHorizontalOwnership || "";
                };

                const getNotary = (): string => {
                    return data.notaryReviewsEstablishmentHorizontalOwnership || data.notaryEstablishmentHorizontalOwnership || "";
                };

                const getTechnicalDescription = (): string => {
                    const parts = [
                        data.technicalDescriptionThree,
                        data.technicalDescriptionFour,
                        data.technicalDescriptionFive,
                        data.technicalDescriptionEight,
                        data.technicalDescriptionNine
                    ].filter(p => p && p.trim());
                    return parts.join("\n\n");
                };

                const getParkingSpaces = (): string => {
                    if (!data.exclusiveUseProperty) return "0";
                    const text = data.exclusiveUseProperty.toLowerCase();
                    if (text.includes("δύο θέσ") || text.includes("2 θέσ") || text.includes("δυο θέσ")) return "2";
                    if (text.includes("τρεις θέσ") || text.includes("3 θέσ")) return "3";
                    if (text.includes("τέσσερις θέσ") || text.includes("4 θέσ")) return "4";
                    if (text.includes("στάθμ") || text.includes("πάρκιν") || text.includes("parking") || text.includes("θέση")) return "1";
                    return "0";
                };

                const setValue = (el: any, value: string): boolean => {
                    if (!el || value === undefined || value === null || value === "") return false;
                    el.focus();
                    el.value = value;
                    el.dispatchEvent(new Event("input", { bubbles: true }));
                    el.dispatchEvent(new Event("change", { bubbles: true }));
                    el.dispatchEvent(new Event("blur", { bubbles: true }));
                    return true;
                };

                const getFieldByRowIndex = (rowIndex: number): any => {
                    const rows = document.querySelectorAll("tr");
                    return rows[rowIndex]?.querySelector("input, textarea, select");
                };

                let count = 0;
                const fields = [
                    { row: 37, value: getPropertyTypeValue(), name: "Τύπος Ιδιοκτησίας" },
                    { row: 38, value: data.horizontalPropertyName, name: "Περιγραφή Ιδιοκτησίας" },
                    { row: 39, value: "1", name: "Υλοποιημένη Ιδιοκτησία (ΝΑΙ)" },
                    { row: 40, value: data.kaekProperty, name: "ΚΑΕΚ Ιδιοκτησίας" },
                    { row: 41, value: cleanPermillage(data.percentageCoOwnershipParcel), name: "Χιλιοστά" },
                    { row: 42, value: getContractNumber(), name: "Αριθμός/Έτος Συμβολαίου" },
                    { row: 43, value: getNotary(), name: "Στοιχεία Εκδότη" },
                    { row: 44, value: getParkingSpaces(), name: "Θέσεις στάθμευσης" },
                    { row: 49, value: "1", name: "Αιτιολογία (Διενέργεια δικαιοπραξίας)" },
                    { row: 52, value: getTechnicalDescription(), name: "Τεχνική περιγραφή" }
                ];

                fields.forEach(({ row, value, name }) => {
                    if (value === undefined || value === null || value === "") return;
                    const field = getFieldByRowIndex(row);
                    if (field && setValue(field, String(value))) {
                        // console.log(`✓ ${name}: ${String(value).substring(0, 50)}...`);
                        count++;
                    }
                });

                // console.log(`\n✅ HTK ΙΔΙΟΚΤΗΣΙΑ - Done! (${count} πεδία)`);
            },
            args: [data]
        });
    } catch (e) {
        console.error("HTK Property Fill Error:", e);
    }
};

// ═══════════════════════════════════════════════════════════════
// HTK 2 - ΙΔΙΟΚΤΗΤΕΣ
// ═══════════════════════════════════════════════════════════════

export const htkOwnersFill = async (data: any) => {
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
            func: async (data2: any) => {
                const owners = data2.owners || [];

                if (!owners.length) {
                    // console.log("⚠ Δεν υπάρχουν ιδιοκτήτες");
                    return;
                }

                const getOwnerTypeValue = (type: string): string => {
                    if (!type) return "6";
                    const t = type.toUpperCase();
                    if (t.includes("ΠΛΗΡ")) return "2";
                    if (t.includes("ΨΙΛΗ") || t.includes("ΨΙΛΟ")) return "3";
                    if (t.includes("ΕΠΙΚΑΡΠ")) return "4";
                    if (t.includes("ΜΙΣΘ")) return "5";
                    return "6";
                };

                const cleanPercentage = (val: string): string => {
                    if (!val) return "";
                    const match = val.match(/^(\d+)/);
                    return match ? match[1] : val.replace(/[^\d]/g, "");
                };

                const findPlusButton = (): any => {
                    const imgs = Array.from(document.querySelectorAll("img"));
                    const plusImg = imgs.find((img: any) => img.src.includes("plus"));
                    return (plusImg as any)?.closest("button") || (plusImg as any)?.closest("a");
                };

                const findEmptyRow = (): any => {
                    const tables = document.querySelectorAll("table");
                    for (const table of tables) {
                        const rows = table.querySelectorAll("tr");
                        for (const row of rows) {
                            const cells = row.querySelectorAll("td");
                            if (cells.length >= 13) {
                                const select0 = cells[0]?.querySelector("select");
                                const input1 = cells[1]?.querySelector("input") as HTMLInputElement;
                                if (select0 && input1 && !input1.value) {
                                    return row;
                                }
                            }
                        }
                    }
                    return null;
                };

                const setVal = (cell: any, value: string) => {
                    if (!cell) return;
                    const el = cell.querySelector("input, select");
                    if (el && value !== undefined && value !== null && value !== "") {
                        el.value = String(value);
                        el.dispatchEvent(new Event("change", { bubbles: true }));
                        el.dispatchEvent(new Event("input", { bubbles: true }));
                    }
                };

                // Initialize index
                if (typeof (window as any).ownerIndex === "undefined") {
                    (window as any).ownerIndex = 0;
                }

                if ((window as any).ownerIndex >= owners.length) {
                    // console.log("✅ Όλοι οι ιδιοκτήτες έχουν μπει!");
                    // console.log("Για reset: window.ownerIndex = 0");
                    (window as any).ownerIndex = 0;
                    return;
                }

                const o = owners[(window as any).ownerIndex];
                const isFirst = (window as any).ownerIndex === 0;
                // console.log(`Ιδιοκτήτης ${(window as any).ownerIndex + 1}/${owners.length}: ${o.lastName} ${o.firstName}`);

                // Find or create row
                let row = findEmptyRow();
                if (!row) {
                    const btn = findPlusButton();
                    if (btn) {
                        btn.click();
                        await new Promise(r => setTimeout(r, 1200));
                    }
                    row = findEmptyRow();
                }

                if (!row) {
                    console.warn("⚠ Δεν βρέθηκε άδειο row");
                    return;
                }

                const cells = row.querySelectorAll("td");
                const fatherName = o.fatherFirstLastName?.split(" ")[1] || o.fatherFirstLastName || "";

                setVal(cells[0], getOwnerTypeValue(o.ownerTypeOwnership || ""));
                setVal(cells[1], cleanPercentage(o.ownershipPercentageOwner || ""));
                setVal(cells[2], o.lastName || "");
                setVal(cells[3], o.firstName || "");
                setVal(cells[4], fatherName);
                setVal(cells[5], isFirst ? "0" : "1"); // Πρώτος = Υπόχρεος
                setVal(cells[6], `${o.ownerAddress || ""} ${o.addressNumber || ""}`.trim());
                setVal(cells[7], o.city || "");
                setVal(cells[8], o.postalCode || "");
                setVal(cells[9], o.phone || "");
                setVal(cells[10], ""); // mobile
                setVal(cells[11], o.email || "");
                setVal(cells[12], o.taxIdentificationNumber || "");

                (window as any).ownerIndex++;

                // console.log(`✅ Done!`);
                if ((window as any).ownerIndex < owners.length) {
                    // console.log(`👉 Τρέξε ΞΑΝΑ για ιδιοκτήτη ${(window as any).ownerIndex + 1}/${owners.length}`);
                }
                // else {
                //     console.log("✅ ΟΛΟΙ ΟΙ ΙΔΙΟΚΤΗΤΕΣ ΤΕΛΟΣ!");
                // }
            },
            args: [data]
        });
    } catch (e) {
        console.error("HTK Owners Fill Error:", e);
    }
};

// ═══════════════════════════════════════════════════════════════
// HTK 3 - ΠΡΑΞΕΙΣ
// ═══════════════════════════════════════════════════════════════

export const htkPermitsFill = async (data: any) => {
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
            func: async (data2: any) => {
                const permits: any[] = [];

                // 1. Οικοδομική Άδεια
                if (data2.permitNumber) {
                    permits.push({
                        type: "0",
                        number: data2.permitNumber,
                        date: data2.dateIssuanceBuildingPermit || "",
                        title: "ΟΙΚΟΔΟΜΙΚΗ ΑΔΕΙΑ",
                        authority: "2",
                        authorityDetails: data2.issuingAuthority || "",
                        extra: data2.projectTitleDescriptionLicense || ""
                    });
                }

                // 2. Αναθεώρηση Ο.Α.
                if (data2.licenseNumberRevision) {
                    permits.push({
                        type: "0",
                        number: data2.licenseNumberRevision,
                        date: data2.dateIssueBuildingPermitRevision || "",
                        title: "ΑΝΑΘΕΩΡΗΣΗ ΟΙΚΟΔΟΜΙΚΗΣ ΑΔΕΙΑΣ",
                        authority: "2",
                        authorityDetails: data2.issuingAuthority || "",
                        extra: "ΑΝΑΘΕΩΡΗΣΗ Ο.Α."
                    });
                }

                // 3. Αναθεώρηση 2
                if (data2.licenseNumberRevisionTwo) {
                    permits.push({
                        type: "0",
                        number: data2.licenseNumberRevisionTwo,
                        date: data2.dateIssueBuildingPermitRevisionTwo || "",
                        title: "ΑΝΑΘΕΩΡΗΣΗ ΟΙΚΟΔΟΜΙΚΗΣ ΑΔΕΙΑΣ",
                        authority: "2",
                        authorityDetails: data2.issuingAuthority || "",
                        extra: "ΑΝΑΘΕΩΡΗΣΗ Ο.Α."
                    });
                }

                // 4. Ν.4495/17
                if (data2.legalizationStatementNumber) {
                    permits.push({
                        type: "13",
                        number: data2.legalizationStatementNumber,
                        date: data2.inclusionDateLegalization || "",
                        title: "ΒΕΒΑΙΩΣΗ ΠΕΡΑΙΩΣΗΣ ΥΠΑΓΩΓΗΣ Ν.4495/17",
                        authority: "1",
                        authorityDetails: `${data2.engineerFullName || ""} - ${data2.specialty || ""} - Α.Μ. ΤΕΕ ${data2.teeRegistrationNumber || ""}`,
                        extra: `Ηλεκτρονικός Κωδικός: ${data2.electronicCode || ""}`
                    });
                }

                // 5. Ν.3843/10
                if (data2.completionDeclaration3843Number) {
                    permits.push({
                        type: "11",
                        number: data2.completionDeclaration3843Number,
                        date: data2.dateIssueCompletionDeclaration3843 || "",
                        title: "ΒΕΒΑΙΩΣΗ ΠΕΡΑΙΩΣΗΣ ΥΠΑΓΩΓΗΣ Ν.3843/10",
                        authority: "2",
                        authorityDetails: data2.issuingAuthority3843 || "",
                        extra: data2.descriptionValidations3843 || "Υπαγωγή στο ν.3843/2010"
                    });
                }

                // 6. Ν.1337/83
                if (data2.declarationNumber1337) {
                    permits.push({
                        type: "7",
                        number: data2.declarationNumber1337,
                        date: data2.dateOfSubmission1337 || "",
                        title: "ΒΕΒΑΙΩΣΗ ΠΕΡΑΙΩΣΗΣ ΥΠΑΓΩΓΗΣ Ν.1337/83",
                        authority: "2",
                        authorityDetails: data2.issuingAuthority1337 || "",
                        extra: "Υπαγωγή στο ν.1337/1983"
                    });
                }

                // 7. ΕΕΜΚ
                if (data2.licenseNumberEemk) {
                    permits.push({
                        type: "2",
                        number: data2.licenseNumberEemk,
                        date: data2.dateOfIssuanceEemk || "",
                        title: "ΕΓΚΡΙΣΗ ΕΡΓΑΣΙΩΝ ΔΟΜΗΣΗΣ ΜΙΚΡΗΣ ΚΛΙΜΑΚΑΣ",
                        authority: "3",
                        authorityDetails: data2.issuingAuthorityEemk || "",
                        extra: data2.projectTitleDescriptionEemk || ""
                    });
                }

                // 8. Απώλεια Φακέλου
                if (data2.protocolNumberLossCertificate) {
                    permits.push({
                        type: "15",
                        number: data2.protocolNumberLossCertificate,
                        date: data2.protocolDateLossCertificate || "",
                        title: "ΒΕΒΑΙΩΣΗ ΑΠΩΛΕΙΑΣ ΦΑΚΕΛΟΥ Ο.Α.",
                        authority: "2",
                        authorityDetails: data2.issuingAuthorityLossCertificate || "",
                        extra: "Βεβαίωση Απώλειας Φακέλου Ο.Α."
                    });
                }

                if (!permits.length) {
                    // console.log("⚠ Δεν υπάρχουν πράξεις για καταχώρηση");
                    return;
                }

                // console.log(`📋 Βρέθηκαν ${permits.length} πράξεις για καταχώρηση`);
                // permits.forEach((p, i) => console.log(`  ${i + 1}. ${p.title} - ${p.number}`));

                const findPlusButton = (): any => {
                    const imgs = Array.from(document.querySelectorAll("img"));
                    const plusImg = imgs.find((img: any) => img.src.includes("plus"));
                    return (plusImg as any)?.closest("button") || (plusImg as any)?.closest("a");
                };

                const findEmptyRow = (): any => {
                    const tables = document.querySelectorAll("table");
                    for (const table of tables) {
                        const rows = table.querySelectorAll("tr");
                        for (const row of rows) {
                            const cells = row.querySelectorAll("td");
                            if (cells.length >= 28) {
                                const select0 = cells[0]?.querySelector("select");
                                const input23 = cells[23]?.querySelector("input") as HTMLInputElement;
                                if (select0 && input23 && !input23.value) {
                                    return row;
                                }
                            }
                        }
                    }
                    return null;
                };

                const setVal = (cell: any, value: string) => {
                    if (!cell) return;
                    const el = cell.querySelector("input, select");
                    if (el && value !== undefined && value !== null && value !== "") {
                        el.value = String(value);
                        el.dispatchEvent(new Event("change", { bubbles: true }));
                        el.dispatchEvent(new Event("input", { bubbles: true }));
                    }
                };

                // Initialize index
                if (typeof (window as any).permitIndex === "undefined") {
                    (window as any).permitIndex = 0;
                }

                if ((window as any).permitIndex >= permits.length) {
                    // console.log("✅ Όλες οι πράξεις έχουν μπει!");
                    // console.log("Για reset: window.permitIndex = 0");
                    (window as any).permitIndex = 0;
                    return;
                }

                const p = permits[(window as any).permitIndex];
                // console.log(`\nΠράξη ${(window as any).permitIndex + 1}/${permits.length}: ${p.title}`);

                // Find or create row
                let row = findEmptyRow();
                if (!row) {
                    const btn = findPlusButton();
                    if (btn) {
                        btn.click();
                        await new Promise(r => setTimeout(r, 1200));
                    }
                    row = findEmptyRow();
                }

                if (!row) {
                    console.warn("⚠ Δεν βρέθηκε άδειο row");
                    return;
                }

                const cells = row.querySelectorAll("td");
                setVal(cells[0], p.type);
                setVal(cells[23], p.number);
                setVal(cells[24], p.date);
                setVal(cells[25], p.title);
                setVal(cells[26], p.authority);
                setVal(cells[27], p.authorityDetails);
                setVal(cells[28], p.extra);

                (window as any).permitIndex++;

                // console.log(`✅ Done!`);
                // if ((window as any).permitIndex < permits.length) {
                //     console.log(`👉 Τρέξε ΞΑΝΑ για πράξη ${(window as any).permitIndex + 1}/${permits.length}`);
                // } else {
                //     console.log("✅ ΟΛΕΣ ΟΙ ΠΡΑΞΕΙΣ ΤΕΛΟΣ!");
                // }
            },
            args: [data]
        });
    } catch (e) {
        console.error("HTK Permits Fill Error:", e);
    }
};

// ═══════════════════════════════════════════════════════════════
// HTK 4 - ΧΡΗΣΕΙΣ
// ═══════════════════════════════════════════════════════════════

export const htkUsesFill = async (data: any) => {
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
            func: async (data2: any) => {
                const getUseTypeValue = (name: string): string => {
                    if (!name) return "0";
                    const n = name.toLowerCase();
                    if (n.includes("διαμέρ") || n.includes("διαμερ") || n.includes("κατοικ")) return "0";
                    if (n.includes("αποθήκ") || n.includes("αποθηκ")) return "4";
                    if (n.includes("κατάστ") || n.includes("καταστ") || n.includes("εμπορ")) return "7";
                    if (n.includes("γραφ")) return "11";
                    if (n.includes("στάθμ") || n.includes("σταθμ") || n.includes("parking") || n.includes("πάρκιν")) return "8";
                    if (n.includes("βιομηχ") || n.includes("βιοτεχ") || n.includes("εργαστ")) return "10";
                    return "5";
                };

                const getFloorValue = (floor: string): string => {
                    if (!floor) return "7";
                    const f = floor.toUpperCase().trim();
                    if (f === "Υ" || f === "Υ1" || f.includes("1Ο ΥΠΟΓ")) return "2";
                    if (f === "Υ2" || f.includes("2Ο ΥΠΟΓ")) return "3";
                    if (f === "Υ3" || f.includes("3Ο ΥΠΟΓ")) return "4";
                    if (f === "Ι" || f === "ΙΣ" || f.includes("ΙΣΟΓ")) return "7";
                    if (f === "Α" || f === "1" || f === "1ΟΣ") return "8";
                    if (f === "Β" || f === "2" || f === "2ΟΣ") return "9";
                    if (f === "Γ" || f === "3" || f === "3ΟΣ") return "10";
                    if (f === "Δ" || f === "4" || f === "4ΟΣ") return "11";
                    if (f === "Ε" || f === "5" || f === "5ΟΣ") return "12";
                    if (f === "ΣΤ" || f === "6" || f === "6ΟΣ") return "13";
                    if (f === "Ζ" || f === "7" || f === "7ΟΣ") return "14";
                    if (f === "Η" || f === "8" || f === "8ΟΣ") return "15";
                    return "7";
                };

                const cleanAreaForUses = (area: string): string => {
                    if (!area) return "";
                    let cleaned = area.replace(/τ\.?μ\.?/gi, "").trim();
                    cleaned = cleaned.replace(/[^\d.,]/g, "");
                    const match = cleaned.match(/^(\d+)[.,](\d{3})$/);
                    if (match) {
                        const intPart = match[1];
                        const decPart = match[2];
                        const decimal = parseInt(decPart) / 1000;
                        if (decimal === 0) return intPart;
                        const decStr = decimal.toString().replace("0.", ",");
                        return intPart + decStr;
                    }
                    return cleaned.replace(".", ",");
                };

                const shortenDescription = (desc: string): string => {
                    if (!desc) return "";
                    let short = desc
                        .replace(/την υπό στοιχεία /gi, "")
                        .replace(/η υπό στοιχεία /gi, "")
                        .replace(/υπό στοιχεία /gi, "")
                        .replace(/οριζόντια ιδιοκτησία[- ]*/gi, "")
                        .replace(/του υπογείου ορόφου/gi, "Υπογείου")
                        .replace(/του ισογείου ορόφου/gi, "Ισογείου")
                        .replace(/του πρώτου.*?ορόφου/gi, "Α ορόφου")
                        .replace(/του δευτέρου.*?ορόφου/gi, "Β ορόφου")
                        .replace(/πάνω από το ισόγειο/gi, "")
                        .trim();
                    if (short.length > 62) short = short.substring(0, 59) + "...";
                    return short;
                };

                const uses: any[] = [];

                // 1. Κύρια χρήση
                if (data2.horizontalPropertyName && data2.titleArea) {
                    uses.push({
                        type: getUseTypeValue(data2.horizontalPropertyName),
                        description: shortenDescription(data2.horizontalPropertyName),
                        area: cleanAreaForUses(data2.titleArea),
                        floor: getFloorValue(data2.floorProperty || ""),
                        level: "1"
                    });
                }

                // 2. Λοιπές χρήσεις από exclusiveUseProperty
                if (data2.exclusiveUseProperty) {
                    const excl = data2.exclusiveUseProperty.toLowerCase();
                    if (excl.includes("στάθμ") || excl.includes("πάρκιν") || excl.includes("parking")) {
                        const areaMatch = excl.match(/(\d+[.,]?\d*)\s*τ\.?μ/);
                        uses.push({
                            type: "8",
                            description: shortenDescription(data2.exclusiveUseProperty),
                            area: areaMatch ? areaMatch[1].replace(",", ".") : "",
                            floor: "7",
                            level: "1"
                        });
                    }
                    if (excl.includes("αποθήκ") || excl.includes("αποθηκ")) {
                        const areaMatch = excl.match(/(\d+[.,]?\d*)\s*τ\.?μ/);
                        uses.push({
                            type: "4",
                            description: shortenDescription(data2.exclusiveUseProperty),
                            area: areaMatch ? areaMatch[1].replace(",", ".") : "",
                            floor: "2",
                            level: "1"
                        });
                    }
                }

                if (!uses.length) {
                    // console.log("⚠ Δεν υπάρχουν χρήσεις για καταχώρηση");
                    return;
                }

                // console.log(`📋 Βρέθηκαν ${uses.length} χρήσεις για καταχώρηση`); 
                // uses.forEach((u, i) => console.log(`  ${i + 1}. Type:${u.type} - ${u.description} - ${u.area} τμ`)); 

                const findPlusButton = (): any => {
                    const imgs = Array.from(document.querySelectorAll("img"));
                    const plusImg = imgs.find((img: any) => img.src.includes("plus"));
                    return (plusImg as any)?.closest("button") || (plusImg as any)?.closest("a");
                };

                const findEmptyRow = (): any => {
                    const tables = document.querySelectorAll("table");
                    for (let ti = 0; ti < tables.length; ti++) {
                        const rows = tables[ti].querySelectorAll("tr");
                        for (let ri = 0; ri < rows.length; ri++) {
                            const cells = rows[ri].querySelectorAll("td");
                            if (cells.length >= 5 && cells.length <= 6) {
                                const select0 = cells[0]?.querySelector("select");
                                const input1 = cells[1]?.querySelector("input") as HTMLInputElement;
                                if (select0 && input1 && input1.value === "") {
                                    return rows[ri];
                                }
                            }
                        }
                    }
                    return null;
                };

                const setVal = (cell: any, value: string) => {
                    if (!cell) return;
                    const el = cell.querySelector("input, select");
                    if (el && value !== undefined && value !== null && value !== "") {
                        el.value = String(value);
                        el.dispatchEvent(new Event("change", { bubbles: true }));
                        el.dispatchEvent(new Event("input", { bubbles: true }));
                    }
                };

                // Initialize index
                if (typeof (window as any).useIndex === "undefined") {
                    (window as any).useIndex = 0;
                }

                if ((window as any).useIndex >= uses.length) {
                    // console.log("✅ Όλες οι χρήσεις έχουν μπει!"); 
                    // console.log("Για reset: window.useIndex = 0");
                    (window as any).useIndex = 0;
                    return;
                }

                const u = uses[(window as any).useIndex];
                // console.log(`\nΧρήση ${(window as any).useIndex + 1}/${uses.length}: ${u.description}`); 

                // Find or create row
                let row = findEmptyRow();
                if (!row) {
                    const btn = findPlusButton();
                    if (btn) {
                        btn.click();
                        await new Promise(r => setTimeout(r, 1200));
                    }
                    row = findEmptyRow();
                }

                if (!row) {
                    console.warn("⚠ Δεν βρέθηκε άδειο row");
                    return;
                }

                const cells = row.querySelectorAll("td");
                setVal(cells[0], u.type);
                setVal(cells[1], u.description);
                setVal(cells[2], u.area);
                setVal(cells[3], u.floor);
                setVal(cells[4], u.level);

                (window as any).useIndex++;

                // console.log(`✅ Done!`); 
                // if ((window as any).useIndex < uses.length) {
                //     console.log(`👉 Τρέξε ΞΑΝΑ για χρήση ${(window as any).useIndex + 1}/${uses.length}`); 
                // } else {
                //     console.log("✅ ΟΛΕΣ ΟΙ ΧΡΗΣΕΙΣ ΤΕΛΟΣ!");
                // }
            },
            args: [data]
        });
    } catch (e) {
        console.error("HTK Uses Fill Error:", e);
    }
};

// ═══════════════════════════════════════════════════════════════
// HTK 5 - Π.Ε.Α.
// ═══════════════════════════════════════════════════════════════

export const htkPeaFill = async (data: any) => {
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
            func: async (data2: any) => {
                if (!data2.peaProtocolNumber && !data2.peaIssueDate && !data2.peaSecurityNumber) {
                    // console.log("⚠ Δεν υπάρχουν στοιχεία Π.Ε.Α. για καταχώρηση"); 
                    return;
                }

                const getCategoryValue = (cat: string): string => {
                    if (!cat) return "";
                    const c = cat.toUpperCase().trim();
                    if (c === "Α+" || c === "A+") return "0";
                    if (c === "Α" || c === "A") return "1";
                    if (c === "Β+" || c === "B+") return "2";
                    if (c === "Β" || c === "B") return "3";
                    if (c === "Γ" || c === "G") return "4";
                    if (c === "Δ" || c === "D") return "5";
                    if (c === "Ε" || c === "E") return "6";
                    if (c === "Ζ" || c === "Z") return "7";
                    if (c === "Η" || c === "H") return "8";
                    return "";
                };

                const findPlusButton = (): any => {
                    const imgs = Array.from(document.querySelectorAll("img"));
                    const plusImg = imgs.find((img: any) => img.src.includes("plus"));
                    return (plusImg as any)?.closest("a") || (plusImg as any)?.closest("button");
                };

                const findPeaRow = (): any => {
                    const tables = document.querySelectorAll("table");
                    for (let ti = 0; ti < tables.length; ti++) {
                        const rows = tables[ti].querySelectorAll("tr");
                        for (let ri = 0; ri < rows.length; ri++) {
                            const cells = rows[ri].querySelectorAll("td");
                            if (cells.length >= 6 && cells.length <= 8) {
                                const input0 = cells[0]?.querySelector("input") as HTMLInputElement;
                                if (input0 && input0.value === "") {
                                    return rows[ri];
                                }
                            }
                        }
                    }
                    return null;
                };

                const setVal = (cell: any, value: string) => {
                    if (!cell) return;
                    const el = cell.querySelector("input, select");
                    if (el && value !== undefined && value !== null && value !== "") {
                        el.value = String(value);
                        el.dispatchEvent(new Event("change", { bubbles: true }));
                        el.dispatchEvent(new Event("input", { bubbles: true }));
                    }
                };

                // Find or create row
                let row = findPeaRow();
                if (!row) {
                    const btn = findPlusButton();
                    if (btn) {
                        btn.click();
                        await new Promise(r => setTimeout(r, 1200));
                    }
                    row = findPeaRow();
                }

                if (!row) {
                    console.warn("⚠ Δεν βρέθηκε άδειο row Π.Ε.Α.");
                    return;
                }

                const cells = row.querySelectorAll("td");
                setVal(cells[0], data2.peaProtocolNumber || "");
                setVal(cells[1], data2.peaIssueDate || "");
                setVal(cells[2], data2.peaSecurityNumber || "");
                setVal(cells[3], getCategoryValue(data2.peaCategory || ""));
                setVal(cells[4], data2.peaEstimatedAnnualPrimaryEnergyConsumptionKwhM2 || "");
                setVal(cells[5], data2.peaEstimatedAnnualCo2EmissionsKgM2 || "");

                // console.log("✅ HTK Π.Ε.Α. - Done!"); 
            },
            args: [data]
        });
    } catch (e) {
        console.error("HTK PEA Fill Error:", e);
    }
};

