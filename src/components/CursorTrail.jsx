import { use, useEffect, useRef } from "react";

function CursorTrail() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let particles = []
        
        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resize()
        window.addEventListener('resize', resize)

 // Makes the Canvas cover the whole screen (I hope, idk im just trying shit)

        
        const createParticle = (x, y) => ({
            x,
            y,
            char: String(Math.floor(Math.random() * 10)),
            opacity: 1,
            size: Math.random() * 4 + 6, 
            speedX: (Math.random() - 0.5) * 1.5,
            speedY: (Math.random() - 0.5) * 1.5,
        })

// ooo ahhh cool number go brrrrrrrrrr (what the particle effect looks like)


        const handleMouseMove = (e) => {
            if (Math.random() > 0.5) 
                return particles.push(createParticle(e.clientX, e.clientY))
        }
        window.addEventListener('mousemove', handleMouseMove)

// The logic to actually track the mouse and particles


    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        particles = particles.filter(p => p.opacity > 0)

        particles.forEach(p => {
            p.x += p.speedX
            p.y += p.speedY
            p.opacity -= 0.015

            ctx.save()
            ctx.globalAlpha = p.opacity
            ctx.font = `${p.size}px Arial`
            ctx.fillStyle = 'white'
            ctx.shadowColor = '#cc0000'
            ctx.shadowBlur = 10
            ctx.fillText(p.char, p.x, p.y)
            ctx.restore()
        })

        requestAnimationFrame(animate)
    }
    animate()

// The closest Ill ever get to animating (adobe after effects doesnt count shush)

return () => {
    window.removeEventListener('resize', resize)
    window.removeEventListener('mousemove', handleMouseMove)
}
    }, [])

return (
    <canvas 
        ref={canvasRef} 
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            zIndex: 9999,
        }} 
    />
)
}

export default CursorTrail