import { motion } from "framer-motion";
import { label, link } from "framer-motion/client";

const contacts = [
  {
    label: "Email",
    value: "Emailfornow@gmail.com",
    link: "emailto:Emailfornow@gmail.com",
  },
  {
    label: "Github",
    value: "Github.com/filloutlater",
    link: "https://github.com/filloutlater",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/filloutlater",
    link: "https://linkedin.com/in/filloutlater",
  },
]

function Contact() {
  return (
    <section>
      <h2>Contact Me!</h2>

      {contacts.map((contact, index) => (
        <div key={index}>
          <p>{contact.label}</p>
          <a href={contact.link}>{contact.value}</a>
        </div>
      ))}
    </section>
  )
}

export default Contact;