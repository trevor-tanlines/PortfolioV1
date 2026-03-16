import { useState, useEffect } from "react"

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
        <nav>
            <p>Trevor</p>

            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar