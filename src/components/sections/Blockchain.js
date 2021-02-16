import React from "react"
import { HeroLogo } from "../HeroLogo"
import { HERO_IMAGES } from "../../constants"
import ethLogo from "../../assets/hero/eth-logo.png"

export const Blockchain = ({ className }) => (
  <div className={`container relative ${className}`}>
    <div className="hero-blue-container flex flex-col bg-blue rounded shadow px-6 py-10 mx-auto lg:flex-row lg:px-9">
      <div className="flex-1 box-border flex flex-col justify-between text-center sm:text-left lg:pr-9">
        <div>
          <h2 className="text-white mb-5">
            Enter the next generation of Internet economies
          </h2>

          <p className="text-light-gray">
            From digital collectibles to video game items and virtual real
            estate, digital worlds are becoming more real and valuable than ever
            before.
          </p>

          <br />

          <p className="text-light-gray">
            <span style={{ fontWeight: "bold" }}>Sequence</span> is your gateway
            to access and build in this new dimension. Welcome to Web3.
          </p>
        </div>
      </div>

      <div className="flex-1 relative hero-logo-container">
        {[0, 1, 2, 3, 4].map((_, index) => (
          <HeroLogo key={index} index={index} images={HERO_IMAGES[index]} />
        ))}
      </div>
    </div>

    <div className="flex items-center justify-center mt-8 lg:justify-start lg:ml-9 lg:mt-6">
      <img
        className="mr-4"
        alt="etherium"
        src={ethLogo}
        style={{ height: 28 }}
      />
      <p className="text-white text-bold" style={{ fontSize: 18 }}>
        Compatible with everything on Ethereum
      </p>
    </div>
  </div>
)
