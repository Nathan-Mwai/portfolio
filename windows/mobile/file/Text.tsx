"use client"
import MobileWindowWrapper from "@/hoc/MobileWindowWrapper";
import useWindowStore from "@/store/window";
import MobileWindowHeader from "@/components/mobile/WindowHeader";
import {TextFileNode} from "@/type";

const TextInfo = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile.data as TextFileNode | null;

    if (!data) return null;

    const { name, subtitle, image, imageUrl, description } = data as (TextFileNode & { imageUrl?: string });

    return (
        <>
            <MobileWindowHeader windowKey={"txtfile"} title={"ShowCase"}/>

            <div className={"px-5 pb-5 pt-10 space-y-7"}>
                {(image || imageUrl) && <img src={image || imageUrl} alt={name} className="w-20 rounded-full" />}

                {subtitle && <h1 className="font-bold">{subtitle}</h1>}

                {Array.isArray(description) &&
                    description.map((text, i) => <p key={i}>{text}</p>)}
            </div>
        </>
    )
}

const MobileText = MobileWindowWrapper(TextInfo, "txtfile")
export default MobileText
