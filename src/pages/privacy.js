import React from "react"
import { Head } from "../components/Head"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import "../index.css"

export default function Privacy() {
  return (
    <div>
      <div className="container px-8">
        <Head />

        <Header />
        <div className="max-w-4xl mx-auto my-32">
          <h1 className="mb-8">Privacy</h1>

          <p className="mb-12">
            These terms govern your use of the SkyWeaver video game and the
            Arcadeum platform that powers SkyWeaver, including related
            trademarks, software code, and other intellectual property (all
            collectively referred to in these terms as the “Arcadeum Gaming
            Platform”). By using the Arcadeum Gaming Platform, you indicate your
            acceptance of these terms, which constitute the agreement (the
            “Agreement”) between you and Horizon Blockchain Games (“Horizon”).
            In the event that you do not agree with any of these terms and
            conditions, do not use or install any components of the Arcadeum
            Gaming Platform and delete it from any devices on which it may have
            been installed. If you are employed by a company or other form of
            enterprise carrying out a trial of the Arcadeum Gaming Platform, by
            entering into these terms and conditions you are binding your
            employer.
          </p>

          <h4>Trial Product</h4>

          <p className="mb-12">
            For the purposes of this trial, you acknowledge that the Arcadeum
            Gaming Platform will have limited functionality, is still under
            development by Horizon, may not be fully tested, and may contain
            bugs or errors. Accordingly, the Arcadeum Gaming Platform may not be
            suitable for commercial release in its current state.
          </p>

          <h4>Scope of Use</h4>

          <p className="mb-12">
            Horizon grants to you, during the Term, a non-exclusive, non-
            transferable, limited license to use the software included with the
            Arcadeum Gaming Platform solely for the purpose of evaluating the
            Arcadeum Gaming Platform. You may not use the Arcadeum Gaming
            Platform for any other purpose. Any third party software included
            with the Arcadeum Gaming Platform will be governed by the terms of
            this Agreement. You may not separate any embedded software from the
            Arcadeum Gaming Platform. Except as expressly permitted in this
            Agreement, you may not, nor may you assist any other person or
            entity to, transfer, modify, distribute, assign, use or sublicense
            the Arcadeum Gaming Platform or any component of the Arcadeum Gaming
            Platform, or access, translate, convert to another programming
            language, decompile, reverse engineer or disassemble any portion of
            the software, or otherwise attempt to derive source code of any
            software included with or related to the Arcadeum Gaming Platform
            provided in non-human readable form.
          </p>

          <h4>Ownership</h4>

          <p className="mb-12">
            All right, title and interest in the intellectual property embodied
            in the Arcadeum Gaming Platform, and any accompanying materials, are
            owned by Horizon or its suppliers and licensors and may be protected
            by copyright, trademark, patent, trade secret law and international
            treaties. Any rights, express or implied, in the intellectual
            property embodied in the foregoing, other than those specified in
            this Agreement, are reserved by Horizon and its suppliers and
            licensors. You will not remove any proprietary notices from the
            Arcadeum Gaming Platform and accompanying materials, if any, without
            the prior written approval of Horizon.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
