import React from "react"

import type { FetchState } from "~interfaces/global"

import { autofillCredential } from "./FillScript"

const AutoFillTab = ({
  state,
  setState
}: {
  state: FetchState
  setState: React.Dispatch<React.SetStateAction<FetchState>>
}) => {
  const name =
    state?.data?.data?.createdBy?.firstName +
    " " +
    state?.data?.data?.createdBy?.lastName
  const blurEmail = state?.data?.data?.createdBy?.email.replace(
    /(.{2}).+(@.+)/,
    "$1••••••$2"
  )

  const handleAutofill = () => {
    console.log("Clicked")
    autofillCredential(state?.data?.data)
  }

  const deleteData = async () => {
    try {
      await chrome.storage.local.set({ data: null })
      setState((prev) => ({ ...prev, data: null }))
    } catch (error) {
      console.error("Failed to delete credential:", error)
      alert("Failed to delete credential")
    }
  }
  console.log(state?.data?.data.owners)
  return (
    <div className="w-[300px] p-4 bg-white rounded-xl shadow-lg">
      {/* Back Button */}
      <button
        onClick={deleteData}
        className="text-sm text-blue-600 hover:text-blue-800 mb-3 flex items-center gap-1">
        ← Back
      </button>

      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Data Found!</h2>
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mt-2">
          <span className="text-green-600 text-lg">✓</span>
        </div>
      </div>

      {/* User Info Card */}
      <div className="bg-gray-50 rounded-lg p-3 mb-4 space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Name:</span>
          <span className="text-sm font-medium text-gray-800">{name}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Email:</span>
          <span className="text-sm font-medium text-gray-800">{blurEmail}</span>
        </div>
      </div>

      {/* Autofill Button */}
      <button
        onClick={handleAutofill}
        className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium">
        Autofill Form
      </button>

      {/* Small info text */}
      <p className="text-xs text-gray-400 text-center mt-3">
        This will fill your form automatically
      </p>
    </div>
  )
}

export default AutoFillTab
