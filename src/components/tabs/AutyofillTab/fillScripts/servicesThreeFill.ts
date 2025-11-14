
export const servicesThreeFill = async (data: any) => {
    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    })

    if (!tab?.id) {
        alert("No active tab found")
        return
    }

    try {
        await chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: (data) => {
                console.log(data)


                // Οδός	
                const propertyAddress = [
                    'input[id="pt1:r1:3:pt1:it18::content"]',
                    'input[id="pt1:r1:4:pt1:it18::content"]',
                    'input[id="pt1:r1:1:pt1:it18::content"]',
                ]
                propertyAddress.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data.propertyAddress || "No Value Found"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })


                // Αρ. από	
                const propertyNumber = [
                    'input[id="pt1:r1:3:pt1:it7::content"]',
                    'input[id="pt1:r1:4:pt1:it7::content"]',
                    'input[id="pt1:r1:1:pt1:it7::content"]',
                    'input[id="r1:3:it2::content"]',
                ]
                propertyNumber.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data.propertyNumber || "No Value Found"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })

                // Πόλη/Οικισμός	
                const municipalityCommunity = [
                    'input[id="pt1:r1:3:pt1:it17::content"]',
                    'input[id="pt1:r1:4:pt1:it17::content"]',
                    'input[id="pt1:r1:1:pt1:it17::content"]',
                    'input[id="r1:3:it3::content"]',
                    'input[id="r1:3:it3::content"]',

                ]
                municipalityCommunity.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data.municipalityCommunity || "No Value Found"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })

                // ΤΚ
                //not working issues in selector
                const propertyPostalCode = [
                    'input[id="pt1:r1:3:pt1:it19::content"]',
                    'input[id="pt1:r1:4:pt1:it19::content"]',
                    'input[id="pt1:r1:1:pt1:it19::content"]',
                    'input[id="r1:3:it18::content"]',

                ]
                propertyPostalCode.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data.propertyPostalCode || "No Value Found"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })


                // todo 
                // 1. ot form new api (kaek lookup)
                const ot = [
                    'input[id="pt1:r1:3:pt1:it15::content"]',
                    'input[id="pt1:r1:1:pt1:it15::content"]',
                    'input[id="r1:3:it19::content"]',

                ]
                ot.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data.otNumber || "No Value Found"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })

                //to-do
                // id="r1:3:it17::content"

                // Δημοτική Ενότητα / Περιοχή	
                //issues here also 
                // const propertyPlace = [
                //   'textarea[id="pt1:r1:4:pt1:it12::content"]',
                //   'textarea[id="pt1:r1:1:pt1:it12::content"]',
                // ]
                // propertyPlace.forEach((selector) => {
                //   const elements = document.querySelectorAll(selector)
                //   elements.forEach((element) => {
                //     if (
                //       element instanceof HTMLInputElement ||
                //       element instanceof HTMLTextAreaElement
                //     ) {
                //       element.value = data.propertyPlace || "No Value Found"
                //       element.dispatchEvent(new Event("input", { bubbles: true }))
                //       element.dispatchEvent(new Event("change", { bubbles: true }))
                //     }
                //   })
                // })


                // project_description
                // Περιγραφή Έργου/Εγκατάστασης
                const project_description = [
                    // 'textarea[id="r1:3:it20::content"',
                    'textarea[id="r1:1:it28::content"]',
                    'textarea[id="pt1:r1:3:pt1:it16::content"]',
                    'textarea[id="pt1:r1:12:pt1:it16::content"]',
                    'textarea[id="r1:0:it28::content"]',
                    'textarea[id="pt1:r1:1:pt1:it16::content"]',
                    'textarea[id="pt1:r1:4:pt1:it16::content"]',
                    // id="r1:1:it28::content"
                    // `textarea[name="r1:2:it28"]`
                ]
                project_description.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data.projectDescriptions || "No Value Found"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })
                // violation_description
                const violation_description = [
                    'textarea[id="r1:2:it11::content"]'
                    // `textarea[name="r1:2:it28"]`
                ]
                violation_description.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data?.violationDescription || "No Value Found"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })
                // vGeospatials coordinates
                const geospatial_coordinates = [
                    'textarea[id="r1:2:it9::content"]'
                    // `textarea[name="r1:2:it28"]`
                ]
                geospatial_coordinates.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data?.violationDescription || "No Value Found"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })
                const kaek_land = [
                    'textarea[id="r1:2:it1::content"]'
                    // `textarea[name="r1:2:it28"]`
                ]
                kaek_land.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data?.violationDescription || "No Value Found"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })
                // postal_code
                const postal_code = [
                    'input[id="r1:2:it21::content"]',
                    'input[id="r1:1:it21::content"]',
                    'input[id="r1:0:it21::content"]',
                    'input[id="pt1:r1:12:pt1:it19::content"]',
                    // `textarea[name="r1:2:it28"]`
                ]
                postal_code.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (element instanceof HTMLInputElement) {
                            element.value = data?.postalCode || ""
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })
                const residential_permit_number = [
                    'input[id="r1:2:it2::content"]'
                    // `textarea[name="r1:2:it28"]`
                ]
                residential_permit_number.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (element instanceof HTMLInputElement) {
                            element.value = data?.permitNo || "Permit"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })
                const main_area = [
                    'input[id="r1:2:it6::content"]'
                    // `textarea[name="r1:2:it28"]`
                ]
                main_area.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (element instanceof HTMLInputElement) {
                            element.value = data?.area || "Area is main area"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })
                const spaces_discount_coefficient_03 = [
                    'input[id="r1:2:it53::content"]'
                    // `textarea[name="r1:2:it28"]`
                ]
                spaces_discount_coefficient_03.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (element instanceof HTMLInputElement) {
                            element.value = ""
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })
                const spaces_discount_coefficient_05 = [
                    'input[id="r1:2:it8::content"]'
                    // `textarea[name="r1:2:it28"]`
                ]
                spaces_discount_coefficient_05.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (element instanceof HTMLInputElement) {
                            element.value = ""
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })
                const height_diff = [
                    'input[id="r1:2:it7::content"]'
                    // `textarea[name="r1:2:it28"]`
                ]
                height_diff.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (element instanceof HTMLInputElement) {
                            element.value = data?.height_diff || "No Data"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })
                const coverage_area = [
                    'input[id="r1:2:it10::content"]'
                    // `textarea[name="r1:2:it28"]`
                ]
                coverage_area.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (element instanceof HTMLInputElement) {
                            element.value = ""
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })
                const swimmingPool_km = [
                    'input[id="r1:2:it5::content"]'
                    // `textarea[name="r1:2:it28"]`
                ]
                swimmingPool_km.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (element instanceof HTMLInputElement) {
                            element.value = ""
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })
                const others_Violation = [
                    'input[id="r1:2:it3::content"]'
                    // `textarea[name="r1:2:it28"]`
                ]
                others_Violation.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (element instanceof HTMLInputElement) {
                            element.value = ""
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })

                // kaekProperty
                // ΚΑΕΚ	
                const kaek = [
                    'input[id="pt1:r1:3:pt1:it13::content"]',
                    'input[id="pt1:r1:12:pt1:it13::content"]',
                    'input[id="pt1:r1:4:pt1:it13::content"]',
                    'input[id="pt1:r1:1:pt1:it13::content"]',
                    // `textarea[name="r1:2:it28"]`
                ]
                kaek.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (element instanceof HTMLInputElement) {
                            element.value = data?.kaekProperty || ""
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })


                const municipal = [

                    // `textarea[name="r1:2:it28"]`
                ]
                municipal.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data?.municipal || ""
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })
                const plot_area = [
                    'input[id="pt1:r1:6:pt1:it17::content"]'
                    // `textarea[name="r1:2:it28"]`
                ]
                plot_area.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data?.area.split(" ")[0].toString() || ""
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })
                const floor = [
                    'input[id="pt1:r1:6:pt1:it19::content"]'
                    // `textarea[name="r1:2:it28"]`
                ]
                floor.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data?.floor || ""
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })

                //Owners


                // find ALL owner row prefixes
                const allInputs = Array.from(document.querySelectorAll('input[id*=":it3::content"]')); // last name is stable field
                const rowPrefixes = [];

                allInputs.forEach(input => {
                    // example: id = "pt1:r1:7:pt1:pc1:t2:4:it3::content"
                    const match = input.id.match(/^(.*?:t2:\d+:)/);
                    if (match && !rowPrefixes.includes(match[1])) {
                        rowPrefixes.push(match[1]);
                    }
                });

                data.owners.forEach((owner, idx) => {
                    const prefix = rowPrefixes[idx];
                    if (!prefix) return; // if UI has fewer rows, skip

                    const fill = (field, value) => {
                        const selector = `input[id="${prefix}${field}"]`;
                        const el = document.querySelector(selector);
                        if (el instanceof HTMLInputElement) {
                            el.value = value;
                            el.dispatchEvent(new Event("input", { bubbles: true }));
                            el.dispatchEvent(new Event("change", { bubbles: true }));
                        }
                    };

                    fill("it6::content", owner.firstName || "");
                    fill("it3::content", owner.lastName || "");
                    fill("it4::content", owner.fatherFirstLastName || "");
                    fill("it7::content", owner.motherFirstLastName || "");
                    fill("it2::content", owner.addressNumber || "");
                    fill("it11::content", owner.city || "");
                    fill("it5::content", owner.postalCode || "");
                    fill("it15::content", owner.phone || "");
                    fill("it1::content", owner.email || "");
                    fill("it9::content", owner.afm || "");
                });


                // experimenting 
                // find delect value with id 
                // function setSelectValueById(selectId, newValue) {
                //   const selectElement = document.getElementById(selectId);
                //   if (selectElement instanceof HTMLSelectElement) {
                //     selectElement.value = newValue;
                //     selectElement.dispatchEvent(new Event('change', { bubbles: true }));
                //     console.log(`Select with ID '${selectId}' value set to '${newValue}'.`);
                //     return true;
                //   }
                //   console.error(`Select element with ID '${selectId}' not found.`);
                //   return false;
                // }

                // const formSelectors2 = [
                //   'select[id="pt1:r1:3:pt1:pc1:t2:0:soc1::content"]'
                // ];

                // formSelectors2.forEach((selector) => {
                //   const elements = document.querySelectorAll(selector);
                //   console.log("elements", elements);

                //   elements.forEach((el) => {
                //     if (el instanceof HTMLSelectElement) {
                //       // set value directly
                //       setSelectValueById(el.id, "3");
                //     } else if (el instanceof HTMLInputElement) {
                //       el.value = "someValue";
                //       el.dispatchEvent(new Event("input", { bubbles: true }));
                //       el.dispatchEvent(new Event("change", { bubbles: true }));
                //     }
                //   });
                // });

                // const formSelectors3 = [
                //   'select[id="pt1:r1:3:pt1:pc1:t2:0:soc2::content"]'
                // ];

                // formSelectors3.forEach((selector) => {
                //   const elements = document.querySelectorAll(selector);
                //   console.log("elements", elements);

                //   elements.forEach((el) => {
                //     if (el instanceof HTMLSelectElement) {
                //       // set value directly
                //       setSelectValueById(el.id, "3");
                //     } else if (el instanceof HTMLInputElement) {
                //       el.value = "someValue";
                //       el.dispatchEvent(new Event("input", { bubbles: true }));
                //       el.dispatchEvent(new Event("change", { bubbles: true }));
                //     }
                //   });
                // });
                // ΥΠ.ΕΝ
                // issuingAuthority
                // id="pt1:r1:3:pt1:pc1:t2:0:it4::content"
                const issuingAuthority = [
                    'input[id="pt1:r1:3:pt1:pc1:t2:0:it4::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:1:it4::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:2:it4::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:3:it4::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:4:it4::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:5:it4::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:6:it4::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:7:it4::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:8:it4::content"]',
                    // `textarea[name="r1:2:it28"]`
                ]
                issuingAuthority.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data?.issuingAuthority || ""
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })

                // Αριθμός πράξης
                // 
                const legalizationStatementNumber = [
                    'input[id="pt1:r1:3:pt1:pc1:t2:0:it3::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:1:it3::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:2:it3::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:3:it3::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:4:it3::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:5:it3::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:6:it3::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:7:it3::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:8:it3::content"]',
                    // `textarea[name="r1:2:it28"]`
                ]
                legalizationStatementNumber.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (element instanceof HTMLInputElement) {
                            element.value = data?.legalizationStatementNumber || ""
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })



                // Δόμηση (τ.μ.)
                const titleArea = [
                    'input[id="pt1:r1:3:pt1:pc1:t2:0:it1::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:1:it1::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:2:it1::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:3:it1::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:4:it1::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:5:it1::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:6:it1::content"]',
                    'input[id="pt1:r1:3:pt1:pc1:t2:7:it1::content"]',
                    // `textarea[name="r1:2:it28"]`
                ]
                titleArea.forEach((selector) => {
                    const elements = document.querySelectorAll(selector);
                    elements.forEach((element) => {
                        if (element instanceof HTMLInputElement) {
                            const rawValue = data?.titleArea || "";

                            // remove anything except digits and dot
                            let cleanedValue = rawValue.replace(/[^\d.]/g, "");

                            // allow only one dot
                            cleanedValue = cleanedValue.replace(/^([^.]*\.)|\./g, (m, g1) => g1 || "");

                            // convert dot to comma
                            cleanedValue = cleanedValue.replace(".", ",");

                            console.log("cleanedValue:", cleanedValue);

                            element.value = cleanedValue;

                            element.dispatchEvent(new Event("input", { bubbles: true }));
                            element.dispatchEvent(new Event("change", { bubbles: true }));
                        }
                    });
                });
                const propertyPlace = [
                    'input[id="r1:3:it15::content"]',
                    // `textarea[name="r1:2:it28"]`
                ]
                propertyPlace.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (element instanceof HTMLInputElement) {
                            element.value = data?.propertyPlace || ""
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })

                // project_description_htk_plot
                // Περιγραφή Οικοπέδου/Γηπέδου
                const project_description_htk_plot = [
                    'textarea[id="r1:3:it20::content"]',
                ]
                project_description_htk_plot.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data.projectDescriptionHtkPlot || ""
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })

                // horizontalPropertyName
                // 'textarea[id="r1:7:it20::content"]',
                const horizontalPropertyName = [
                    'textarea[id="r1:7:it20::content"]',


                ]
                horizontalPropertyName.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data.horizontalPropertyName || "horizontalPropertyName"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })
                const property_address = [
                    // 'input[id="r1:3:it5::content"]',
                    'input[id="r1:2:it13::content"]',

                ]
                property_address.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data.propertyAddress || "No Value Found"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })
                // ΚΑΕΚ Οικοπέδου its a kaek plot
                const kaekProperty = [
                    'input[id="r1:3:it17::content"]',
                    'input[id="r1:7:it5::content"]',
                    'input[id="r1:3:it5::content"]',
                ]
                kaekProperty.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data.kaekProperty || "No Value Found"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })
                // percentageCoOwnershipParcel
                // id="r1:7:it2::content"
                const percentageCoOwnershipParcel = [
                    'input[id="r1:7:it2::content"]',

                ]
                percentageCoOwnershipParcel.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data.percentageCoOwnershipParcel.split("/")[0] || "No Value Found"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })

                // numberEstablishmentHorizontalOwnership
                // if has this reviewsNumbersEstablishmentHorizontalOwnership then reviewsNumbersEstablishmentHorizontalOwnership , if not then  numberEstablishmentHorizontalOwnership 
                // id="r1:7:it3::content"
                const reviewsNumbersEstablishmentHorizontalOwnership = [
                    'input[id="r1:7:it3::content"]',

                ]
                reviewsNumbersEstablishmentHorizontalOwnership.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data.reviewsNumbersEstablishmentHorizontalOwnership || data.numberEstablishmentHorizontalOwnership || "No Value Found"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })

                // id="r1:7:it7::content"
                // notaryReviewsEstablishmentHorizontalOwnership || notaryEstablishmentHorizontalOwnership
                const notaryReviewsEstablishmentHorizontalOwnership = [
                    'input[id="r1:7:it7::content"]',

                ]
                notaryReviewsEstablishmentHorizontalOwnership.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data.notaryReviewsEstablishmentHorizontalOwnership || data.notaryEstablishmentHorizontalOwnership || "No Value Found"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })


                // Επιφάνεια (τμ)
                // plotArea
                // id="r1:3:it13::content"
                // need to fix the comma issuer 277,50 become 27750,
                const plotArea = [
                    'input[id="r1:3:it13::content"]',
                ]
                plotArea.forEach((selector) => {
                    const elements = document.querySelectorAll(selector);
                    elements.forEach((element) => {
                        if (element instanceof HTMLInputElement) {
                            const rawValue = data?.plotArea || "";

                            // extract only number with comma or dot
                            let cleanedValue = rawValue.match(/[\d.,]+/g)?.[0] || "";

                            console.log("cleanedValue:", cleanedValue);

                            element.value = cleanedValue;

                            element.dispatchEvent(new Event("input", { bubbles: true }));
                            element.dispatchEvent(new Event("change", { bubbles: true }));
                        }
                    });
                });
                // Αριθμός κτιρίων
                const kaekLookUoANdOt = [
                    // 'input[id="r1:3:it6::content"]',
                ]
                kaekLookUoANdOt.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = `${data.otNumber} kaek` || "No Value Found"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })
                const prop = [
                    'input[id="r1:3:it7::content"]',
                ]
                prop.forEach((selector) => {
                    const elements = document.querySelectorAll(selector)
                    elements.forEach((element) => {
                        if (
                            element instanceof HTMLInputElement ||
                            element instanceof HTMLTextAreaElement
                        ) {
                            element.value = data.prop || "No Value Found"
                            element.dispatchEvent(new Event("input", { bubbles: true }))
                            element.dispatchEvent(new Event("change", { bubbles: true }))
                        }
                    })
                })


            },

            args: [data]
        })



        // Επώνυμο/ία (Υποχρεωτικό) :::  id="pt1:r1:8:pt1:pc1:t2:0:it3::content" ::: owner surname
        //Όνομα (Υποχρεωτικό) ::: id="pt1:r1:8:pt1:pc1:t2:0:it6::content" ::: owner name
        // Όνομα πατέρα ::: id="pt1:r1:8:pt1:pc1:t2:0:it7::content" ::: owner father only name
        //Όνομα μητέρας ::: id="pt1:r1:8:pt1:pc1:t2:0:it7::content" ::: owner mother only name
        //Ποσοστό (Υποχρεωτικό) :::: id="pt1:r1:8:pt1:pc1:t2:0:it14::content" :: percentage of owner
        ///Διεύθυνση (Υποχρεωτικό) ::: id="pt1:r1:8:pt1:pc1:t2:0:it2::content" :: owner address
        //Πόλη (Υποχρεωτικό) ::: id="pt1:r1:8:pt1:pc1:t2:0:it11::content" ::: municipality of owner
        //ΤΚ (Υποχρεωτικό) :: id="pt1:r1:8:pt1:pc1:t2:0:it5::content" ::: postal code of owner
        //Τηλέφωνο ::: id="pt1:r1:8:pt1:pc1:t2:0:it15::content" ::: phone of owner
        //ΑΦΜ ::: id="pt1:r1:8:pt1:pc1:t2:0:it9::content" ::: taxIdentificationNumber
        //ΑΔΤ ::: id="pt1:r1:8:pt1:pc1:t2:0:it12::content"::: idNumber
        //

        // Close popup after successful autofill
        // window.close()


        //third serviuces owner 
        // id="r1:7:pc3:t8:0:it36::content" -> third dervice owner percentage -> Ποσοστό
        // id="r1:7:pc3:t8:0:it37::content" -> owner surname -> Επώνυμο/ία
        //id="r1:7:pc3:t8:0:it25::content" -> father pnly name
        //id="r1:7:pc3:t8:0:it33::content" -> adress and number owner -> ownerAddress addressNumber || Διεύθυνση
        // id="r1:7:pc3:t8:0:it24::content" -> Πόλη || city
        //id="r1:7:pc3:t8:0:it41::content" -> postal code
        // id="r1:7:pc3:t8:0:it17::content" -> TEE mumber

        //id="r1:3:pc1:t2:0:it27::content" -> Α/Α πράξης (Υποχρεωτικό) -> permitNumber
        //id="r1:3:pc1:t2:0:id6::content" -> dateIssuanceBuildingPermit
        // id="r1:3:pc1:t2:0:it29::content" -> static text -> ΟΙΚΟΔΟΜΙΚΗ ΑΔΕΙΑ
        // id="r1:3:pc1:t2:0:it30::content" -Z> issuingAuthority
    } catch (error) {
        console.error("Autofill failed:", error)
        alert("Autofill failed. Make sure you're on a page with forms.")
    }
}
