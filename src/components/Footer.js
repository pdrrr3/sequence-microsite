import React from "react"
export const Footer = () => (
  <footer>
    <div className="flex flex-1 justify-between py-20">
      <div className="flex flex-1">
        <p>Sequence</p>
      </div>

      <div className="flex flex-col flex-1 justify-end">
        <FooterLink>Tools</FooterLink>
        <FooterLink>Developers</FooterLink>
        <FooterLink>About</FooterLink>
        <FooterLink>Contact</FooterLink>
        <FooterLink>Try Wallet</FooterLink>
      </div>

      <div className="flex flex-col flex-1 justify-end">
        <FooterLink>Tools</FooterLink>
        <FooterLink>Developers</FooterLink>
        <FooterLink>About</FooterLink>
        <FooterLink>Contact</FooterLink>
        <FooterLink>Try Wallet</FooterLink>
      </div>

      <div className="flex flex-col flex-1 justify-end">
        <FooterLink>Tools</FooterLink>
        <FooterLink>Developers</FooterLink>
        <FooterLink>About</FooterLink>
        <FooterLink>Contact</FooterLink>
        <FooterLink>Try Wallet</FooterLink>
      </div>
    </div>
    <div className="flex flex-1 justify-between py-10">
      <p>Copyright 2020 Sequence</p>
      <p>Built by Horizon</p>
    </div>
  </footer>
)

const FooterLink = ({ children }) => <p className="px-2">{children}</p>
