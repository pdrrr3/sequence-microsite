import React from "react"
import { Button } from "../components/Button"
import skyweaverPng from "../assets/skyweaver.png"
import skyweaverBGPng from "../assets/skyweaverbg.png"

export const SkyweaverCallout = () => (
  <div className="relative text-white mb-20 pt-4 pb-6 md:pt-20 md:pb-32 md:text-center">
    <SkyweaverBackground />

    <div className="mx-auto max-w-xl flex flex-col items-center py-12">
      <img alt="skyweaver" src={skyweaverPng} width={300} />
      <h3 className="text-white mt-4 mb-10">Powered by Sequence</h3>
      <p className="text-white px-10">
        The digital card game where players actually own, trade and sell their
        cards. By ranking highly on the competitive leaderboard, players win
        tradable items. With a built-in wallet and marketplace, players can
        easily store, buy, sell and trade items with one another.
        <br />
        <br />
        SkyWeaver is pioneering community-owned economies in gaming, and it’s
        powered by Sequence.
      </p>
      <Button className="mt-16 bg-white text-blue">Visit Website</Button>
    </div>
  </div>
)

const SkyweaverBackground = () => (
  <div
    className="absolute inset-0"
    style={{
      zIndex: -1,
    }}
  >
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(71.63deg, #AD64B9 7.95%, #9E64B9 35.94%, #6477B9 64.09%, #8CDCE1 97.81%)",
        mixBlendMode: "multiply",
        zIndex: 2,
        opacity: 0.5,
      }}
    />
    <img
      className="object-cover object-left md:object-center w-full h-full relative"
      alt="skyweaverbg"
      src={skyweaverBGPng}
      style={{
        zIndex: 1,
        mixBlendMode: "screen",
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(76.42deg, rgba(40, 161, 211, 0) 20.86%, rgba(34, 201, 191, 0.75) 88.57%), #342ABC",
        zIndex: 0,
      }}
    />
  </div>
)
