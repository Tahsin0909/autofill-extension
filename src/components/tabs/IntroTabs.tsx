import { useRef, useState } from "react"

import Logo from "~components/Logo"
import type { FetchState } from "~interfaces/global"

function IntroTabs({
  state,
  setState
}: {
  state: FetchState
  setState: React.Dispatch<React.SetStateAction<FetchState>>
}) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const rawValue = inputRef.current?.value?.trim()

    if (!rawValue) {
      setState((prev) => ({ ...prev, error: "Please enter a code" }))
      return
    }

    const [userId, projectId] = rawValue.split("-")
    if (!userId || !projectId) {
      setState((prev) => ({ ...prev, error: "Invalid code format" }))
      return
    }
    setState({ loading: true, error: null, data: null })

    // Call via background script
    const url = `http://10.0.80.94:8145/api/v1/projects/user-project?hexToken=${userId}&projectCode=${projectId}`
    // const url = `https://api.buildai.gr/api/v1/projects/user-project?hexToken=${userId}&projectCode=${projectId}`

    chrome.runtime.sendMessage({ type: "FETCH_PROJECT", url }, (response) => {
      console.log(response)
      if (response.data.success) {
        setState({ loading: false, error: null, data: response.data })
        chrome.storage.local.set({ data: response.data })
      } else {
        setState({
          loading: false,
          error: response.data.message || "Unknown error",
          data: null
        })
      }
    })
  }

  console.log(state)
  return (
    <form
      onSubmit={handleSubmit}
      className="min-w-[300px] min-h-[300px] p-4 bg-white rounded-xl shadow-lg text-center space-y-4">
      {/* Logo */}
      <div className="w-fit mx-auto">
        <Logo />
      </div>

      {/* Welcome Message */}
      <h2 className="text-lg font-semibold">Welcome!</h2>

      {/* Input Field (uncontrolled) */}
      <input
        type="text"
        placeholder="Enter your unique code"
        ref={inputRef}
        className={`w-full px-3 py-2 border rounded-md outline-none ${state?.error ? "border-red-500" : "border-gray-300"
          }`}
      />

      {/* Error Message */}
      {state?.error && <p className="text-sm text-red-500">{state?.error}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        <div
          className={`${state.loading ? "opacity-100" : "opacity-0"
            } animate-spin text-center absolute w-4 h-4 border-y-[2px] rounded-full`}
        />
        <span className={`${state.loading ? "opacity-0" : "opacity-100"}`}>
          Enter
        </span>
      </button>

      {/* Info Message */}
      <p className="text-sm text-gray-500">
        Please enter the Unique Code or paste
      </p>
    </form>
  )
}

export default IntroTabs
