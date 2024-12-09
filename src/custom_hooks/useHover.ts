import { useEffect, useRef, useState } from "react";



export function useHover() {

    const ref = useRef<HTMLDivElement | null>(null)
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        const node = ref.current
        if(node) {

            const handleMouseEnter = () => setHovered(true)
            const handleMouseLeave = () => setHovered(false)

            node.addEventListener('mouseenter', handleMouseEnter)
            node.addEventListener('mouseleave', handleMouseLeave)

            return () => {
                node.removeEventListener('mouseenter', handleMouseEnter)
                node.removeEventListener('mouseleave', handleMouseLeave)
            }
        }
    }, [])

    return { hovered, ref }
}