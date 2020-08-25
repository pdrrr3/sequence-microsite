import React from "react"

export const Button = ({ children, className = "" }) => (
  <a
    className={`inline-block px-2 py-3 rounded-full bg-blue text-center text-white ${className}`}
    style={{ minWidth: 200 }}
    href="/#"
  >
    {children}
  </a>
)
