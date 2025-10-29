
export const autofillCredential = async (data: any) => {
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

        // Δημοτική Ενότητα / Περιοχή	
        //issues here also 
        const propertyPlace = [
          'textarea[id="pt1:r1:4:pt1:it12::content"]',
          'textarea[id="pt1:r1:1:pt1:it12::content"]',
        ]
        propertyPlace.forEach((selector) => {
          const elements = document.querySelectorAll(selector)
          elements.forEach((element) => {
            if (
              element instanceof HTMLInputElement ||
              element instanceof HTMLTextAreaElement
            ) {
              element.value = data.propertyPlace || "No Value Found"
              element.dispatchEvent(new Event("input", { bubbles: true }))
              element.dispatchEvent(new Event("change", { bubbles: true }))
            }
          })
        })


        // project_description
        // Περιγραφή Έργου/Εγκατάστασης
        const project_description = [
          'textarea[id="r1:2:it28::content"]',
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

        const plot_description = [
          'textarea[id="r1:3:it20::content"]'
          // 'textarea[id="r1:2:it28::content"]'
          // id="r1:1:it28::content"
          // `textarea[name="r1:2:it28"]`
        ]
        plot_description.forEach((selector) => {
          const elements = document.querySelectorAll(selector)
          elements.forEach((element) => {
            if (
              element instanceof HTMLInputElement ||
              element instanceof HTMLTextAreaElement
            ) {
              element.value = data.projectDescription || "No Value Found"
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
        const comments = [
          'input[id="r1:2:it1::content"]'
          // `textarea[name="r1:2:it28"]`
        ]
        comments.forEach((selector) => {
          const elements = document.querySelectorAll(selector)
          elements.forEach((element) => {
            if (element instanceof HTMLInputElement) {
              element.value = data?.street_no || "No comments"
              element.dispatchEvent(new Event("input", { bubbles: true }))
              element.dispatchEvent(new Event("change", { bubbles: true }))
            }
          })
        })
        const number = [
          'input[id="r1:3:it2::content"]'
          // 'input[id="r1:1:it13::content"]',
          // 'input[id="r1:3:it5::content"]'
          // `textarea[name="r1:2:it28"]`
        ]
        number.forEach((selector) => {
          const elements = document.querySelectorAll(selector)
          elements.forEach((element) => {
            if (element instanceof HTMLInputElement) {
              element.value = data?.street_no || "number"
              element.dispatchEvent(new Event("input", { bubbles: true }))
              element.dispatchEvent(new Event("change", { bubbles: true }))
            }
          })
        })
        // region
        const region = [
          'input[id="r1:2:it41::content"]',
          'input[id="r1:0:it41::content"]',
          'input[id="r1:1:it41::content"]',
          // `textarea[name="r1:2:it28"]`
        ]
        region.forEach((selector) => {
          const elements = document.querySelectorAll(selector)
          elements.forEach((element) => {
            if (element instanceof HTMLInputElement) {
              element.value = data?.region
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
              element.value = data?.protocolNumber || ""
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
        const property_place = [
          'input[id="r1:3:it15::content"]',
          // `textarea[name="r1:2:it28"]`
        ]
        property_place.forEach((selector) => {
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
  } catch (error) {
    console.error("Autofill failed:", error)
    alert("Autofill failed. Make sure you're on a page with forms.")
  }
}
