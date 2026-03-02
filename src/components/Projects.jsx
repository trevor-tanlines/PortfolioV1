import { motion } from 'framer-motion';

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

      </div>
    </section>
  );
}

export default Projects;