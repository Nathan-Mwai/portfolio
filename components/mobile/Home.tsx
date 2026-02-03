"use client"

import useWindowStore from "@/store/window";

const MobileHome = () => {
    const { openWindow } = useWindowStore();

    return (
        <section id="mobile-home">
            <ul>
                <li onClick={() => {openWindow("resume")}}>
                    <img src="/images/pages.png" alt="pages" />
                </li>
                <li onClick={() => {openWindow("terminal")}}>
                    <img src="/images/terminal.png" alt="terminal" />
                </li>
            </ul>
        </section>
    );
};

export default MobileHome;
