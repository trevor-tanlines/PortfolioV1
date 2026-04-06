 import { motion } from 'framer-motion';
 import { useState } from 'react';

 const codingProjects = [
  {
    title: 'Aether File Scanner & Index Project',
    description: 'A file scanner, storage, and categorization app built with a team of fellow student programmers, targeted towards the elderly to help them store and maintain important documents virtually. ',
    tech: ['React', 'Node.js'],
    githubLink: 'https://github.com/1medi/aether',
  },
 ];

 const videoProjects = [
  {
    title: 'Aether Commercial ',
    description: 'A commercial I edited for a Project, The animations were all originals done by me. ',
    videoLink: 'https://youtu.be/sWO6YiC6nuE',
  },
  {
    title: 'Video Project 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    videoLink: '#',
  },
 ];

 function getYouTubeId(url) {
  const match = url.match(/(?:youtu\.be\/|watch\?v=)([^&\s]+)/);
  return match ? match[1] : ''
}
// Gets the VOD id from my youtube

 const glitchVariants = {
  normal: { x: 0, y: 0, opacity: 1 },
  glitch: {
     skewX: [-1, 1, -1, 0],
     x: [-3, 3, -3, 0], 
    opacity: [1, 0.8, 1, 1],
    transition: {duration: 0.3, ease: 'easeInOut'},
    },
};
// muh glitch effect

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className='flex flex-col md:flex-row gap-8 p-8 rounded-lg border border-[#1a1a1a] bg-[#161616]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true}}
      variants={glitchVariants}
      whileHover="glitch"
    >

      <div className='text-6xl font-bold shrink-0' style={{ color: '#1a1a1a'}}>
        {String(index + 1).padStart(2, '0')}
      </div>

      <div className='flex flex-col gap-4 flex-1'>
        <h3 className='text-2xl font-semibold text-[#e8e8e8]'>{project.title}</h3>
        <p className='text-[#aaaaaa] leading-relaxed'>{project.description}</p>

        <div className='flex flex-wrap gap-2'>
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className='text-xs px-2 py-1 rounded'
              style={{ backgroundColor: '#1a1a1a', color: '#ff6b35' }}
            >
              {tech}
            </span>
          ))}
      </div>
      
<div className="flex gap-4 mt-2">
    {project.githubLink && (
        
        <a href={project.githubLink}
            className="text-sm text-[#cc0000] hover:text-[#ff6b35] transition-colors duration-200"
            target="_blank"
            rel="noreferrer"
        >
            GitHub →
        </a>
    )}
    {project.liveLink && (
        
        <a href={project.liveLink}
            className="text-sm text-[#cc0000] hover:text-[#ff6b35] transition-colors duration-200"
            target="_blank"
            rel="noreferrer"
        >
            Live Site →
        </a>
    )}
</div>

      </div>
    </motion.div>
  );
}

function VideoCard({ project, index }) {
  return (
    <motion.div
      className='flex flex-col gap-4 p-8 rounded-lg border border-[#1a1a1a] bg-[#161616]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true}}
      variants={glitchVariants}
      whileHover="glitch"
    >

      <h3 className='text-2xl font-semibold text-[#e8e8e8]'>{project.title}</h3>
      <p className='text-[#aaaaaa] leading-relaxed'>{project.description}</p>

    {project.videoLink && project.videoLink !== '#' && (
      <div style={{
        position: 'relative',
        paddingBottom: '60%',
        height: 0,
        overflow: 'hidden',
        borderRadius: '7px',
        border: '1px solid #2a2a2a'
      }}>
        <iframe
          src={`https://www.youtube.com/embed/${getYouTubeId(project.videoLink)}`}
          title={project.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '7px',
          }}
        />
      </div>
        
)}
  
    </motion.div>
  );
}

function Projects() {
  return (
    <section id='projects' className='w-full min-h-screen flex items-center justify-center px-20 py-20'>
      <div className='max-w-4xl w-full flex flex-col gap-20'>


        <div className='flex flex-col gap-10'>
          <motion.h2
            className='text-5xl font-bold'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0}}
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
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 0.5}}
              viewport={{ once: true }}
            >
              My <span style={{ color: '#cc0000'}}>Videos</span>
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