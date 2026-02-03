"use client"
import MobileWindowWrapper from "@/hoc/MobileWindowWrapper";
import MobileWindowHeader from "@/components/mobile/WindowHeader";
import {socials} from "@/constants";

const ContactInfo = () => {
    return (
        <>
            <MobileWindowHeader windowKey={"contact"} title={"Contact"}/>

            <div className={"content"}>
                <img
                    src={"/images/adrian.jpg"}
                    alt={"Nathan"}
                    className={"w-20 rounded-full"}
                />

                <h3>Let&apos;s Connect</h3>
                <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>
                <ul>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={text}
                            >
                                <img src={icon} alt={text} className="size-5" />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}

const MobileContact = MobileWindowWrapper(ContactInfo,"contact")
export default MobileContact
