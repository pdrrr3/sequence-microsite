import React from "react"
import { Button } from "./Button"
import logoPng from "../assets/logo-color.png"

export const Header = () => (
  <header className="flex flex-1 justify-between max-w-6xl mx-auto mt-7 px-5">
    <div className="flex flex-1 items-center justify-center sm:justify-start">
      <a href="/">
        <img alt="logo" src={logoPng} style={{ height: 32 }} />
      </a>
    </div>

    <div className="hidden sm:flex flex-1 justify-end items-center">
      <HeaderLink href="/#contact">Contact</HeaderLink>
      <HeaderLink href="/#community">Community</HeaderLink>
      <Button small>Book a Demo</Button>
    </div>
  </header>
)

const HeaderLink = ({ children, href = "/#" }) => (
  <a href={href} className="px-5">
    {children}
  </a>
)
