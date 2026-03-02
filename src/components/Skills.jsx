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
    <section>
      <h2>My Skills</h2>
    </section>
  )
}

export default Skills