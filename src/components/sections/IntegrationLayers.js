import React from "react"
import { AnimatedBoxes } from "../../components/AnimatedBoxes"
import { SAL_PROPS } from "../../constants"

export const IntegrationLayers = ({ className }) => (
  <div
    {...SAL_PROPS}
    className={`flex flex-col-reverse items-center mx-auto lg:flex-row ${className}`}
  >
    <div
      className="flex-1 w-full flex flex-col justify-center px-7 sm:px-0 lg:mr-10"
      style={{ maxWidth: 550 }}
    >
      <h2 style={{ maxWidth: 550 }}>
        Finally, a friendly
        <br />
        experience for blockchain
      </h2>

      <div className="my-4" />

      <p style={{ maxWidth: 500 }}>
        Sequence gives you a friendly smart wallet, an end-to-end SDK to
        integrate Ethereum with your web application, and powerful APIs for the
        security you need.
        <br />
        <br />
        All making for a seamless experience while Ethereum works in the
        background.
      </p>
    </div>
    <AnimatedBoxes />
  </div>
)
