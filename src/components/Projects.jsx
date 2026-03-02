import { motion } from 'framer-motion';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className='flex flex-col md:flex-row gap-8 p-8 rounded-lg border border-[#2a2a2a] bg-[#1f1f1f]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true}}
    >

      <div className='text-6xl font-bold shrink-0' style={{ color: '#2a2a2a'}}>
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className='flex flex-col gap-4 flex-1'>
        <h3 className='text-2xl font-semibold text-[#e8e8e8]'>{project.title}</h3>
        <p className='text-[#aaaaaa] leading-relaxed'>{project.description}</p>

        <div className='flex flex-wrap gap-2'>
          {project.tags.map((tech, i) => (
            <span
              key={i}
              className='text-xs px-2 py-1 rounded'
              style={{ backgroundColor: '#2a2a2a', color: '#ff6b35' }}
            >
              {tech}
            </span>
          ))}
      </div>

      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section className='w-full min-h-screen flex items-center justify-center px-20 py-20'>
      <div className='ma x-w-4xl w-full flex flex-col gap-20'>


        <div className='flex flex-col gap-10'>
          <motion.h2
            className='text-5xl font-bold'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 0, y: 30}}
            transition={{ duration: 0.5}}
            viewport={{ once: true }}
          >
            Dev <span style={{ color: '#cc0000'}}>Projects</span>
          </motion.h2>

          <div className='flex flex-col gap-6'>
            {codingProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
            {/* This is where ill put my coding projects when i dig them out of the vault (github) */}



          <div className='flex flex-col gap-10'>
            <motion.h2
              className='text-5xl font-bold'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 0, y: 30}}
              transition={{ duration: 0.5}}
              viewport={{ once: true }}
            >
              Video <span style={{ color: '#cc0000'}}>Videos</span>
            </motion.h2>
            
            <div className='flex flex-col gap-6'>
              {videoProjects.map((project, index) => (
                <VideoCard key={index} project={project} index={index} />
              ))}
            </div>
          </div>
      {/* This is where ill put my video projects...(when i finish them LOL) */}

      </div>
    </section>
  );
}

export default Projects;