import React from "react"
import skyweaverPng from "../assets/skyweaver-logo.png"
import skyweaverBGPng from "../assets/skyweaverbg.png"
import { SAL_PROPS } from "../constants"

export const SkyweaverCallout = () => (
  <div className="relative text-white px-4 py-10 mx-2 mb-10 md:text-center md:mx-4 lg:mx-8">
    <SkyweaverBackground />

    <div
      {...SAL_PROPS}
      className="mx-auto max-w-xl flex flex-col items-center px-2 py-11"
    >
      <img alt="skyweaver" src={skyweaverPng} width={300} />
      <h3 className="text-white mt-5 mb-7">Powered by Sequence</h3>

      <p className="text-white">
        The digital card game where players actually own, trade and sell their
        cards. By ranking highly on the competitive leaderboard, players win
        tradable items. With a built-in wallet and marketplace, players can
        easily store, buy, sell and trade items with one another.
        <br />
        <br />
        SkyWeaver is pioneering community-owned economies in gaming, and it’s
        powered by Sequence.
      </p>
    </div>
  </div>
)

const SkyweaverBackground = () => (
  <div className="absolute inset-0" style={{ zIndex: -1 }}>
    <img
      className="object-cover object-left md:object-center w-full h-full relative rounded"
      alt="skyweaverbg"
      src={skyweaverBGPng}
      style={{ zIndex: 1 }}
    />
  </div>
)
