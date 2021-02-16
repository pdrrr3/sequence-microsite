import React from "react"
import { HeroLogo } from "../HeroLogo"
import { HERO_IMAGES } from "../../constants"
import ethLogo from "../../assets/hero/eth-logo.png"
import { positions } from "../../pages/index"

export const Blockchain = ({ className }) => (
  <div className={`container relative ${className}`}>
    <div className="hero-blue-container flex flex-col bg-blue rounded shadow px-6 py-9 mx-auto lg:flex-row lg:px-9">
      <div className="flex-1 box-border flex flex-col justify-between lg:pr-9">
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
            Sequence is your gateway to access and build in this new dimension.
          </p>
        </div>
      </div>

      <div className="flex-1 relative hero-logo-container">
        {positions.map((positionProps, index) => (
          <HeroLogo
            key={index}
            index={index}
            {...positionProps}
            images={HERO_IMAGES[index]}
          />
        ))}
      </div>
    </div>

    <div className="flex items-center justify-center mt-10 lg:justify-start lg:ml-10 lg:mt-5">
      <img
        className="mr-4"
        alt="etherium"
        src={ethLogo}
        style={{ height: 28 }}
      />
      <p className="text-white text-bold">
        Compatible with everything on Ethereum
      </p>
    </div>
  </div>
)
