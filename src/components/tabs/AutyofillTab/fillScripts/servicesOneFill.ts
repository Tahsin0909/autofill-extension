export const servicesOneFill2 = async (data: any) => {

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

    if (!tab?.id) return



    await chrome.scripting.executeScript({

        target: { tabId: tab.id },

        args: [data],

        func: async (data) => {



            /* ========================================= 
      
               HELPERS - ΚΟΙΝΕΣ ΣΥΝΑΡΤΗΣΕΙΣ 
      
            ========================================= */



            const normalize = (s: string) =>

                s?.replace(/\s+/g, " ").replace(/[:*]/g, "").trim() || ""



            const setValue = (

                el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,

                value: string

            ) => {

                if (!el || !value) return false

                el.focus()



                if (el instanceof HTMLSelectElement) {

                    const match = Array.from(el.options).find(

                        o => normalize(o.text) === normalize(value) ||

                            normalize(o.value) === normalize(value)

                    )

                    if (match) el.value = match.value

                } else {

                    el.value = value

                }



                el.dispatchEvent(new Event("input", { bubbles: true }))

                el.dispatchEvent(new Event("change", { bubbles: true }))

                el.dispatchEvent(new Event("blur", { bubbles: true }))

                return true

            }



            const findFieldByLabel = (labelText: string) => {

                const labels = Array.from(document.querySelectorAll("label, span, td"))

                const label = labels.find(el =>

                    normalize(el.textContent || "").startsWith(normalize(labelText))

                )

                if (!label) return null

                return label.closest("td")?.querySelector("input, textarea") ||

                    label.closest("tr")?.querySelector("input, textarea") ||

                    label.parentElement?.querySelector("input, textarea") || null

            }



            const findTextarea = () =>

                Array.from(document.querySelectorAll("textarea"))

                    .sort((a, b) => b.rows - a.rows)[0] || null



            const findAddButton = (): HTMLButtonElement | null => {

                const imgs = Array.from(document.querySelectorAll("img"))

                const plusImg = imgs.find(img => img.src.includes("plus-icon.png"))

                return plusImg?.closest("button") || null

            }



            const getAllRows = (): HTMLTableRowElement[] =>

                Array.from(document.querySelectorAll("tr[_afrrk]"))



            const getFieldInRow = (row: HTMLTableRowElement, index: number) => {

                const cells = Array.from(row.querySelectorAll("td, th"))

                return cells[index]?.querySelector("input, textarea, select") || null

            }



            /* ========================================= 
      
               ΜΕΡΟΣ 1: ΒΑΣΙΚΑ ΣΤΟΙΧΕΙΑ 
      
            ========================================= */



            const fillBasicFields = () => {

                const fieldMap: Array<{

                    label: string

                    key: string

                    customFinder?: () => Element | null

                }> = [

                        { label: "Περιγραφή Έργου/Εγκατάστασης", key: "projectDescriptions", customFinder: findTextarea },

                        { label: "Οδός", key: "propertyAddress" },

                        { label: "Αρ. από", key: "propertyNumber" },

                        { label: "Πόλη", key: "municipalityCommunity" },

                        { label: "Οικισμός", key: "propertyPlace" },

                        { label: "Κοινότητα", key: "propertyPlace" },

                        { label: "ΤΚ", key: "propertyPostalCode" },

                        { label: "Δημοτική Ενότητα", key: "propertyPlace" },

                        { label: "ΟΤ", key: "otNumber" },

                        { label: "ΚΑΕΚ", key: "kaekProperty" }

                    ]



                fieldMap.forEach(({ label, key, customFinder }) => {

                    const field = customFinder ? customFinder() : findFieldByLabel(label)

                    const value = data?.[key]

                    if (field && value != null) {

                        setValue(field as any, String(value))

                    }

                })

            }



            fillBasicFields()



            /* ========================================= 
      
               ΜΕΡΟΣ 2: ΣΤΟΙΧΕΙΑ ΥΦΙΣΤΑΜΕΝΟΥ 
      
               🎯 100% WORKING - ΑΓΝΟΕΙ ΤΑ EXISTING DROPDOWNS 
      
            ========================================= */



            const fillExistingPermits = () => {

                // ✅ ΒΗΜΑ 1: Δημιούργησε λίστα με permits που ΕΧΟΥΝ data 

                const permitsToFill: Array<{

                    type: string

                    data: Record<string, string>

                }> = []



                // Check Οικοδ. Άδεια 

                if (data.issuingAuthority || data.permitNumber) {

                    permitsToFill.push({

                        type: "Οικοδ. Άδεια",

                        data: {

                            "Στοιχεία Εκδούσας Αρχής": data.issuingAuthority || "",

                            "Αριθμός πράξης": data.permitNumber || "",

                            "Δόμηση (τ.μ.)": data.titleArea || ""

                        }

                    })

                }



                // Check Ν.3843/10 

                if (data.issuingAuthority3843 || data.completionDeclaration3843Number) {

                    permitsToFill.push({

                        type: "Ν.3843/10",

                        data: {

                            "Στοιχεία Εκδούσας Αρχής": data.issuingAuthority3843 || "",

                            "Αριθμός πράξης": data.completionDeclaration3843Number || "",

                            "Δόμηση (τ.μ.)": data.titleArea || ""

                        }

                    })

                }



                // Check Ν.4495/17 

                if (data.legalizationStatementNumber) {

                    permitsToFill.push({

                        type: "Ν.4495/17",

                        data: {

                            "Στοιχεία Εκδούσας Αρχής": "ΥΠ.ΕΝ",

                            "Αριθμός πράξης": data.legalizationStatementNumber || "",

                            "Δόμηση (τ.μ.)": data.titleArea || ""

                        }

                    })

                }



                // Check Ν.1337/83 

                if (data.issuingAuthority1337 || data.declarationNumber1337) {

                    permitsToFill.push({

                        type: "Ν.1337/83",

                        data: {

                            "Στοιχεία Εκδούσας Αρχής": data.issuingAuthority1337 || "",

                            "Αριθμός πράξης": data.declarationNumber1337 || "",

                            "Δόμηση (τ.μ.)": data.titleArea || ""

                        }

                    })

                }



                // ✅ ΑΝ ΔΕΝ ΥΠΑΡΧΟΥΝ PERMITS → SKIP 

                if (permitsToFill.length === 0) return



                // ✅ ΒΗΜΑ 2: Find the section 

                const sectionTitleEl = Array.from(

                    document.querySelectorAll("span, div, td")

                ).find(el =>

                    normalize(el.textContent || "") === normalize("Στοιχεία υφιστάμενου")

                )



                const container = sectionTitleEl?.closest("div") || document.body



                // ✅ ΒΗΜΑ 3: Find header row 

                const headerRow = Array.from(container.querySelectorAll("tr")).find(tr => {

                    const t = normalize(tr.textContent || "")

                    return (

                        t.includes(normalize("Είδος πράξης")) &&

                        t.includes(normalize("Αριθμός πράξης")) &&

                        t.includes(normalize("Δόμηση"))

                    )

                })



                if (!headerRow) return



                const headerCells = Array.from(headerRow.querySelectorAll("th, td"))

                const headers = headerCells.map(c => normalize(c.textContent || ""))



                // ✅ ΒΗΜΑ 4: Find data rows (with inputs) 

                const dataRows = Array.from(container.querySelectorAll("tr")).filter(tr =>

                    tr.querySelector("select, input[type='text'], textarea")

                )



                if (dataRows.length === 0) return



                // ✅ ΒΗΜΑ 5: Helper - Get field by column 

                const getFieldInRowByColumn = (row: Element, colIndex: number) => {

                    const cells = Array.from(row.querySelectorAll("td, th"))

                    const cell = cells[colIndex]

                    if (!cell) return null

                    return cell.querySelector("select, input[type='text'], textarea")

                }



                // ✅ ΒΗΜΑ 6: Get column index for "Είδος πράξης" 

                const permitTypeColIndex = headers.findIndex(

                    h => h === normalize("Είδος πράξης")

                )



                if (permitTypeColIndex === -1) return



                // ✅ ΒΗΜΑ 7: Fill each permit (USE ONLY FIRST N ROWS) 

                permitsToFill.forEach((permit, index) => {

                    if (index >= dataRows.length) return // Skip if not enough rows 



                    const row = dataRows[index]



                    // 1. Set permit type dropdown 

                    const permitTypeField = getFieldInRowByColumn(row, permitTypeColIndex)

                    if (permitTypeField) {

                        setValue(permitTypeField as any, permit.type)

                    }



                    // 2. Fill data fields 

                    Object.entries(permit.data).forEach(([headerTitle, value]) => {

                        if (!value) return



                        const colIndex = headers.findIndex(

                            h => h === normalize(headerTitle)

                        )

                        if (colIndex === -1) return



                        const field = getFieldInRowByColumn(row, colIndex)

                        if (field) setValue(field as any, String(value))

                    })

                })

            }



            fillExistingPermits()

            /* =========================================
                        ✅ NEW PART – SIMPLE TABLE AUTOFILL
                     ========================================= */

            const fillSimplePermitTable = () => {
                const rows = getAllRows()
                if (!rows.length) return

                const row = rows[0] // first editable row
                const cells = row.querySelectorAll("td")
                if (cells.length < 6) return

                setValue(cells[0].querySelector("select")!, data.permitType || "Ν.4495/17")
                setValue(cells[1].querySelector("select")!, data.issuingType || "Μηχανικός")
                setValue(cells[2].querySelector("input")!, data.issuingAuthority || "ΥΠ.ΕΝ")
                setValue(cells[3].querySelector("input")!, data.permitNumber || "")
                setValue(cells[4].querySelector("input")!, data.titleArea || "")
                setValue(cells[5].querySelector("textarea")!, data.comments || "")
            }

            fillSimplePermitTable()

            /* ========================================= 
      
               ΜΕΡΟΣ 3: ΣΤΟΙΧΕΙΑ ΚΥΡΙΟΥ ΤΟΥ ΕΡΓΟΥ 
      
            ========================================= */



            const fillOwners = async () => {

                const owners = data.owners || []

                if (!owners.length) return



                const addButton = findAddButton()

                if (!addButton) return



                let rows = getAllRows()



                for (let i = 0; i < owners.length; i++) {

                    const owner = owners[i]



                    // Add row if needed 

                    if (i >= rows.length) {

                        addButton.click()

                        await new Promise(r => setTimeout(r, 1500))

                        rows = getAllRows()

                        if (i >= rows.length) break

                    }



                    const row = rows[i]



                    // Field mapping 

                    const mapping: Array<{

                        key: keyof typeof owner

                        index: number

                        type?: "select"

                        transform?: (value: string) => string

                    }> = [

                            { key: "lastName", index: 1 },

                            { key: "firstName", index: 2 },

                            { key: "fatherFirstLastName", index: 3 },

                            { key: "motherFirstLastName", index: 4 },

                            { key: "ownerTypeOwnership", index: 5, type: "select" },

                            {

                                key: "ownershipPercentageOwner",

                                index: 6,

                                transform: (val) => val.replace(/%/g, "")

                            },

                            { key: "ownerAddress", index: 7 },

                            { key: "city", index: 8 },

                            { key: "postalCode", index: 9 },

                            {

                                key: "phone",

                                index: 10,

                                transform: (val) => val || "6900000000"

                            },

                            {

                                key: "mobile",

                                index: 11,

                                transform: (val) => val || "6900000000"

                            },

                            { key: "taxIdentificationNumber", index: 12 },

                            { key: "idNumber", index: 13 },

                            { key: "foreignTaxId", index: 14 },

                            { key: "fax", index: 15 },

                            { key: "email", index: 16 }

                        ]



                    // Fill fields 

                    mapping.forEach(({ key, index, transform }) => {

                        let val = owner[key]

                        if (!val && !transform) return



                        if (transform) {

                            val = transform(String(val || ""))

                        }



                        const field = getFieldInRow(row, index) as any

                        if (field) setValue(field, String(val))

                    })



                    await new Promise(r => setTimeout(r, 300))

                }

            }



            await fillOwners()

        }

    })

}


