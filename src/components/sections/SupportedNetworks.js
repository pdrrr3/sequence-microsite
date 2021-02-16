import React from "react"
import { SAL_PROPS } from "../../constants"
import evm1Png from "../../assets/evm/evm-1.png"
import evm2Png from "../../assets/evm/evm-2.png"
import evm3Png from "../../assets/evm/evm-3.png"
import evm4Png from "../../assets/evm/evm-4.png"

export const SupportedNetworks = ({ className }) => (
  <div className={`flex flex-col text-center mx-auto ${className}`}>
    <h2 {...SAL_PROPS} className="px-4 mb-6">
      Support for all EVM compatible networks
    </h2>
    <div
      className="flex flex-col mt-6 w-full mx-auto justify-between items-center lg:flex-row"
      {...SAL_PROPS}
      style={{ maxWidth: 1100 }}
    >
      {[evm1Png, evm2Png, evm3Png, evm4Png].map((img, index) => (
        <div
          key={index}
          className="flex items-center mx-2 my-6 lg:my-2"
          style={{ width: 200 }}
        >
          <img className="object-fit" alt="etherium" src={img} />
        </div>
      ))}
    </div>
  </div>
)
