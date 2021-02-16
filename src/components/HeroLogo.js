import React, { useState, useEffect } from "react"
import { useCallback, useRef } from "react"
import { HERO_IMAGES, HERO_IMAGE_SWAP_DURATION } from "../constants"
import linkImg from "../assets/link.png"
import { CrossfadeImage } from "./CrossfadeImage"

export const HeroLogo = ({ images, index, size }) => {
  const timeoutRef = useRef()
  const [frameIndex, setFrameIndex] = useState(0)

  const nextFrame = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setFrameIndex(i => (i >= images.length - 1 ? 0 : i + 1))
      timeoutRef.current = setTimeout(
        nextFrame,
        HERO_IMAGE_SWAP_DURATION * HERO_IMAGES.length
      )
    }, HERO_IMAGE_SWAP_DURATION * (index + 1) + Math.floor(Math.random() * 4) * 500)
  }, [images.length, index])

  useEffect(() => {
    nextFrame()
    return () => clearTimeout(timeoutRef.current)
  }, [nextFrame])

  return (
    <div className={`hero-logo absolute pointer hero-logo-${index}`}>
      <a
        className="flex justify-center items-end absolute h-full w-full"
        target="_blank"
        rel="noreferrer"
        style={{
          opacity: 1,
          filter: "drop-shadow(0px 30px 50px rgba(0, 0, 0, 0.2))",
        }}
        href={images[frameIndex].href}
      >
        <CrossfadeImage
          alt="logo"
          delay={0}
          className="object-fit-contain absolute w-full h-full"
          src={images[frameIndex].src}
          style={{ width: "100%", height: "100%" }}
        />
        <div
          className="link mb-6 flex items-center text-center color-white"
          style={{ zIndex: 3 }}
        >
          {images[frameIndex].label}
          <img
            alt="link"
            className="ml-2"
            src={linkImg}
            style={{ height: 20 }}
          />
        </div>
      </a>
    </div>
  )
}
