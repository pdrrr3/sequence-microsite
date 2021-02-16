import React, { createRef, useEffect, useState } from "react"
import throttle from "lodash.throttle"
import { EthBox } from "./EthBox"
import { SdkBox } from "./SdkBox"
import { WalletBox } from "./WalletBox"
import { SequenceBox } from "./SequenceBox"

export const AnimatedBoxes = () => {
  const [isVisible, currentElement] = useVisibility(0)
  const [state, setState] = useState({
    playing: true,
    reversed: false,
    hovered: false,
    hasPlayed: false,
  })

  useEffect(() => {
    const animated = document.querySelector(".animated-boxes .box-sequence")
    animated.addEventListener("animationiteration", () => {
      setState(s => ({
        ...s,
        playing: !s.hovered && s.reversed,
        reversed: !s.reversed,
        hasPlayed: true,
      }))
    })
  }, [])

  return (
    <div
      ref={currentElement}
      role="presentation"
      className={`animated-boxes ${state.hasPlayed ? "animate-out" : ""}  ${
        state.playing && isVisible ? "active" : ""
      }`}
      onMouseEnter={() =>
        setState(s => ({ ...s, hovered: true, playing: true }))
      }
      onMouseLeave={() =>
        setState(s => ({ ...s, hovered: false, playing: true }))
      }
      onClick={() => setState(s => ({ ...s, playing: true }))}
    >
      <EthBox />
      <SdkBox />
      <WalletBox />
      <SequenceBox />
    </div>
  )
}

function useVisibility() {
  const [isVisible, setIsVisible] = useState(false)
  const currentElement = createRef()

  const onScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false)
      return
    }
    const top = currentElement.current.getBoundingClientRect().top
    setIsVisible(top <= window.innerHeight - 400)
  }, 100)

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  })

  return [isVisible, currentElement]
}
