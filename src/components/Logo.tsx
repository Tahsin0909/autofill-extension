import someCoolImage from "data-base64:assets/logo.jpg"
import React from "react"

const Logo = () => {
  return (
    <img
      alt="build ai logo"
      src={someCoolImage}
      width={400}
      height={400}
      className="w-[12rem] h-[5rem] "
    />
  )
}

export default Logo
