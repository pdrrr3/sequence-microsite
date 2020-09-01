import React from "react"
import { Button } from "../components/Button"
import techLogosPng from "../assets/tech-logos.png"
import { fadeProps } from "../constants"

export const Hero = () => (
  <div className="container px-8">
    <div
      {...fadeProps}
      className="mx-auto max-w-xl flex flex-col justify-center text-center my-24"
    >
      <h1>An open stack for Blockchain development</h1>

      <p className="mx-auto max-w-md my-8 px-2">
        <span className="font-bold">Sequence</span> lets you integrate
        blockchain with your product in two minutes
      </p>

      <div className="flex flex-col xs-flex-row items-center mt-3 max-w-md mx-auto">
        <Button gradientFill className="flex-1 mx-2 mb-4">
          Try Wallet
        </Button>
        <Button gradientBorder className="flex-1 mx-2 mb-4">
          Book a Demo
        </Button>
      </div>
    </div>

    <div className="relative">
      <div className="relative" style={{ zIndex: -1, opacity: 0.3 }}>
        <Transaction index={0} x={100} y={-100} />
        <Transaction index={1} x={-250} y={100} />
        <Transaction index={2} x={800} y={250} />
        <Transaction index={3} x={900} y={-50} />
        <Transaction index={4} x={-80} y={340} />
        <Transaction index={5} x={250} y={450} />
      </div>
      <div
        // {...fadeProps}
        className="bg-blue max-w-3xl px-8 py-12 md:px-32 md:py-20 my-40 mx-auto text-center items-center justify-center"
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

        <p
          className="text-white mb-6"
          style={{ fontSize: 16, fontWeight: 300, opacity: 0.8 }}
        >
          Compatible with 30+ web technologies
        </p>
        <img className="mx-auto" alt="logos" src={techLogosPng} width={475} />
      </div>
    </div>
  </div>
)

const Transaction = ({ index, x = 0, y = 0 }) => (
  <div
    className="p-8 absolute slide"
    style={{
      background: "linear-gradient(0deg, #FFFFFF, #FFFFFF), url(image.png)",
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
      animationDelay: `${index * 2000}ms`,
      animationDirection: index % 2 === 0 ? "alternate-reverse" : "alternate",
      width: 600,
      left: x,
      top: y,
      borderRadius: 30,
    }}
  >
    <h4 className="mb-3">Block #10686414</h4>
    <div className="flex">
      <div className="mr-6">
        <p>Timestamp</p>
        <p>Transactions</p>
        <p>Mined by</p>
        <p>Block Reward</p>
        <p>Uncles Reward</p>
        <p>Difficulty</p>
      </div>
      <div className="flex-1">
        <p>Aug-18-2020 09:10:04 PM +UTC</p>
        <p>246 / 71</p>
        <p>10xeea5b82b61424df8020f5fedd81767f2d0d25bfb</p>
        <p>4.975090298205138245</p>
        <p>N/A</p>
        <p>2,588,867,976,520,568</p>
      </div>
    </div>
  </div>
)
