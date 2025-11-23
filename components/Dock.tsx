"use client"

import {useRef} from "react";
import {DISTANCE_DECAY, dockApps} from "@/constants";
import {Tooltip} from "react-tooltip"
import {useGSAP} from "@gsap/react";
import gsap from "gsap";


const Dock = () => {
    const dockRef = useRef<HTMLDivElement | null>(null);

    useGSAP(()=> {
        const dock = dockRef.current;
        if(!dock)return;

        const icons = dock.querySelectorAll(".dock-icon");

        const animateIcons = (mouseX) => {
            const {left} = dock.getBoundingClientRect()

            icons.forEach(icon => {
                const {left:iconLeft, width:w} = icon.getBoundingClientRect();
                const center = iconLeft - left + w / 2
                const distance = Math.abs(mouseX - center)

                const intensity = Math.exp(-(distance ** 2.5) / DISTANCE_DECAY);

                gsap.to(icon,{
                    scale: 1 + 0.25 * intensity,
                    y: -15 * intensity,
                    duration: 0.2,
                    ease: "power1.inOut",
                } )
            })
        }

        const handleMouseMove = (e: MouseEvent) => {
            const {left} = dock.getBoundingClientRect()
            animateIcons(e.clientX - left)
        }

        const resetIcons = () =>
            icons.forEach(icon =>
                gsap.to(icon,{
            scale: 1,
                    y:0,
                    duration: 0.3,
                    ease: "power1.inOut",
        }))
    dock.addEventListener("mousemove", handleMouseMove)
        dock.addEventListener("mouseleave", resetIcons)

        return () => {
            dock.removeEventListener("mousemove", handleMouseMove)
            dock.removeEventListener("mouseleave", resetIcons)
        }
    },[])


    const toggleApp = (app) => {
        //TODO: Implement window logic once the button has been clicked
        //TODO: So what happens next
    }
    return (
        <section id={"dock"}>
            <div ref={dockRef} className={"dock-container"}>
                {dockApps.map(({id,name,icon,canOpen}) => (
                    <div key={id} className={"relative flex justify-center"}>
                        <button
                            type={"button"}
                            className={"dock-icon"}
                            aria-label={name}
                            data-tooltip-id={"dock-tooltip"}
                            data-tooltip-content={name}
                            data-tooltip-delay-show={150}
                            disabled={!canOpen}
                            onClick={()=>toggleApp({id, canOpen})}
                        >
                            <img src={`/images/${icon}`} alt={name} loading="lazy" className={canOpen?"": "opacity-60"}/>
                        </button>
                    </div>
                ))}
                <Tooltip id={"dock-tooltip"} place={"top"} className={"tooltip"}/>
            </div>
        </section>
    )
}
export default Dock
