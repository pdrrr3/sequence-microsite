import React from "react"
import { Button } from "./Button"
import logoPng from "../assets/logo.png"

export const Header = () => (
  <header className="flex flex-1 justify-between mt-16 sm:mt-0 py-6 max-w-6xl mx-auto px-4">
    <div className="flex flex-1 items-center justify-center sm:justify-start sm:ml-4">
      <a href="/">
        <img alt="logo" src={logoPng} style={{ height: 42 }} />
      </a>
    </div>

    <div className="hidden sm:flex flex-1 justify-end items-center">
      <HeaderLink href="/#tools">Tools</HeaderLink>
      <HeaderLink href="/#contact">Contact</HeaderLink>
      <Button small className="ml-4">
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
