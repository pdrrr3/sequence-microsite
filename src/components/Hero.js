import React from "react"
import { Button } from "./Button"
export const Hero = () => (
  <div>
    <div className="mx-auto max-w-xl flex flex-col justify-center text-center">
      <h1>An open stack for Blockchain development on the web</h1>

      <p className="mx-auto max-w-sm my-6">
        <span className="font-bold">Sequence</span> lets you integrate
        blockchain with your product in two minutes
      </p>

      <div className="flex px-12">
        <Button className="flex-1 mx-2">Try Wallet</Button>
        <Button className="flex-1 mx-2">Book a Demo</Button>
      </div>
    </div>

    <div className="bg-blue max-w-xl rounded-lg p-10 my-20 mx-auto text-center">
      <h2 className="text-white mb-6">
        Enter the next generation of Internet economies
      </h2>
      <p className="text-white">
        From digital collectibles to video game items and virtual real estate,
        digital worlds are becoming more real and valuable than ever before.
        Sequence is your gateway to access and build in this new dimension of
        commerce.
      </p>
    </div>
  </div>
)
