import React from "react"
import { Head } from "../components/Head"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import "../index.css"

export default function Home() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Head />
      <Header />
      <div className="container text-center">
        <h2>404</h2>
        <p>Not found</p>
      </div>
      <Footer />
    </div>
  )
}
