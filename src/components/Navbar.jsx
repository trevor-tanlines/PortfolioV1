import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

function Navbar() {
    const [visible, setVisible] = useState(true)
    const [lastScroll, setLastScroll] = useState(0)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY

            if (currentScroll < lastScroll) {
                setVisible(true)
            } else {
                setVisible(false)
            }
            setLastScroll(currentScroll)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
        }, [lastScroll])

    return (
        <motion.nav
        className="fixed top-0 left-0 w-full px-6 md:px-20 py-4 flex items-center justify-between z-50"            style={{ backgroundColor: 'rgba(26, 26, 26, 0.85)', backdropFilter: 'blur(10px)' }}
            animate={{ y: visible ? 0: -100 }}
            transition={{ duration: 0.3 }}    
        >
            {/* Put logo here (using my name as a placeholder) */}
            <p className="text-xl font-bold" style={{ color: '#cc0000'}}>Trevor</p>

            <ul className="hidden md:flex gap-8 list-none">
                <li><a href="#hero" className="text-[#e8e8e8] hover:text-[#cc0000] transition-colors duration-200">Home</a></li>
                <li><a href="#about" className="text-[#e8e8e8] hover:text-[#cc0000] transition-colors duration-200">About</a></li>
                <li><a href="#projects" className="text-[#e8e8e8] hover:text-[#cc0000] transition-colors duration-200">Projects</a></li>
                <li><a href="#skills" className="text-[#e8e8e8] hover:text-[#cc0000] transition-colors duration-200">Skills</a></li>
                <li><a href="#contact" className="text-[#e8e8e8] hover:text-[#cc0000] transition-colors duration-200">Contact</a></li>
            </ul>

            <button
                className="md:hidden flex flex-col gap-1.5 p-2"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span className="w-6 h-0.5 bg-[#e8e8e8] block transition-all duration-300" />
                <span className="w-6 h-0.5 bg-[#e8e8e8] block transition-all duration-300" />
                <span className="w-6 h-0.5 bg-[#e8e8e8] block transition-all duration-300" />
            </button>
            {/* Hamburg menu button 4 mobile*/}

            <AnimatePresence>
                {menuOpen && (
                    <motion.ul
                        className="md:hidden absolute top-full left-0 w-full flex flex-col list-none py-4"
                        style={{ backgroundColor: 'rgba(26, 26, 26, 0.95)' }}
                        initial={{ opacity:0, y: -10 }}
                        animate={{ opacity: 1, y:0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {['hero', 'about', 'projects', 'skills', 'contact'].map((section) =>
                            <li key ={section}>
                                <a href={`#${section}`}
                                className="block px-6 py-3 text-[#e8e8e8] hover:text-[#cc0000] transition-colors duration-200 capitalize"
                                onClick={() => setMenuOpen(false)}
                            >
                                {section === 'hero' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
                                </a> 
                            </li>
                        )}
                    </motion.ul>
                )}
            </AnimatePresence>

        </motion.nav>
    )
}

export default Navbar