"use client"
import WindowWrapper from "@/hoc/WindowWrapper";
import WindowControls from "@/components/WindowControls";
import useWindowStore from "@/store/window";
import { TextFileNode } from "@/type";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile.data as TextFileNode | null;

    if (!data) return null;

    const { name, subtitle, image, imageUrl, description } = data as (TextFileNode & { imageUrl?: string });

    return (
        <>
            <div id={"window-header"}>
                <WindowControls target={"txtfile"} />
                <h2>{name}</h2>
            </div>

            <div className={"p-5 space-y-6 bg-white"}>
                {(image || imageUrl) && (
                    <div className={"w-full"}>
                    <img
                        src={image || imageUrl!}
                        alt={name}
                        className={"w-full h-auto object-cover rounded-md flex-shrink-0"}
                    />
                    </div>
                )}

                <div className={"space-y-3"}>
                    {subtitle ? <h3 className={"text-lg font-semibold"}>{subtitle}</h3>:null}
                    {Array.isArray(description) && description.length > 0 && (
                        <div className={"space-y-3 leading-relaxed text-base text-gray-800"}>
                            {description.map((para, idx) => (
                                <p key={idx}>{para}</p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

const TextWindow = WindowWrapper(Text, 'txtfile')
export default TextWindow
