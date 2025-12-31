"use client"
import dayjs from "dayjs";
import {navIcons, navLinks} from "@/constants";
import useWindowStore from "@/store/window";

const Navbar = () => {
    const {openWindow} = useWindowStore()
    return (
        <nav>
            <div>
               <img src={"/images/logo.svg"} alt="logo" className={"dark:invert"}/>
                <p className={"font-bold"}>Nathan&apos;s PortFolio</p>

                <ul>
                    {navLinks.map(({id, name, type}) => (
                        <li key={id}>
                            <p onClick={() => openWindow(type)}>
                            {name}
                            </p>
                        </li>
                        ))}
                </ul>
            </div>

            <div>
                <ul>
                    {navIcons.map(({id, img}) => (
                        <li key={id}>
                            <img src={img} alt={`icon-${id}`} className={"dark:invert dark:hover:bg-dark-500! icon"} />
                        </li>
                    ))}
                </ul>

                <time>{dayjs().format('ddd MMM D h:mm A')}</time>
            </div>
        </nav>
    )
}
export default Navbar
