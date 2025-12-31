import React from 'react'
import dayjs from "dayjs";
import {Battery, Wifi} from "lucide-react";

const MobileNavbar = () => {
    return (
        <section
            id="mobile-navbar"
            className={"flex justify-between items-center py-3 px-5 gap-5 sm:hidden relative z-10000 text-white"}>

            <time>{dayjs().format("h:mm A")}</time>

            <div className={"bg-black flex-1 rounded-full px-2 py-5"}/>
            <ul className={"flex items-center gap-2"}>
                <li>
                    <Wifi size={26} className={"icon"}/>
                </li>
                <li>
                    <Battery size={26} className={"icon"}/>
                </li>
            </ul>
        </section>
    )
}
export default MobileNavbar
