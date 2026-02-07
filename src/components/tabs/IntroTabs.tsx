import { useRef } from "react"
import Logo from "~components/Logo"
import PrimaryButton from "~components/shared/PrimaryButton"
import type { FetchState } from "~interfaces/global"

function IntroTabs({
  state,
  setState
}: {
  state: FetchState
  setState: React.Dispatch<React.SetStateAction<FetchState>>
}) {
  const inputRef = useRef<HTMLInputElement>(null)


  //TODO tab must always open
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const rawValue = inputRef.current?.value?.trim()

    if (!rawValue) {
      setState((prev) => ({ ...prev, error: "Παρακαλώ εισάγετε έναν κωδικό" }))
      return
    }

    const [userId, projectId] = rawValue?.split("-")
    if (!userId || !projectId) {
      setState((prev) => ({ ...prev, error: "Ο κωδικός δεν έχει τη σωστή μορφή" }))
      return
    }
    setState({ loading: true, error: null, data: null })

    // Call via background script
    // 10.0.80.94/api/va/user/:hexToken/project/:projectCode
    // http://localhost:8145/api/v1/projects/user/264d3065/project/8271
    // const url = `http://10.0.80.94:8145/api/v1/user/${userId}/project/${projectId}`
    // const url = `http://10.0.80.94:8145/api/v1/projects/user-project?hexToken=${userId}&projectCode=${projectId}`
    // http://31.97.37.168:8145/api/v1/projects/user/ba235934/project/7890
    // const url = `http://31.97.37.168:8145/api/v1/projects/user/${userId}/project/${projectId}`
    // const url = `http://31.97.37.168:8145/api/v1/projects/user/${userId}/project/${projectId}`
    const url = `https://api.buildai.gr/api/v1/projects/user/${userId}/project/${projectId}`

    chrome.runtime.sendMessage({ type: "FETCH_PROJECT", url }, (response) => {
      // console.log(response)
      if (response.data.success) {
        setState({ loading: false, error: null, data: response.data })
        chrome.storage.local.set({ data: response.data })
      } else {
        setState({
          loading: false,
          error: "Δεν βρέθηκε έργο με τα στοιχεία που εισάγατε.",
          data: null
        })
      }
    })
  }

  // console.log(state)
  return (
    <form
      onSubmit={handleSubmit}
      className="min-w-[300px] min-h-[300px] p-4 bg-white rounded-xl shadow-lg text-center space-y-4">
      {/* Logo */}
      <div className="w-fit mx-auto">
        <Logo />
      </div>

      {/* Welcome Message */}
      <h2 className="text-base font-semibold">Σύνδεση στο BuildAI TEE</h2>

      {/* Input Field (uncontrolled) */}
      <input
        type="text"
        placeholder="Εισάγετε τον μοναδικό σας κωδικό"
        ref={inputRef}
        className={`w-full px-3 py-2 border rounded-md outline-none ${state?.error ? "border-red-500" : "border-gray-300"
          }`}
      />

      {/* Error Message */}
      {state?.error && <p className="text-sm text-red-500">{state?.error}</p>}

      {/* Submit Button */}
      <PrimaryButton>
        <div className="flex items-center justify-center">
          <div
            className={`${state.loading ? "opacity-100" : "opacity-0"
              } animate-spin text-center absolute w-4 h-4 border-y-[2px] rounded-full mx-auto`}
          />
          <span className={`${state.loading ? "opacity-0" : "opacity-100"}`}>
            Συνέχεια
          </span>
        </div>
      </PrimaryButton>

      {/* Info Message */}
      <p className="text-sm text-gray-500">
        Παρακαλώ εισάγετε ή επικολλήστε τον μοναδικό κωδικό σας
      </p>
    </form>
  )
}

export default IntroTabs
