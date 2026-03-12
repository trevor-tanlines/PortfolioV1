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

function Skills() {
  return (
    <section className='w-full min-h-screen flex items-center justify-center px-20 py-20'>
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

      <div className='flex flex-col gap-12'>
        {skills.map((group, groupIndex) => (
        <div key={groupIndex}>
          <h3>{group.category}</h3>

          <div>
            {group.items.map((skill, skillIndex) => (
              <span key={skillIndex}>{skill}</span>
            ))}
          </div>
      </div>

      ))}
      </div>

      </div>
    </section>
  )
}

export default Skills