import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Frontend',
    color: '#cc0000',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']
  },
   {
    category: 'Video Editing',
    color: '#ff6b35',
    items: ['Adobe Premiere Pro', 'Adobe After Effects', 'Adobe Illustrator/Photoshop (Assets)'],
  },
   {
    category: 'Currently Learning',
    color: '#e8e8e8',
    items: ['Python'],
  },
]
// If i need to add more skills 4 l8r i can do it here

function Skills() {
  return (
    <section id='skills' className='w-full min-h-screen flex items-center justify-center px-20 py-20'>
    <div className='max-w-4xl w-full flex flex-col gap-12'>

      <motion.h2
        className='text-5xl font-bold'
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y:0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        
        My <span style={{ color: '#cc0000' }}>Skills</span>
      </motion.h2>
        {/* The title area */}

      <div className='flex flex-col gap-12'> {/* loops through each skill */}
        {skills.map((group, groupIndex) => (
          <motion.div 
          key={groupIndex}
          className='flex flex-col gap-4'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
          viewport={{ once: true }}
          > {/* this is the fade and pop up effect  with a slight delay so they dont run into each other and look weird*/}

          <h3 className='text-lg font-medium' style={{color: group.color}}>
            {group.category}
          </h3>

        <div key={groupIndex} className='flex flex-wrap gap-4'>
            {group.items.map((skill, skillIndex) => (
              <motion.span 
               key={skillIndex}
               className='px-4 py-2 rounded text-sm text-[#e8e8e8] border-0'
              style={{ backgroundColor: '#161616', border: `1px solid ${group.color}33` }} // border opacity 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y:0 }}
              transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ borderColor: group.color, boxShadow: `0 0 10px ${group.color}44`, scale: 1.05}} // glow intensity + hover effect/scale
              >

              {skill}
            </motion.span>
            ))}
          </div>

        </motion.div>
      ))}
      </div>

      </div>
    </section>
  )
}

export default Skills