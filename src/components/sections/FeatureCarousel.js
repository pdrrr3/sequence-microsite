import React from "react"
import { Carousel } from "../Carousel"
import { SAL_PROPS, INTEGRATION_CODE } from "../../constants"
import copyCode from "../../assets/copy-code.png"

export const FeatureCarousel = ({ className, clickCopyCode, showCode }) => (
  <div
    className={`flex flex-col items-center mx-auto lg:flex-row ${className}`}
  >
    <div {...SAL_PROPS} className="flex-1 w-full max-w-md lg:max-w-xl lg:pr-10">
      <Carousel />
    </div>

    <div
      {...SAL_PROPS}
      className="flex-1 flex flex-col items-center justify-center pt-7 md:px-2 lg:pl-6"
    >
      <h2>An Ethereum Web Wallet anyone can use</h2>

      <div className="my-3" />

      <p>
        Users login with their email or social accounts. No seed phrases or
        blockchain knowledge required. Sequence gives users top notch security
        in a friendly format. And it’s non-custodial.
      </p>

      <div className="my-5" />

      <h3>Integrate Sequence in four lines of code</h3>

      <code className="mt-6">
        <button onClick={clickCopyCode}>
          <img alt="copy-code" src={copyCode} className="copy-code" />
        </button>
        {showCode ? INTEGRATION_CODE : "Code copied!"}
      </code>
    </div>
  </div>
)
