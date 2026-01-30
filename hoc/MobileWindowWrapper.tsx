"use client"
import {useLayoutEffect, useState, useEffect, ComponentType} from "react";

import useWindowStore from "@/store/window";
import {WindowKey} from "@/type";

const MobileWindowWrapper = <P extends object> (Component: ComponentType<P>, windowKey:WindowKey) => {
    const Wrapped = (props:P) => {
        const {windows} = useWindowStore();
        const {isOpen, zIndex} = windows[windowKey]
        const [isMobile, setIsMobile] = useState(false)

        //Checking if Screen is mobile
        useEffect(() => {
            const checkMobile = () => {
                setIsMobile(window.innerWidth < 640)
            }

            checkMobile()
            window.addEventListener("resize", checkMobile)

            return () => window.removeEventListener('resize', checkMobile)
        },[])

        useLayoutEffect(() => {
            const el = document.getElementById(`mobile-${windowKey}`)
            if(!el) return;
            el.style.display= (isOpen ? 'block' : 'none');
        },[isOpen, isMobile])
// Don't render on desktop
        if (!isMobile || !isOpen) return null;
    return (
        <section
            id={`mobile-${windowKey}`}
            style={{ zIndex }}
        >
            <Component {...props} />
        </section>
    )
    }

    // Debug: This is for debugging
    Wrapped.displayName = `MobileWindowWrapper(${Component.displayName || Component.name || "Component"})`;

    return Wrapped
}
export default MobileWindowWrapper
