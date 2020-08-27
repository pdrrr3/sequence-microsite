import React from "react"
import logoPng from "../assets/logo.png"

export const Footer = () => (
  <footer className="px-8">
    <div className="flex flex-col md:flex-row items-center md:items-start flex-1 justify-between py-20">
      <div className="flex flex-col flex-1 items-center md:items-start">
        <img alt="logo" src={logoPng} style={{ height: 30 }} />
        <p>Stay up to date with our latest news and announcements</p>
      </div>

      <div className="flex flex-col md:flex-row flex-1">
        <div className="flex flex-col flex-1">
          <FooterLink href="/#tools">Tools</FooterLink>
          <FooterLink href="/#contact">Contact</FooterLink>
          <FooterLink href="https://www.google.ca">Docs</FooterLink>
        </div>

        <div className="flex flex-col flex-1">
          <FooterLink href="https://www.google.ca">Github</FooterLink>
          <FooterLink href="https://www.google.ca">Twitter</FooterLink>
        </div>

        <div className="flex flex-col flex-1">
          <FooterLink href="/privacy">Privacy</FooterLink>
          <FooterLink href="/privacy">Terms</FooterLink>
          <FooterLink href="/privacy">Cookies</FooterLink>
        </div>
      </div>
    </div>
    <div className="flex flex-1 justify-between py-10">
      <p>Copyright © {new Date().getFullYear()} Sequence</p>
      <p>Built by Horizon</p>
    </div>
  </footer>
)

const FooterLink = ({ children, href = "#/" }) => (
  <a href={href} className="px-2 py-2">
    {children}
  </a>
)
