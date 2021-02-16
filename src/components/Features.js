import React, { useState } from "react"
import "pure-react-carousel/dist/react-carousel.es.css"

import copyCode from "../assets/copy-code.png"
import featuresPng from "../assets/features.png"
import featuresMobilePng from "../assets/features-mobile.png"
import placeholderPng from "../assets/placeholder.png"
import evm1Png from "../assets/evm/evm-1.png"
import evm2Png from "../assets/evm/evm-2.png"
import evm3Png from "../assets/evm/evm-3.png"
import evm4Png from "../assets/evm/evm-4.png"
import { SAL_PROPS, INTEGRATION_CODE } from "../constants"
import { Button } from "./Button"
import { AnimatedBoxes } from "./AnimatedBoxes"
import { Carousel } from "./Carousel"
import { MailingListInput } from "./MailingList"

export const Features = () => {
  const [showCode, setShowCode] = useState(true)

  const clickCopyCode = () => {
    setShowCode(false)
    setTimeout(() => setShowCode(true), 2000)
    navigator.clipboard.writeText(INTEGRATION_CODE)
  }

  return (
    <div className="relative mx-5">
      <div
        {...SAL_PROPS}
        className="flex max-w-6xl flex-col lg:flex-row items-center mx-auto pt-6 pb-6 lg:px-5"
      >
        <div className="flex-1 w-full flex flex-col justify-center lg:mr-10">
          <h2 style={{ maxWidth: 550 }}>
            Finally, a friendly
            <br />
            experience for blockchain
          </h2>

          <div className="my-4" />

          <p>
            Sequence gives you a friendly smart wallet, an end-to-end SDK to
            integrate Ethereum with your web application, and powerful APIs for
            the security you need.
            <br />
            <br />
            All making for a seamless experience while Ethereum works in the
            background.
          </p>
        </div>
        <AnimatedBoxes />
      </div>

      {/* TODO: style me correctly */}

      <div
        {...SAL_PROPS}
        className="mx-auto max-w-6xl flex items-center justify-center py-10 mb-10 rounded"
        style={{ backgroundColor: "#111" }}
      >
        <h3 className="">Stay up to date with Sequence</h3>

        <MailingListInput small />
      </div>

      <div className="flex max-w-6xl flex-col lg:flex-row items-center mx-auto pt-9 mb-10 pb-10">
        <div
          {...SAL_PROPS}
          className="flex-1 w-full max-w-md lg:max-w-xl lg:pr-10"
        >
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
            blockchain knowledge required. Sequence gives users top notch
            security in a friendly format. And it’s non-custodial.
          </p>

          <div className="my-5" />

          <h3>Integrate Sequence in four lines of code</h3>

          <code className="mt-6">
            {/* eslint-disable-next-line */}
            <img
              alt="copy-code"
              onClick={clickCopyCode}
              src={copyCode}
              className="copy-code"
            />
            {showCode ? INTEGRATION_CODE : "Code copied!"}
          </code>
        </div>
      </div>

      {/* TODO: style me correctly */}
      <div
        {...SAL_PROPS}
        className="mx-auto max-w-2xl flex flex-col text-center my-10 pt-10 mb-10"
      >
        <div>
          <img alt="features" className="object-fit" src={placeholderPng} />
        </div>
      </div>

      <div
        {...SAL_PROPS}
        className="flex max-w-6xl flex-col lg:flex-row items-center mx-auto mb-10 pb-10 md:px-2"
      >
        <div className="flex-1 flex flex-col items-center justify-center lg:text-center">
          <div className="max-w-2xl">
            <h2>Our SDK + APIs make blockchain simple and user friendly</h2>

            <div className="my-3" />

            <p className="px-6">
              And they give you everything you’ll need to run your application
              beautifully on the blockchain.
            </p>
          </div>

          <div
            className="mt-10 mx-auto hidden sm:block"
            style={{ maxWidth: 1000 }}
          >
            <img alt="features" className="object-fit" src={featuresPng} />
          </div>

          <div className="mt-2 mx-auto sm:hidden" style={{ maxWidth: 1000 }}>
            <img
              alt="features"
              className="object-fit"
              src={featuresMobilePng}
            />
          </div>
        </div>
      </div>

      <div
        {...SAL_PROPS}
        className="mx-auto flex flex-col text-center my-10 pt-10 mb-10"
      >
        <h2 className="px-4 mb-6">Support for all EVM compatible networks</h2>
        <div
          className="flex flex-col mt-6 lg:flex-row w-full mx-auto justify-between items-center"
          style={{ maxWidth: 1100 }}
        >
          {[evm1Png, evm2Png, evm3Png, evm4Png].map(img => (
            <div
              className="flex items-center mx-2 my-6 lg:my-2"
              style={{ width: 200 }}
            >
              <img className="object-fit" alt="etherium" src={img} />
            </div>
          ))}
        </div>
      </div>

      <div
        {...SAL_PROPS}
        className="mx-auto max-w-2xl flex flex-col text-center my-10 pt-10 mb-10"
      >
        <h2 className="px-4 mb-6">Ready to Sequence your product?</h2>
        <Button className="mx-auto">Get Started</Button>
      </div>
    </div>
  )
}
