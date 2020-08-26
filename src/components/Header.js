import React from "react"
import { Button } from "./Button"
import logoPng from "../assets/logo.png"

export const Header = () => (
  <header className="flex flex-1 justify-between py-6 max-w-6xl mx-auto">
    <div className="flex items-center">
      <img alt="logo" src={logoPng} style={{ height: 30 }} />
    </div>

    <div className="flex flex-1 justify-end items-center">
      <HeaderLink>Tools</HeaderLink>
      <HeaderLink>Contact</HeaderLink>
      <Button gradientFill small className="ml-4">
        Try Wallet
      </Button>
    </div>
  </header>
)

const HeaderLink = ({ children, href = "/#" }) => (
  <a href={href} className="px-5 text-blue">
    {children}
  </a>
)
