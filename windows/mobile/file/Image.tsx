"use client"
import useWindowStore from "@/store/window";
import MobileWindowWrapper from "@/hoc/MobileWindowWrapper";
import MobileWindowHeader from "@/components/mobile/WindowHeader";

const ImageInfo = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile.data as ({ name: string; imageUrl?: string } | null);

    if (!data) return null;

    const { name, imageUrl } = data;
    if (!imageUrl) return null;
    return (
        <>
            <MobileWindowHeader windowKey={"imgfile"} title={"Preview"}/>

            <div className={"preview"}>
                <img src={imageUrl} alt={name}/>
            </div>
        </>
    )
}

const MobileImage = MobileWindowWrapper(ImageInfo, 'imgfile')
export default MobileImage