export const servicesOneFill = async (data: any) => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    if (!tab?.id) return

    await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        args: [data],
        func: async (data) => {

            /* =========================================
             HELPERS - ΚΟΙΝΕΣ ΣΥΝΑΡΤΗΣΕΙΣ
          ========================================= */

            const normalize = (s: string) => {
                if (!s) return ""
                return s.normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/\s+/g, " ")
                    .replace(/[:*]/g, "")
                    .trim()
            }

            const setValueFast = (
                el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
                value: string
            ) => {
                if (!el || !value) return false

                if (el instanceof HTMLSelectElement) {
                    for (let i = 0; i < el.options.length; i++) {
                        if (normalize(el.options[i].text) === normalize(value)) {
                            el.selectedIndex = i
                            el.dispatchEvent(new Event("change", { bubbles: true }))
                            return true
                        }
                    }
                } else {
                    const descriptor = Object.getOwnPropertyDescriptor(
                        el instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype,
                        "value"
                    )
                    if (descriptor?.set) {
                        descriptor.set.call(el, value)
                    }
                    el.dispatchEvent(new Event("input", { bubbles: true }))
                    el.dispatchEvent(new Event("blur", { bubbles: true }))
                }
                return true
            }

            const findFieldByLabel = (labelText: string) => {
                const allLabels = Array.from(document.querySelectorAll("label"))
                const label = allLabels.find(l => normalize(l.textContent || "") === normalize(labelText))
                if (label && (label as HTMLLabelElement).htmlFor) {
                    return document.getElementById((label as HTMLLabelElement).htmlFor)
                }
                return null
            }

            // Removed findProjectTextarea - now using basicFields array

            const findAddButton = () => {
                const imgs = Array.from(document.querySelectorAll("img"))
                const plusImgs = imgs.filter(img => (img as HTMLImageElement).src.includes("plus-icon.png"))
                return plusImgs.map(img => img.closest("button")).filter(btn => btn !== null)
            }

            const getPermitRows = () => {
                return Array.from(document.querySelectorAll("tr[_afrrk]")).filter(r => {
                    const c = Array.from(r.querySelectorAll("td"))
                    return c.length >= 5 && c.length <= 10 && c[0]?.querySelector("select")
                })
            }

            const fillPermit = (row: Element, p: any) => {
                const c = Array.from(row.querySelectorAll("td"))
                if (c[0]) setValueFast(c[0].querySelector("select") as any, p.type)
                if (c[1]) setValueFast(c[1].querySelector("select") as any, p.authorityType)
                if (c[2]) setValueFast(c[2].querySelector("input") as any, p.authority)
                if (c[3]) setValueFast(c[3].querySelector("input") as any, p.number)
                if (c[4]) setValueFast(c[4].querySelector("input") as any, p.area)
            }

            const getOwnerRows = () => {
                const allRows = Array.from(document.querySelectorAll("tr[_afrrk]"))
                return allRows.filter(row => {
                    const cells = Array.from(row.querySelectorAll("td"))
                    if (cells.length !== 17) return false
                    const firstSelect = cells[0]?.querySelector("select")
                    return firstSelect !== null
                })
            }

            const getField = (row: Element, idx: number) => {
                const c = Array.from(row.querySelectorAll("td"))
                return c[idx]?.querySelector("input, textarea, select")
            }

            const getLastName = (n: string) => n ? n.trim().split(" ").pop() || "" : ""
            const getPct = (v: string) => v ? String(v).replace(/%/g, "").split("/")[0].trim() : ""

            const fillOwnerRow = (row: Element, owner: any) => {
                setValueFast(getField(row, 1) as any, owner.lastName)
                setValueFast(getField(row, 2) as any, owner.firstName)
                setValueFast(getField(row, 3) as any, getLastName(owner.fatherFirstLastName))
                setValueFast(getField(row, 4) as any, getLastName(owner.motherFirstLastName))
                setValueFast(getField(row, 5) as any, owner.ownerTypeOwnership)
                setValueFast(getField(row, 6) as any, getPct(owner.ownershipPercentageOwner))
                setValueFast(getField(row, 7) as any, (owner.ownerAddress || "") + (owner.addressNumber ? " " + owner.addressNumber : ""))
                setValueFast(getField(row, 8) as any, owner.city)
                setValueFast(getField(row, 9) as any, owner.postalCode || "")
                setValueFast(getField(row, 10) as any, owner.phone || "6900000000")
                setValueFast(getField(row, 11) as any, owner.mobile || "6900000000")
                setValueFast(getField(row, 12) as any, owner.taxIdentificationNumber)
                setValueFast(getField(row, 13) as any, owner.idNumber)
            }

            /* =========================================
              ΜΕΡΟΣ 1: ΒΑΣΙΚΑ ΣΤΟΙΧΕΙΑ
            ========================================= */

            // console.log("1. Basic...")

            const basicFields = [
                ["Περιγραφή Έργου/Εγκατάστασης", data.projectDescriptions],
                ["Οδός", data.propertyAddress],
                ["Αρ. από", data.propertyNumber],
                ["Πόλη/Οικισμός", data.municipalityCommunity],
                ["ΤΚ", data.propertyPostalCode],
                ["Δημοτική Ενότητα / Περιοχή", data.propertyPlace],
                ["ΟΤ", data.otNumber],
                ["ΚΑΕΚ", data.kaekProperty]
            ]

            basicFields.forEach(([l, v]) => {
                const f = findFieldByLabel(l)
                if (f && v) setValueFast(f as any, v)
            })

            /* =========================================
              ΜΕΡΟΣ 2: ΣΤΟΙΧΕΙΑ ΥΦΙΣΤΑΜΕΝΟΥ
            ========================================= */

            // console.log("2. Permits...") 
            const permits = [
                {
                    type: "Οικοδ. Άδεια",
                    authorityType: "Πολεοδομία",
                    authority: data.issuingAuthority,
                    number: data.permitNumber,
                    area: data.titleArea?.split(".")[0] || ""
                },
                {
                    type: "Ν.3843/10",
                    authorityType: "Πολεοδομία",
                    authority: data.issuingAuthority3843,
                    number: data.completionDeclaration3843Number,
                    area: data.titleArea?.split(".")[0] || ""
                },
                {
                    type: "Ν.4495/17",
                    authorityType: "Μηχανικός",
                    authority: "ΥΠ.ΕΝ",
                    number: data.legalizationStatementNumber,
                    area: data.titleArea?.split(".")[0] || ""
                }
            ].filter(p => p.number)

            const addButtons = findAddButton()
            const permitBtn = addButtons[0]

            if (permitBtn && permits.length) {
                let rows = getPermitRows()
                const need = permits.length - rows.length

                if (need > 0) {
                    for (let i = 0; i < need; i++) (permitBtn as HTMLButtonElement).click()
                    await new Promise(r => setTimeout(r, 600))
                    rows = getPermitRows()
                }

                rows.slice(0, permits.length).forEach((r, i) => fillPermit(r, permits[i]))
            }

            /* =========================================
              ΜΕΡΟΣ 3: ΣΤΟΙΧΕΙΑ ΚΥΡΙΟΥ ΤΟΥ ΕΡΓΟΥ
            ========================================= */

            // console.log("3. Owners...") 
            const owners = data.owners || []
            const oRows = getOwnerRows()

            // console.log("  Available rows: " + oRows.length)
            // console.log("  Total owners: " + owners.length)

            if (oRows.length < owners.length) {
                console.warn("  ⚠ Please add " + (owners.length - oRows.length) + " more owner rows!")
            } else if (oRows.length > owners.length) {
                console.warn("  ⚠ WARNING: You have " + (oRows.length - owners.length) + " EXTRA rows!")
            }

            for (let i = 0; i < Math.min(owners.length, oRows.length); i++) {
                const owner = owners[i]
                const row = oRows[i]

                // console.log("  Filling owner " + (i + 1) + ": " + owner.firstName + " " + owner.lastName)
                fillOwnerRow(row, owner)
            }

            // console.log("\n✅ COMPLETE!") 
        }
    })
}







