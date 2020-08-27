import React from "react"
import { Button } from "./Button"
import techLogosPng from "../assets/tech-logos.png"

export const Hero = () => (
  <div className="px-8">
    <div className="mx-auto max-w-xl flex flex-col justify-center text-center my-32">
      <h1>An open stack for Blockchain development</h1>

      <p className="mx-auto max-w-sm my-10">
        <span className="font-bold">Sequence</span> lets you integrate
        blockchain with your product in two minutes
      </p>

      <div className="flex">
        <Button gradientFill className="flex-1 mx-2">
          Try Wallet
        </Button>
        <Button gradientBorder className="flex-1 mx-2">
          Book a Demo
        </Button>
      </div>
    </div>

    <div
      className="bg-blue max-w-3xl px-4 py-12 md:px-32 md:py-20 my-64 mx-auto text-center items-center justify-center"
      style={{
        background:
          "linear-gradient(222.39deg, rgba(171, 66, 148, 0) 68.93%, #AB4294 115.85%), linear-gradient(61.57deg, rgba(101, 154, 176, 0) 19.77%, #56C6CD 85.93%), #514AB2",
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
        borderRadius: 16,
      }}
    >
      <h2 className="text-white mb-6">
        Enter the next generation of Internet economies
      </h2>

      <p className="text-white mb-12">
        From digital collectibles to video game items and virtual real estate,
        digital worlds are becoming more real and valuable than ever before.
        Sequence is your gateway to access and build in this new dimension of
        commerce.
      </p>

      <h3 className="text-white mb-6">Compatible with 30+ web technologies</h3>
      <img className="mx-auto" alt="logos" src={techLogosPng} width={475} />
    </div>
  </div>
)
