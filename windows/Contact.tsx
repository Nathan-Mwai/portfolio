"use client";

import WindowWrapper from "@/hoc/WindowWrapper";
import {socials} from "@/constants";
import WindowControls from "@/components/WindowControls";

const Contact = () => {
    return (
        <>
            <div id={'window-header'}>
                <WindowControls target={"contact"}/>
                <h2>Contact me</h2>
            </div>
            <div className={"p-5 space-y-5"}>
                <img src={"/images/nathan.webp"} alt="" className={'w-20 rounded-full'}/>
                <h3>Let's connect</h3>
                <p>Got an Idea? A bug to squash? Or just wanna talk tech? I'm in.</p>
                <ul>
                    {socials.map(({id,bg,link,text,icon})=> (
                        <li key={id} style={{backgroundColor: bg}}>
                            <a href={link} target='_blank' rel='noopener noreferrer'>
                            <img src={icon} alt={text} className={"size-5"}/>
                            <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
const ContactWindow = WindowWrapper(Contact, 'contact')
export default ContactWindow