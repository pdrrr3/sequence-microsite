import React from "react"
import { Head } from "../components/sections/Head"
import { Header } from "../components/sections/Header"
import { Footer } from "../components/sections/Footer"
import "../styles/index.js"

export default function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Head />
      <Header />

      <div
        className="container flex flex-col justify-center items-center text-center"
        style={{ minHeight: "60vh" }}
      >
        <h2>404</h2>
      </div>

      <Footer />
    </div>
  )
}
