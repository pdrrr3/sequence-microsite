import React from "react"
import logoPng from "../../assets/sequence-logo.png"
import footerPng from "../../assets/horizon-logo.png"
import { MailingListInput } from "../MailingList"
import { URIS } from "../../constants"

export const Footer = ({ className }) => (
  <footer>
    <div className={`container ${className}`}>
      <div
        className="flex flex-col items-center flex-1 justify-between pt-10 w-full lg:flex-row lg:items-start"
        style={{ minHeight: 400 }}
      >
        <div className="flex flex-col flex-1 items-center text-center max-w-sm lg:items-start lg:text-left">
          <img
            className="mb-5"
            style={{ height: 40 }}
            alt="logo"
            src={logoPng}
          />

          <MailingListInput grayscale small />

          <p className="my-4 note">GDPR Compliant</p>
        </div>

        <div className="flex flex-col lg:flex-row flex-1 text-center max-w-3xl order-1 my-4 lg:my-0 lg:ml-8">
          <div className="flex flex-col flex-1 items-end">
            <FooterLink href={URIS.tools}>Tools</FooterLink>
            <FooterLink href={URIS.contact}>Contact</FooterLink>
            <FooterLink href={URIS.docs}>Docs</FooterLink>
          </div>

          <div className="flex flex-col flex-1 items-end order-4 lg:order-2">
            <FooterLink href={URIS.github}>Github</FooterLink>
            <FooterLink href={URIS.twitter}>Twitter</FooterLink>
          </div>

          <div className="flex flex-col flex-1 items-end order-3">
            <FooterLink href={URIS.privacy}>Privacy</FooterLink>
            <FooterLink href={URIS.terms}>Terms</FooterLink>
            <FooterLink href={URIS.cookies}>Cookies</FooterLink>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-between pb-7 mt-4 lg:mt-0 lg:pr-8">
        <p className="my-2 note">
          Copyright © {new Date().getFullYear()} Sequence
        </p>

        <a className="flex items-center" href={URIS.horizon}>
          <p className="my-2 mr-4 hidden note lg:block">Built by</p>
          <img alt="logo" src={footerPng} style={{ height: 26 }} />
        </a>
      </div>
    </div>
  </footer>
)

const FooterLink = ({ children, href = "#/" }) => (
  <a href={href} className="px-2 py-2 lg:text-left text-gray">
    {children}
  </a>
)
