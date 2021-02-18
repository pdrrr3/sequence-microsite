import React, { useEffect, useState } from "react"
import { SAL_PROPS } from "../../constants"

export const DesignedFor = ({ className }) => {
  const [items, setItems] = useState([...ITEMS])

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(i => [...i.slice(1), i[0]])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      id="designed-for"
      {...SAL_PROPS}
      className={`flex flex-col md:flex-row text-center mx-auto ${className}`}
    >
      <div
        className={`heading-wrap flex md:flex-1 items-center text-right mr-6`}
      >
        <h2>Designed for</h2>
      </div>
      <div
        style={{ textAlign: "left" }}
        className={`relative flex-1 justify-center items-center`}
      >
        {items.map((item, index) => {
          const relativePos = index - (ITEMS.length - 1 - 3)
          return (
            <h2
              key={item}
              className="gradient2"
              style={{
                opacity: 1 - Math.abs(relativePos) / 3,
                position: "absolute",
                top: "42%",
                whiteSpace: "nowrap",
                transition: "opacity 300ms, transform 300ms",
                transform: `translate(0, ${relativePos * 75}px)`,
              }}
            >
              {item}
            </h2>
          )
        })}
      </div>
    </div>
  )
}

const ITEMS = [
  "Payments",
  "Exchanges",
  "Marketplaces",
  "Payments ",
  "Gaming",
  "DeFi",
  "NFTs + Collectibles",
]
