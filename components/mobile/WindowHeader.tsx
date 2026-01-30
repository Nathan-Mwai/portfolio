"use client"
import { ChevronLeft } from "lucide-react";
import useWindowStore from "@/store/window";
import {MobileWindowHeaderProps} from "@/type";
import clsx from "clsx";


const MobileWindowHeader = ({ windowKey, title, onBack, className = "" }:MobileWindowHeaderProps) => {

    const {closeWindow} = useWindowStore();

    const handleBack = () => {
        if(onBack) {
            onBack();
        }else{
            closeWindow(windowKey);
        }
    }
    return (
        <div
            id={"mobile-window-header"}
            className={clsx("flex justify-between items-center gap-5 px-3 pb-3 relative z-10",
                className)}
        >
            <div
                className="flex-1 flex items-center gap-2 cursor-pointer"
                onClick={handleBack}
            >
                <ChevronLeft className="icon" />
                <p className="text-sm text-blue-500">Go Back</p>
            </div>

            <p className="flex-[1.5] text-lg font-georama text-black dark:text-white line-clamp-1">
                {title}
            </p>
        </div>
    )
}
export default MobileWindowHeader
