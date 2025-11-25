"use client"
import WindowWrapper from "@/hoc/WindowWrapper";
import WindowControls from "@/components/WindowControls";
import useWindowStore from "@/store/window";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile.data as ({ name: string; imageUrl?: string } | null);

    if (!data) return null;

    const { name, imageUrl } = data;
    if (!imageUrl) return null;

    return (
        <>
            <div id={"window-header"}>
                <WindowControls target={"imgfile"} />
                <h2>{name}</h2>
            </div>

            <div className={"p-5 bg-white"}>
                <div className={"w-full"}>
                    <img
                        src={imageUrl}
                        alt={name}
                        className={"w-full h-auto object-cover rounded-md flex-shrink-0"}
                    />
                </div>
            </div>
        </>
    );
}

const ImageWindow = WindowWrapper(Image, 'imgfile')
export default ImageWindow
