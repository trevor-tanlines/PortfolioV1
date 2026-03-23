import { useEffect, useRef } from "react"

function ParticleNetwork() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        
        canvas.width = canvas.offsetWidth
        canvas.height = canvas.offsetHeight

        const nodes = Array.from({ length: 170 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speedX: (Math.random() - 0.5) * 1.8,
            speedY: (Math.random() - 0.5) * 1.8,
            radius: Math.random() * 2 + 1,
            hasRect: Math.random() > 0.7, // the percentage chance of rectangles (about 30% maybe adjust later for more or less, if i even remember LMFAO)
            rectValue: Math.floor(Math.random() * 9999),
            rectWidth: Math.random() * 80 + 20,
            rectHeight: Math.random() * 40 + 10,
            flickerTimer: 0,
            flickerInterval: Math.floor(Math.random() * 60 + 30),
            visibilityTimer: 0,
            visibilityInterval: Math.floor(Math.random() * 200 + 100),
        }))

// these are the nodes (the dots in laymans terms) and the cool ahh data rectangles (boxes?) and their properties, like speed and size and stuff yada yada yada you get it



        const maxDistance = 200
        let frame = 0
        
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            frame

            nodes.forEach(node => {
                node.x += node.speedX
                node.y += node.speedY
// Me when the nodes move around


                if (node.x < 0 || node.x > canvas.width) node.speedX *= -1
                if (node.y < 0 || node.y > canvas.height) node.speedY *= -1
// Me when the nodes hit the edge and bounce back

                ctx.beginPath()
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
                ctx.fillStyle = '#8b0000'
                ctx.fill()
// Me when th... okay im done with this bit, the nodes are drawn on the canvas

                if (node.hasRect) {
                    node.flickerTimer++
                    node.visibilityTimer++
                    if (node.visibilityTimer >= node.visibilityInterval) {
                        node.hasRect = Math.random() > 0.5
                        node.visibilityTimer = 0
                        node.visibilityInterval = Math.floor(Math.random() * 200 + 100)
                    }
                    if (node.flickerTimer >= node.flickerInterval) {
                        node.rectValue = Math.floor(Math.random() * 9999)
                        node.rectWidth = Math.random() * 80 + 20
                         node.rectHeight = Math.random() * 40 + 10
                        node.flickerTimer = 0
                        node.flickerInterval = Math.floor(Math.random() * 60 + 30)
                    }
// hasRect draws data rectangles on rando nodes and flickertimer updates values also at random


                    const rectX = node.x + 8
                    const rectY = node.y - 10

                    ctx.strokeStyle = '#cc0000'
                    ctx.lineWidth = 0.8
                    ctx.strokeRect(rectX, rectY, node.rectWidth, node.rectHeight)
// I dont evem have a bit for this, its just the rectangle border

                    ctx.font = '10px monospace'
                    ctx.fillStyle = '#e8e8e8'
                    ctx.fillText(node.rectValue, rectX + 5, rectY + 14)
// and this is the text inside the rectangle, which is just a random number that changes every now and then
                }
                
                if (!node.hasRect && Math.random() > 0.998) {
    node.hasRect = true
    node.visibilityTimer = 0
}
        })

            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x
                    const dy = nodes[i].y - nodes[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy) /* haha squirt (i know its square root) */

                    if (distance < maxDistance) {
                        const opacity = 1 - distance / maxDistance
                        ctx.beginPath()
                        ctx.moveTo(nodes[i].x, nodes[i].y)
                        ctx.lineTo(nodes[j].x, nodes[j].y)
                        ctx.strokeStyle = `rgba(139, 0, 0, ${opacity})`
                        ctx.lineWidth = 0.5
                        ctx.stroke()
                    }
                }
            }
// Okay basically when the nodes get close enough together, they connect 


            requestAnimationFrame(animate)
        }
        animate()

        const handleResize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <canvas 
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
            }}
        />
    )
}

export default ParticleNetwork
