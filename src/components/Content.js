import React from "react"
export const Content = ({ heading, children }) => (
  <div>
    <h2>{heading}</h2>
    <p>{children}</p>
  </div>
)
