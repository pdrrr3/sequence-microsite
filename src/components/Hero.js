import React from "react"
import { fadeProps } from "../constants"
import { MailingListInput } from "./MailingList"
import headerLogo1 from "../assets/hero/1.png"
import headerLogo2 from "../assets/hero/2.png"
import headerLogo3 from "../assets/hero/3.png"
import headerLogo4 from "../assets/hero/4.png"
import headerLogo5 from "../assets/hero/5.png"

const IMAGES = [
  { src: headerLogo4, size: 260, top: -100, left: -50 },
  { src: headerLogo2, size: 320, top: -180, left: 180 },
  { src: headerLogo5, size: 320, top: 105, left: -20 },
  { src: headerLogo1, size: 400, top: 50, left: 270 },
  { src: headerLogo3, size: 240, top: 350, left: 200 },
]

export const Hero = () => (
  <>
    <div className="container pt-10 pb-10 mx-4 mt-7 mb-10">
      <div
        {...fadeProps}
        className="mx-auto flex flex-col justify-center text-center"
        style={{ maxWidth: 700 }}
      >
        <h1 className="mb-4">
          A seamless user and developer experience for Ethereum
        </h1>

        <p className="large mx-auto max-w-4xl text-light-gray">
          Sequence lets you integrate blockchain with your product in two
          minutes
        </p>

        <MailingListInput small className="w-full max-w-md mx-auto mt-6" />
      </div>
    </div>

    <div className="container pb-10 mb-6">
      <div className="relative">
        <div
          className="flex flex-col bg-blue rounded shadow p-9 mx-auto md:flex-row"
          style={{
            maxWidth: 1200,
            background:
              "linear-gradient(0deg, rgba(42, 42, 42, 0.4), rgba(42, 42, 42, 0.4)), linear-gradient(222.39deg, rgba(174, 38, 145, 0) 68.93%, #AB4294 115.85%), linear-gradient(61.57deg, rgba(30, 118, 154, 0) 19.77%, #56C6CD 85.93%), linear-gradient(0deg, #342ABC, #342ABC)",
          }}
        >
          <div className="flex-1 box-border lg:pr-9">
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

            <div className="my-10" />

            <p className="text-white" style={{ fontSize: 16, fontWeight: 300 }}>
              Compatible with everything on Ethereum
            </p>
          </div>

          <div className="flex-1">
            <div className="relative hidden lg:block">
              {IMAGES.map(({ size, src, ...style }) => (
                <img
                  alt="logo"
                  src={src}
                  style={{
                    position: "absolute",
                    width: size,
                    height: size,
                    ...style,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
