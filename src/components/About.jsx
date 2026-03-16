import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="w-full min-h-screen flex items-center justify-center px-20 py-20">
      <div className="max-w-4xl w-full flex flex-col gap-12">

                <motion.h2
                    className="text-5xl font-bold"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6}}
                    viewport={{ once: true }}
                >          
                About <span style={{ color: '#cc0000' }}>Me</span>
                </motion.h2>

        <div className="flex flex-col gap-6 max-w-2xl">
          {[
            "Hello to whoever's reading, I'm Trevor, a frontend dev student and video editor, I enjoy making things that look and feel great to use and experience.",
            "Using core design principles as a base, I build and create projects that pique interests and leave a lasting impression.",
            "This portfolio is a look into my works and what I have to offer."
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-[#aaaaaa] text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About