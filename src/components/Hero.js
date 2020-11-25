import React from "react"
import { HERO_IMAGE_POSITIONS, SAL_PROPS, HERO_IMAGES } from "../constants"
import { MailingListInput } from "./MailingList"
import ethLogo from "../assets/hero/eth.png"
import linkImg from "../assets/link.png"

export const Hero = () => (
  <>
    <div className="container px-4 py-10 mx-auto mt-7 mb-10">
      <div
        {...SAL_PROPS}
        className="mx-auto flex flex-col justify-center text-center"
        style={{ maxWidth: 700 }}
      >
        <h1 className="mt-2 mb-4">
          A seamless user and developer experience for Ethereum
        </h1>

        <p className="large mx-auto max-w-4xl text-light-gray">
          Sequence lets you integrate blockchain with your product in two
          minutes
        </p>

        <MailingListInput small className="w-full max-w-md mx-auto mt-6" />
      </div>
    </div>

    <div className="container px-2 pb-10 mb-6 md:px-4">
      <div className="relative">
        <div className="hero-blue-container flex flex-col bg-blue rounded shadow px-6 py-9 mx-auto lg:flex-row lg:px-9">
          <div className="flex-1 box-border flex flex-col justify-between lg:pr-9">
            <div>
              <h2 className="text-white mb-5">
                Enter the next generation of Internet economies
              </h2>

              <p className="text-light-gray">
                From digital collectibles to video game items and virtual real
                estate, digital worlds are becoming more real and valuable than
                ever before.
              </p>

              <br />

              <p className="text-light-gray">
                Sequence is your gateway to access and build in this new
                dimension.
              </p>
            </div>

            <div className="flex items-center mt-5">
              <img
                className="mr-4"
                alt="etherium"
                src={ethLogo}
                style={{ height: 28 }}
              />
              <p
                className="text-white"
                style={{ fontSize: 16, fontWeight: 500 }}
              >
                Compatible with everything on Ethereum
              </p>
            </div>
          </div>

          <div className="flex-1 relative hero-logo-container">
            {HERO_IMAGE_POSITIONS.map((positionProps, index) => (
              <HeroLogo
                key={index}
                {...positionProps}
                {...HERO_IMAGES[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
)

const HeroLogo = props => (
  <div
    className="hero-logo absolute pointer"
    style={{ width: props.size, height: props.size, ...props }}
  >
    <a
      className="flex justify-center items-end absolute h-full w-full"
      target="_blank"
      rel="noreferrer"
      style={{ opacity: 1 }}
      href={props.href}
    >
      <img
        alt="logo"
        className="object-fit-contain absolute"
        src={props.src}
        style={{ width: "100%", height: "100%" }}
      />
      <div
        className="link mb-6 flex items-center text-center color-white"
        style={{ zIndex: 3 }}
      >
        {props.label}
        <img alt="link" className="ml-2" src={linkImg} style={{ height: 20 }} />
      </div>
    </a>
  </div>
)
