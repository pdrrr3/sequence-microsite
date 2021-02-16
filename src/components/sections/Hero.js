import React from "react"
import { Button } from "../../components/Button"
import { SAL_PROPS } from "../../constants"
import logoPng from "../../assets/sequence-logo.png"

export const Hero = ({ className }) => (
  <div className={`container mx-auto ${className}`}>
    <div
      {...SAL_PROPS}
      className="mx-auto flex flex-col justify-center text-center items-center"
      style={{ maxWidth: 700 }}
    >
      <div className="sm:hidden mb-8">
        <img alt="logo" src={logoPng} style={{ height: 40 }} />
      </div>

      <h1 className="mt-2 mb-5 max-w-md sm:max-w-4xl">
        A seamless user and developer experience for Ethereum
      </h1>

      <p
        className="large mx-auto text-light-gray mb-6 max-w-sm sm:max-w-4xl"
        style={{ fontSize: 20 }}
      >
        Sequence lets you integrate blockchain with your product in two minutes
      </p>
      <div className="hidden sm:block">
        <Button>Get Started</Button>
      </div>
      <div className="sm:hidden">
        <Button>Start Building</Button>
        <div className="my-4" />
        <Button variant="outlined">Launch Wallet</Button>
      </div>
    </div>
  </div>
)