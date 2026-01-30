"use client"

import MobileWindowHeader from "@/components/mobile/WindowHeader";
import { techStack} from "@/constants";
import { Check, ChevronRight, Flag } from "lucide-react";
import MobileWindowWrapper from "@/hoc/MobileWindowWrapper";

const MobileTerminalInfo = () => {
    return(
        <>
        <MobileWindowHeader windowKey={"terminal"} title={"Terminal"}/>

        <div className={"techstack"}>
            <p>
                <span className={"font-bold"}>@nathan %</span> show tech stack
            </p>

            <ul className={"content"}>
                {techStack.map(({category, items}) => (
                   <li key={category} className={"flex flex-col"}>
                       <div className={"flex flex-row"}>
                           <ChevronRight className={"check"} size={20}/>
                           <h3>{category}</h3>
                       </div>
                       <ul>
                           {items.map((item, i)=>(
                               <li key={i}>
                                   {item}
                                   {i < items.length - 1 ? ",":""}
                               </li>
                           ))}
                       </ul>
                   </li>
                ))}
            </ul>

            <div className={"footnote"}>
                <p>
                    <Check size={20} />5 of 5 stacks loaded successfully (100%)
                </p>

                <p className="text-black dark:text-white">
                    <Flag size={15} fill="black" />
                    Render time: 6ms
                </p>
            </div>
        </div>
        </>
    )
}

const MobileTerminal = MobileWindowWrapper(MobileTerminalInfo, "terminal")

export default MobileTerminal;