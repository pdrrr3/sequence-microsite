import React from "react"
import { Button } from "./Button"
import logoPng from "../assets/sequence-logo.png"
import { URIS } from "../constants"

export const Header = () => (
  <header className="flex flex-1 justify-between max-w-6xl mx-auto mt-7 px-5">
    <div className="flex flex-1 items-center justify-center sm:justify-start">
      <a href="/">
        <img alt="logo" src={logoPng} style={{ height: 32 }} />
      </a>
    </div>

    <div className="hidden sm:flex flex-1 justify-end items-center">
      <HeaderLink href={URIS.community}>Community</HeaderLink>
      <HeaderLink href={URIS.contact}>Contact</HeaderLink>
    </div>
  </header>
)

const HeaderLink = ({ children, href = "/#" }) => (
  <a href={href} className="px-5">
    {children}
  </a>
)
