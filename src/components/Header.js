import React from "react"
import { Button } from "./Button"
import logoPng from "../assets/logo.png"

export const Header = () => (
  <header className="flex flex-1 justify-between py-6 max-w-6xl mx-auto">
    <div className="flex items-center">
      <a href="/">
        <img alt="logo" src={logoPng} style={{ height: 30 }} />
      </a>
    </div>

    <div className="flex flex-1 justify-end items-center">
      <HeaderLink href="/#tools">Tools</HeaderLink>
      <HeaderLink href="/#contact">Contact</HeaderLink>
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
