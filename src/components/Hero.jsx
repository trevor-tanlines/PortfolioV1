import { motion } from "framer-motion"
import ParticleNetwork from "./ParticleNetwork"

function Hero () {
  return (
    <section className="relative w-full h-screen flex items-center justify-between px-20">
        <ParticleNetwork />


      {/* Left side text that I shall add later cause Im lazy rn*/ "get lorem ipsumed idiot"}
    <motion.div
        className="flex flex-col gap-4 z-10 relative"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
    >
        <div style={{
            position:'absolute',
            inset: '-20px -30px',
            background: 'radial-gradient(ellipse, rgba(26,26,26,0.85) 0%, transparent 80%)',
            zIndex: -1,
            pointerEvents: 'none',
        }} />

        <p style={{color:'#ff6b35'}} className="text-3xl">Sup! I'm</p>
        <h1 className="text-7xl font-bold text-white">Trevor</h1>
        <h2 className="text-3xl font-light text-[#e8e8e8]">A Frontend Dev & Video Editor</h2>
        <p className="text-[#aaaaaa] max-w-md mt-2">
            Designing and building Websites/Apps, and video editing, so you don't have to.
        </p>

        <motion.a
            href="projects"
className="mt-3 w-fit px-6 py-3 border border-[#cc0000] text-[#ff1f1f] hover:bg-[#cc0000] hover:text-white rounded-full transition-all duration-200" whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            >
        
        See what I can do
        </motion.a>
    </motion.div>

    
    </section>
  )
}

export default Hero

// So apparently this term Hero is an industry term?? Allegedly its ment to invoke the image of a hero making an entrance... kinda weird but I guess thats what the pros use ¯\_(ツ)_/¯ 