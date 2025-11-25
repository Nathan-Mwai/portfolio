"use client"
import WindowControls from "@/components/WindowControls";
import {Search} from "lucide-react";
import WindowWrapper from "@/hoc/WindowWrapper";
import {locations} from "@/constants";
import useLocationStore from "@/store/location";
import clsx from "clsx";
import useWindowStore from "@/store/window";
import {WindowKey} from "@/type";

function getWindowKey(item: { fileType: string; kind: string }): WindowKey | null {
    if (item.fileType === "pdf") return "resume";
    if (item.fileType === "txt") return "txtfile";
    if (item.fileType === "img") return "imgfile";
    if (item.kind === "folder") return "finder";
    if (item.fileType === "terminal") return "terminal";
    return null;
}


const Finder = () => {
    const {activeLocation, setActiveLocation} = useLocationStore()
    const {openWindow} = useWindowStore()

    const openItem = (item:any) =>{
        if(item.fileType ==='pdf') return openWindow("resume")
        if(item.kind === 'folder') return setActiveLocation(item)
        if(['fig','url'].includes(item.fileType) && item.href) return window.open(item.href, '_blank')

        const key = getWindowKey(item);
        if (key) {
            openWindow(key, item);
        } else {
            console.error(`Invalid window key for fileType=${item.fileType}, kind=${item.kind}`);
        }
    }

    const renderList = (name:string,items:any[]) =>(
        <div>
            <h3>{name}</h3>
            <ul>{items.map((item)=> (
                <li
                    key={item.id}
                    onClick={()=> setActiveLocation(item)}
                    className={clsx(item.id===activeLocation?.id ? 'active':'not-active')}
                >
                    <img src={item.icon} className={"w-4"} alt={item.name} />
                    <p className={"text-sm font-medium truncate"}>{item.name}</p>
                </li>
            ))}
            </ul>
        </div>
    )

    return (
        <>
            <div id={'window-header'}>
                <WindowControls target={"finder"}/>
                <Search className={"icon"}/>
            </div>
            <div className={"bg-white flex h-full"}>
                <div className={"sidebar"}>
                    {renderList("Favorites",Object.values(locations))}
                    {renderList("My Apps",locations.work.children)}
                </div>
            <ul className={"content"}>
                {activeLocation?.children.map((item) => (
                    <li key={item.id} className={item.position} onClick={()=> openItem(item)}>
                        <img src={item.icon} alt={item.name} />
                        <p>{item.name}</p>
                    </li>
                ))}
            </ul>
            </div>
        </>
    )
}

const FinderWindow = WindowWrapper(Finder, 'finder')
export default FinderWindow
