import React from "react"
import { Button } from "./Button"

export const ContactForm = () => (
  <div id="contact" className="text-center my-20">
    <div className="max-w-2xl mx-auto mb-16">
      <h2>Get in Touch</h2>

      <p className="mt-4">
        Find out more about how you Sequence can help you build the next
        generation of Internet economies and experiences
      </p>
    </div>

    <form
      onSubmit={e => {
        e.preventDefault()
        if (e && e.target) {
          const data = new FormData(e.target)
          console.log(Object.fromEntries(data.entries()))
        }
      }}
    >
      <div className="flex flex-col max-w-4xl mx-auto">
        <div className="flex">
          <div className="flex-1">
            <Input name="email" label="Your Email" />
            <Input name="website" label="Company Website" />
          </div>
          <div className="flex-1">
            <Input name="name" label="Your Name" />
          </div>
        </div>
        <TextArea name="about" label="Tell us about your project" />
      </div>

      <Button gradientBorder Component="button" className="mt-4" type="submit">
        Submit
      </Button>
    </form>

    <p className="max-w-md mx-auto mt-12">
      We typically respond to inquiries within 48 hours
      <br />
      You can also email us directly at hello@sequence.com
    </p>
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

// const Select = ({ name, label, options = [] }) => (
//   <InputBase name={name} label={label}>
//     <select type="text" id={name} name={name}>
//       {options.map((o, i) => (
//         <option key={`option-${i}`} value={o}>
//           {o}
//         </option>
//       ))}
//     </select>
//   </InputBase>
// )

const InputBase = ({ name, label, children }) => (
  <div className="flex flex-col text-left mx-2 mb-6">
    <label className="label mb-2" htmlFor={name}>
      {label}
    </label>
    {children}
  </div>
)
