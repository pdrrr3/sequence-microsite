import React from "react"
import logoPng from "../assets/logo.png"
import footerPng from "../assets/footer.png"
import { MailingListInput } from "./MailingList"

export const Footer = () => (
  <footer style={{ background: "#151515" }}>
    <div className="container px-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start flex-1 justify-between py-20">
        <div className="flex flex-col flex-1 items-center text-center lg:text-left max-w-sm lg:items-start">
          <img
            className="mb-5"
            alt="logo"
            src={logoPng}
            style={{ height: 40 }}
          />

          <MailingListInput grayscale small />

          <p className="mt-4 mb-12" style={{ fontSize: 16, opacity: 0.6 }}>
            Stay up to date with our latest news and announcements
          </p>
        </div>

        <div className="flex flex-col lg:flex-row flex-1 text-center max-w-3xl order-1 lg:ml-8">
          <div className="flex flex-col flex-1 items-end">
            <FooterLink href="/#tools">Tools</FooterLink>
            <FooterLink href="/#contact">Contact</FooterLink>
            <FooterLink href="https://www.google.ca">Docs</FooterLink>
          </div>

          <div className="flex flex-col flex-1 items-end lg:m-0 mt-4 order-4 lg:order-2">
            <FooterLink href="https://www.google.ca">Github</FooterLink>
            <FooterLink href="https://www.google.ca">Twitter</FooterLink>
          </div>

          <div className="flex flex-col flex-1 items-end order-3">
            <FooterLink href="/privacy">Privacy</FooterLink>
            <FooterLink href="/privacy">Terms</FooterLink>
            <FooterLink href="/privacy">Cookies</FooterLink>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-between py-10 lg:pr-8">
        <p className="my-2" style={{ fontSize: 16, opacity: 0.6 }}>
          Copyright © {new Date().getFullYear()} Sequence
        </p>

        <a className="flex items-center" href="https://google.ca">
          <p className="my-2 mr-4 hidden lg:block" style={{ opacity: 0.6 }}>
            Built by
          </p>
          <img alt="logo" src={footerPng} style={{ height: 26 }} />
        </a>
      </div>
    </div>
  </footer>
)

const FooterLink = ({ children, href = "#/" }) => (
  <a
    href={href}
    className="px-2 py-2 lg:text-left text-gray"
    style={{ fontSize: 16, minWidth: 150 }}
  >
    {children}
  </a>
)
