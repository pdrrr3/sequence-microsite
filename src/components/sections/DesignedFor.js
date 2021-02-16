import React from "react"
import { SAL_PROPS } from "../../constants"
import placeholderPng from "../../assets/placeholder.png"

export const DesignedFor = ({ className }) => {
  /* TODO: style me correctly */
  return (
    <div
      {...SAL_PROPS}
      className={`flex flex-col text-center mx-auto ${className}`}
    >
      <div>
        <img alt="features" className="object-fit" src={placeholderPng} />
      </div>
    </div>
  )
}
