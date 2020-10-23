import React from "react"
import { Button } from "../components/Button"
import techLogosPng from "../assets/tech-logos.png"
import { fadeProps } from "../constants"

export const Hero = () => (
  <div className="container px-8">
    <div
      {...fadeProps}
      className="mx-auto max-w-2xl flex flex-col justify-center text-center my-24"
    >
      <h1>A seamless user and developer experience for Ethereum</h1>

      <p className="mx-auto max-w-2xl my-8 px-2" style={{ fontWeight: "500" }}>
        Sequence lets you integrate blockchain with your product in two minutes
      </p>

      <div className="flex flex-col xs-flex-row items-center mt-3 max-w-md mx-auto">
        <Button className="flex-1 mx-2 mb-4">Get Started</Button>
      </div>
    </div>

    <div className="relative">
      <BlockAnimation />

      <div
        className="bg-blue max-w-3xl px-8 py-12 md:px-16 md:py-20 my-40 mx-auto text-center items-center justify-center rounded shadow"
        style={{
          background:
            "linear-gradient(0deg, rgba(42, 42, 42, 0.4), rgba(42, 42, 42, 0.4)), linear-gradient(222.39deg, rgba(174, 38, 145, 0) 68.93%, #AB4294 115.85%), linear-gradient(61.57deg, rgba(30, 118, 154, 0) 19.77%, #56C6CD 85.93%), linear-gradient(0deg, #342ABC, #342ABC)",
        }}
      >
        <h2 className="text-white mb-6">
          Enter the next generation of Internet economies
        </h2>

        <p className="mb-12 mx-1">
          From digital collectibles to video game items and virtual real estate,
          digital worlds are becoming more real and valuable than ever before.
          Sequence is your gateway to access and build in this new dimension.
        </p>

        <p
          className="text-white mb-6"
          style={{ fontSize: 16, fontWeight: 300, opacity: 0.5 }}
        >
          Compatible with everything on Ethereum
        </p>
        <img
          className="mx-auto"
          alt="logos"
          src={techLogosPng}
          width={475}
          style={{ opacity: 0.5 }}
        />
      </div>
    </div>
  </div>
)

const BlockAnimation = () => (
  <div
    className="relative"
    style={{
      zIndex: -1,
      opacity: 0.3,
    }}
  >
    <Block index={0} left={-120} top={-100} />
    <Block index={1} left={-80} top={50} />
    <Block index={2} left={-160} top={200} />
    <Block index={3} left={-50} top={350} />
    <Block index={4} left={-10} top={450} />
    <Block index={5} right={-350} top={-50} />
    <Block index={6} right={-490} top={150} />
    <Block index={7} right={-380} top={240} />
    <Block index={8} right={-390} top={360} />
    <Block index={9} right={-430} top={520} />
  </div>
)

const Block = ({ index, left, top, right }) => (
  <div
    className="p-8 absolute slide rounded shadow"
    style={{
      background:
        "linear-gradient(83.57deg, rgba(0, 0, 0, 0) 13.55%, rgba(34, 201, 191, 0.05) 98.35%), linear-gradient(265.77deg, rgba(0, 0, 0, 0) 44.4%, rgba(92, 47, 115, 0.2) 110.31%), linear-gradient(0deg, #222222, #222222)",
      animationDelay: `${index * 1000}ms`,
      animationDirection: index % 2 === 0 ? "alternate-reverse" : "alternate",
      width: 600,
      right,
      left,
      top,
    }}
  >
    <h4 className="mb-3 gradient inline">Block #10686414</h4>
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
