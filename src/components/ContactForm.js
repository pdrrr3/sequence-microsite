import React from "react"
import { Button } from "./Button"

export const ContactForm = () => (
  <div className="relative px-2 pt-8 pb-10 mb-10 md:px-4">
    <div id="contact" className="container text-center">
      <div className="max-w-2xl mx-auto mb-8">
        <h2 className="mb-4">Get a Demo</h2>

        <p>
          Find out more about how you Sequence can help you build the next
          generation of Internet economies and experiences
        </p>
      </div>

      <form
        onSubmit={e => {
          e.preventDefault()
          if (e && e.target) {
            const data = new FormData(e.target)

            // TODO: Need somewhere to submit this data
            console.log(Object.fromEntries(data.entries()))
          }
        }}
      >
        <div className="flex flex-col max-w-4xl mx-auto mb-4">
          <div className="flex-1 flex flex-col md:flex-row">
            <Input name="email" label="Your Email" />
            <Input name="website" label="Company Website" />
          </div>
          <Input name="name" label="Your Name" />
          <TextArea name="about" label="Tell us about your project" />
        </div>

        <Button Component="button" type="submit">
          Submit
        </Button>
      </form>

      <p className="max-w-md mx-auto mt-10">
        We typically respond to inquiries within 48 hours
        <br />
        You can also email us directly at hello@sequence.com
      </p>
    </div>
  </div>
)

const Input = ({ name, label }) => (
  <InputBase name={name} label={label}>
    <input className="input" type="text" id={name} name={name} />
  </InputBase>
)

const TextArea = ({ name, label }) => (
  <InputBase name={name} label={label}>
    <textarea className="textarea" type="text" id={name} name={name} />
  </InputBase>
)

const InputBase = ({ name, label, children }) => (
  <div className="flex flex-1 flex-col text-left mx-2 mb-6">
    <label className="label mb-2" htmlFor={name}>
      {label}
    </label>
    {children}
  </div>
)
