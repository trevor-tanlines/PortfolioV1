import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="w-full min-h-screen flex items-center justify-center px-20 py-20">
      <div className="max-w-4xl w-full flex flex-col gap-12" style={{
          background: 'rgba(10, 10, 10, 0.75)',
          padding: '40px',
          borderRadius: '12px',
          backdropFilter: 'blur(8px)',
      }}>

                <motion.h2
                    className="text-5xl font-bold"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6}}
                    viewport={{ once: true }}
                >          
                About <span style={{ color: '#cc0000' }}>Me</span>
                </motion.h2>

                <motion.div 
                  style={{ width: '220px', height: '2px', backgroundColor:'#cc0000' }}
                  initial={{ opacity: 0, width: '0px' }}
                  whileInView={{ opacity: 1, width: '220px' }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                />

                <motion.p
                  className='text-2xl font-light text-[#d4d4d4]'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  I build things for the web that look great and feel even better to use.
                </motion.p>

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