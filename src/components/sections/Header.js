import React, { useState } from "react"
import logoPng from "../../assets/sequence-logo.png"
import iconPng from "../../assets/sequence-icon.png"
import openMenuPng from "../../assets/menu-open.png"
import closeMenuPng from "../../assets/menu-close.png"
import { URIS } from "../../constants"
import { Button } from "../../components/Button"
import { MailingListInput } from "../../components/MailingList"

export const Header = ({ className }) => {
  const [open, setOpen] = useState()
  const onClose = () => setOpen(false)
  return (
    <header className={`flex flex-1 justify-between mx-auto ${className}`}>
      <div className="flex items-center justify-center md:justify-start">
        <a className="hidden md:block" href="/">
          <img alt="logo" src={logoPng} style={{ height: 32 }} />
        </a>
      </div>

      <div className="hidden md:flex flex-1 justify-end items-center">
        <HeaderLink href={URIS.docs}>Docs</HeaderLink>
        <HeaderLink href={URIS.github}>Github</HeaderLink>
        <HeaderLink href={URIS.community}>Discord</HeaderLink>
        <HeaderLink href={URIS.contact}>Contact</HeaderLink>
        <Button
          variant="outlined"
          className="ml-5"
          style={{ background: "black" }}
        >
          Launch Wallet
        </Button>
      </div>

      <div className="md:hidden">
        <button onClick={() => setOpen(true)}>
          <img alt="menu-open" src={openMenuPng} style={{ height: 55 }} />
        </button>
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "black",
            zIndex: 98,
            pointerEvents: "none",
            opacity: open ? 0.5 : 0,
          }}
        />
        <nav
          className="py-5 pl-5 pr-5"
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
            <img alt="logo" src={iconPng} style={{ height: 55 }} />

            <button onClick={onClose}>
              <img alt="menu-close" src={closeMenuPng} style={{ height: 55 }} />
            </button>
          </div>

          <div className="my-8">
            <a className="nav-link" href={URIS.docs} onClick={onClose}>
              Docs
            </a>
            <a className="nav-link" href={URIS.github} onClick={onClose}>
              Github
            </a>
            <a className="nav-link" href={URIS.community} onClick={onClose}>
              Discord
            </a>
            <a className="nav-link" href={URIS.contact} onClick={onClose}>
              Contact
            </a>
          </div>

          <div className="mb-8 inline-block">
            <Button
              variant="outlined"
              Component="button"
              onClick={() => window.open(URIS.github)}
            >
              Launch Wallet
            </Button>
          </div>

          <div className="mb-5" style={{ maxWidth: 380 }}>
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
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="px-4"
    style={{ fontSize: 20 }}
  >
    {children}
  </a>
)
