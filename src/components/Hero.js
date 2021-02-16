import React, { useCallback, useEffect, useRef, useState } from "react"
import {
  HERO_IMAGE_POSITIONS,
  SAL_PROPS,
  HERO_IMAGES,
  HERO_IMAGE_SWAP_DURATION,
} from "../constants"
import ethLogo from "../assets/hero/eth-logo.png"
import linkImg from "../assets/link.png"
import { CrossfadeImage } from "./CrossfadeImage"
import { Button } from "./Button"
import logoPng from "../assets/sequence-logo.png"

const positions = HERO_IMAGE_POSITIONS

export const Hero = () => (
  <>
    <div className="container px-4 pt-7 sm:pt-10 pb-10 mx-auto sm:mt-9 mb-10">
      <div
        {...SAL_PROPS}
        className="mx-auto flex flex-col justify-center text-center items-center"
        style={{ maxWidth: 700 }}
      >
        <div className="sm:hidden mb-8">
          <img alt="logo" src={logoPng} style={{ height: 40 }} />
        </div>

        <h1 className="mt-2 mb-4">
          A seamless user and developer experience for Ethereum
        </h1>

        <p
          className="large mx-auto max-w-4xl text-light-gray mb-6"
          style={{ fontSize: 20 }}
        >
          Sequence lets you integrate blockchain with your product in two
          minutes
        </p>

        <Button>Get Started</Button>
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
  </>
)

const HeroLogo = ({ images, index, size, ...props }) => {
  const timeoutRef = useRef()
  const [frameIndex, setFrameIndex] = useState(0)

  const nextFrame = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setFrameIndex(i => (i >= images.length - 1 ? 0 : i + 1))
      timeoutRef.current = setTimeout(
        nextFrame,
        HERO_IMAGE_SWAP_DURATION * positions.length
      )
    }, HERO_IMAGE_SWAP_DURATION * (index + 1) + Math.floor(Math.random() * 4) * 500)
  }, [images.length, index])

  useEffect(() => {
    nextFrame()
    return () => clearTimeout(timeoutRef.current)
  }, [nextFrame])

  return (
    <div
      className="hero-logo absolute pointer"
      style={{ width: size, height: size, ...props }}
    >
      <a
        className="flex justify-center items-end absolute h-full w-full"
        target="_blank"
        rel="noreferrer"
        style={{
          opacity: 1,
          filter: "drop-shadow(0px 30px 50px rgba(0, 0, 0, 0.2))",
        }}
        href={images[frameIndex].href}
      >
        <CrossfadeImage
          alt="logo"
          delay={0}
          className="object-fit-contain absolute w-full h-full"
          src={images[frameIndex].src}
          style={{ width: "100%", height: "100%" }}
        />
        <div
          className="link mb-6 flex items-center text-center color-white"
          style={{ zIndex: 3 }}
        >
          {images[frameIndex].label}
          <img
            alt="link"
            className="ml-2"
            src={linkImg}
            style={{ height: 20 }}
          />
        </div>
      </a>
    </div>
  )
}
