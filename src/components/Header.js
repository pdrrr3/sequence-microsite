import React from "react"
export const Header = () => (
  <header className="flex flex-1 justify-between py-6">
    <div className="flex flex-1">
      <p>Sequence</p>
    </div>

    <div className="flex flex-1 justify-end">
      <HeaderLink>Tools</HeaderLink>
      <HeaderLink>Developers</HeaderLink>
      <HeaderLink>About</HeaderLink>
      <HeaderLink>Contact</HeaderLink>
      <HeaderLink>Try Wallet</HeaderLink>
    </div>
  </header>
)

const HeaderLink = ({ children }) => <p className="px-2">{children}</p>
