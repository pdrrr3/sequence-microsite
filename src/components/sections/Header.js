import React, { useState } from "react"
import logoPng from "../../assets/sequence-logo.png"
import iconPng from "../../assets/sequence-icon.png"
import { URIS } from "../../constants"
import { Button } from "../../components/Button"
import { MailingListInput } from "../../components/MailingList"

// TODO: add button outline style
export const Header = ({ className }) => {
  const [open, setOpen] = useState()
  return (
    <header className={`flex flex-1 justify-between mx-auto ${className}`}>
      <div className="flex items-center justify-center sm:justify-start">
        <a className="hidden sm:block" href="/">
          <img alt="logo" src={logoPng} style={{ height: 32 }} />
        </a>
      </div>

      <div className="hidden sm:flex flex-1 justify-end items-center">
        <HeaderLink href={URIS.docs}>Docs</HeaderLink>
        <HeaderLink href={URIS.github}>Github</HeaderLink>
        <HeaderLink href={URIS.community}>Discord</HeaderLink>
        <HeaderLink href={URIS.contact}>Contact</HeaderLink>
        <Button className="ml-5">Launch Wallet</Button>
      </div>

      <div className="sm:hidden">
        {/* TODO: icon */}
        <Button onClick={() => setOpen(true)}>O</Button>

        <nav
          className="py-5 pl-7 pr-5"
          style={{
            transition: "opacity 500ms",
            opacity: open ? 1 : 0,
            pointerEvents: open ? "auto" : "none",
            position: "fixed",
            inset: "0 0 auto 0",
            background:
              "linear-gradient(83.57deg, rgba(0, 0, 0, 0) 13.55%, rgba(34, 201, 191, 0.05) 98.35%), linear-gradient(265.77deg, rgba(0, 0, 0, 0) 44.4%, rgba(92, 47, 115, 0.2) 110.31%), #111111",
            zIndex: 99,
          }}
        >
          <div className="flex items-start justify-between">
            <img
              alt="logo"
              src={iconPng}
              style={{ height: 64, marginTop: 12 }}
            />

            {/* TODO: icon */}
            <Button Component="button" onClick={() => setOpen(false)}>
              X
            </Button>
          </div>

          <div className="my-8">
            <a className="nav-link" href={URIS.docs}>
              Docs
            </a>
            <a className="nav-link" href={URIS.github}>
              Github
            </a>
            <a className="nav-link" href={URIS.community}>
              Discord
            </a>
            <a className="nav-link" href={URIS.contact}>
              Contact
            </a>
          </div>

          <div className="mb-8">
            {/* TODO: outline button */}
            <Button Component="button" onClick={() => window.open(URIS.github)}>
              Launch Wallet
            </Button>
          </div>

          <div className="mb-5" style={{ maxWidth: 380 }}>
            {/* TODO: gray button */}
            <MailingListInput grayscale small />
          </div>

          <p>GDPR Compliant</p>
          <div className="mb-2" />
          <p>Copyright © 2020 Sequence</p>
          <div className="mb-5" />
        </nav>
      </div>
    </header>
  )
}

const HeaderLink = ({ children, href = "/#" }) => (
  <a href={href} target="_blank" rel="noreferrer" className="px-4">
    {children}
  </a>
)
