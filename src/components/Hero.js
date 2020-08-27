import React from "react"
import { Button } from "./Button"
import techLogosPng from "../assets/tech-logos.png"

export const Hero = () => (
  <div className="px-12">
    <div className="mx-auto max-w-xl flex flex-col justify-center text-center my-24">
      <h1>An open stack for Blockchain development</h1>

      <p className="mx-auto max-w-md my-8">
        <span className="font-bold">Sequence</span> lets you integrate
        blockchain with your product in two minutes
      </p>

      <div className="flex flex-col xs-flex-row items-center mt-3">
        <Button gradientFill className="flex-1 mx-2 mb-4">
          Try Wallet
        </Button>
        <Button gradientBorder className="flex-1 mx-2 mb-4">
          Book a Demo
        </Button>
      </div>
    </div>

    <div
      className="bg-blue max-w-3xl px-12 py-12 md:px-32 md:py-20 my-40 mx-auto text-center items-center justify-center"
      style={{
        background:
          "linear-gradient(222.39deg, rgba(171, 66, 148, 0) 68.93%, #AB4294 115.85%), linear-gradient(61.57deg, rgba(30, 118, 154, 0) 19.77%, #56C6CD 85.93%), #342ABC",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: 30,
      }}
    >
      <h2 className="text-white mb-6">
        Enter the next generation of Internet economies
      </h2>

      <p className="text-white mb-12 mx-1">
        From digital collectibles to video game items and virtual real estate,
        digital worlds are becoming more real and valuable than ever before.{" "}
        <span className="font-bold">Sequence</span> is your gateway to access
        and build in this new dimension of commerce.
      </p>

      <p className="text-white mb-6" style={{ fontSize: 20, fontWeight: 300 }}>
        Compatible with 30+ web technologies
      </p>
      <img className="mx-auto" alt="logos" src={techLogosPng} width={475} />
    </div>
  </div>
)
