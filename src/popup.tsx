import { useEffect, useState } from "react"

import "./style.css"

import AutoFillTab from "~components/tabs/AutyofillTab/AutoFillTab"
import IntroTabs from "~components/tabs/IntroTabs"
import type { FetchState } from "~interfaces/global"

function IndexPopup() {
  const [state, setState] = useState<FetchState>({
    loading: false,
    error: null,
    data: null
  })

  // Load saved credentials on mount
  useEffect(() => {
    loadCredentials()
  }, [])

  const loadCredentials = async () => {
    try {
      const result = await chrome.storage.local.get(["data"])
      console.log(result)
      const savedData = result?.data || null
      console.log(savedData)
      setState((prev) => ({ ...prev, data: savedData }))
    } catch (error) {
      console.error("Failed to load credentials:", error)
    }
  }

  return (
    <div className="min-w-[300px] min-h-[300px] p-2 bg-gray-50 rounded-xl">
      <div className="rounded-xl shadow-lg">
        {state?.data ? (
          <AutoFillTab state={state} setState={setState} />
        ) : (
          <IntroTabs state={state} setState={setState} />
        )}
      </div>
    </div>
  )
}

export default IndexPopup
