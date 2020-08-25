import React from "react"
import { Button } from "./Button"
import skyweaverPng from "../assets/skyweaver.png"

export const SkyweaverCallout = () => (
  <div className="bg-blue text-white text-center my-20">
    <div className="mx-auto max-w-xl flex flex-col items-center py-12">
      <img alt="skyweaver" src={skyweaverPng} width={300} />
      <h3 className="text-white mt-4 mb-8">Powered by Sequence</h3>
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
      <Button>Visit Website</Button>
    </div>
  </div>
)
