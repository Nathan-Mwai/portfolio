"use client"
import useWindowStore from "@/store/window";
import {ComponentType, useEffect, useLayoutEffect, useRef, useState} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import {WindowKey} from "@/type";

gsap.registerPlugin(Draggable);

const WindowWrapper = <P extends object> (Component: ComponentType<P>, windowKey:WindowKey) => {
    const Wrapped = (props:P) => {
        const {focusWindow, windows} = useWindowStore()
        const { isOpen, zIndex } = windows[windowKey];
        const windowRef= useRef<HTMLElement | null>(null)
        const [isDesktop, setIsDesktop] = useState(true)

        useEffect(() => {
            const checkDesktop = () => {
                setIsDesktop(window.innerWidth >= 640)
            }
            checkDesktop()

            window.addEventListener('resize', checkDesktop)

            return () => window.removeEventListener('resize', checkDesktop)
        }, []);

        useGSAP(()=> {
            const el = windowRef.current
            if(!el || !isOpen ||!isDesktop) return;

            el.style.display="block"

            gsap.fromTo(
                el,{scale:0.8, opacity:0, y:40},
                {scale:1, opacity:1, y:0, duration:0.4, ease:"power3.out" }
            )
        },[isOpen, isDesktop])

        useGSAP(()=> {
            const el = windowRef.current;
            if(!el || !isDesktop) return;

            const [instance] = Draggable.create(el,{onPress:()=>focusWindow(windowKey)});
            return () => instance.kill()
            },[isDesktop])

        useLayoutEffect(() => {
            const el = windowRef.current
            if(!el) return;
            el.style.display= isOpen && isDesktop ? "block" : "none";
        },[isOpen])

        if(!isDesktop) return null

        // Ensure correct initial paint without relying on effects:
        // set display based on isOpen at render time to avoid a flash of content.
        return (
            <section
                id={windowKey}
                ref={windowRef}
                style={{ zIndex, display: isOpen ? "block" : "none" }}
                className={"absolute"}
            >
                <Component {...props}/>
        </section>
        )
    }

    Wrapped.displayName= `WindowWrapper(${Component.displayName || Component.name || "Component" })`
    return Wrapped
}
export default WindowWrapper
