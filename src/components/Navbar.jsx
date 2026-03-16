import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function Navbar() {
    const [visible, setVisible] = useState(true)
    const [lastScroll, setLastScroll] = useState(0)

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
            className="fixed top-0 left-0 w-full px-20 py-4 flex items-center justify-between z-50"
            style={{ backgroundColor: 'rgba(26, 26, 26, 0.85', backdropFilter: 'blur(10px)' }}
            animate={{ y: visible ? 0: -100 }}
            transition={{ duration: 0.3 }}    
        >
            {/* Put logo here (using my name as a placeholder) */}
            <p className="text-xl font-bold" style={{ color: '#cc0000'}}>Trevor</p>

            <ul className="flex gap-8 list-none">
                <li><a href="#hero" className="text-[#e8e8e8] hover:text-[#cc0000] transition-colors duration-200">Home</a></li>
                <li><a href="#about" className="text-[#e8e8e8] hover:text-[#cc0000] transition-colors duration-200">About</a></li>
                <li><a href="#projects" className="text-[#e8e8e8] hover:text-[#cc0000] transition-colors duration-200">Projects</a></li>
                <li><a href="#skills" className="text-[#e8e8e8] hover:text-[#cc0000] transition-colors duration-200">Skills</a></li>
                <li><a href="#contact" className="text-[#e8e8e8] hover:text-[#cc0000] transition-colors duration-200">Contact</a></li>
            </ul>
        </motion.nav>
    )
}

export default Navbar