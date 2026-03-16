import { motion } from "framer-motion";

const contacts = [
  {
    label: "Email",
    value: "Emailfornow@gmail.com",
    link: "mailto:Emailfornow@gmail.com",
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
    <section className="w-full min-h-screen flex items-center justify-center px-20 py-20">
      <div className="max-w-4xl w-full flex flex-col gap-12">

<motion.h2 className="text-5xl font-bold"
  initial={{ opacity: 0, y:30 }}
  whileInView={{ opacity: 1, y: 0}}
  transition={{ duration: 0.3 }}
  viewport={{ once: true }}
>
  Contact <span style={{color: '#cc0000' }}>Me</span>!
</motion.h2>
{/* Title */}


    <div className="mt-8 flex flex-col gap-6">
      {contacts.map((contact, index) => ( 
        <motion.div key={index} 
        className="flex flex-col gap-1 border-l-2 pl-4"
        style={{ borderColor: '#cc0000' }}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay:index * 0.15 }}
        viewport={{ once: true }}
        whileHover={{ x:6 }}
        > {/* border thickness  and colour */}
        
          <span className="text-sm text-gray-500">{contact.label}</span>

          <a href={contact.link}
          className="text-[#e8e8e8] text-lg hover:text-[#cc0000] transition-colors duration-200"
          target="_blank"
          rel="noreferrer"
          >
          {contact.value}</a>
        </motion.div>
      ))}
    </div>
      </div>
    </section>
  )
}

export default Contact;