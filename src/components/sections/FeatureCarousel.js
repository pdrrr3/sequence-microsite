import React from "react"
import { Carousel } from "../Carousel"
import { SAL_PROPS, INTEGRATION_CODE } from "../../constants"
import copyCode from "../../assets/copy-code.png"

export const FeatureCarousel = ({ className, clickCopyCode, showCode }) => (
  <div
    className={`flex flex-col items-center justify-between lg:flex-row ${className}`}
  >
    <div {...SAL_PROPS} className="w-full max-w-md lg:max-w-md">
      <Carousel />
    </div>

    <div
      {...SAL_PROPS}
      className="flex flex-col justify-center pt-7 w-full"
      style={{ maxWidth: 500 }}
    >
      <h2 style={{ opacity: 0.8 }}>An Ethereum Web Wallet anyone can use</h2>

      <div className="my-3" />

      <p>
        Users login with their email or social accounts. No seed phrases or
        blockchain knowledge required. Sequence gives users top notch security
        in a friendly format. And it’s non-custodial.
      </p>

      <div className="my-5" />

      <h3>Integrate Sequence in four lines of code</h3>

      <code className="mt-6" style={{ maxWidth: 500 }}>
        <button onClick={clickCopyCode} className="copy-code">
          <img alt="copy-code" src={copyCode} />
        </button>
        {showCode ? INTEGRATION_CODE : "Code copied!"}
      </code>
    </div>
  </div>
)
