import React from "react"
import { Head } from "../components/Head"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
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
