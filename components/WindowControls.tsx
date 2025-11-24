import useWindowStore from "@/store/window";
import {WindowKey} from "@/type";

const WindowControls = ({target}:{target:WindowKey}) => {
    const {closeWindow} = useWindowStore()
    return (
        <div id={"window-controls"}>
            <button
               className={"close"}
                onClick={()=>closeWindow(target)}
                aria-label="Close window"
                type="button"
            />
            <button
                className={"minimize"}
                aria-label="Minimize window"
                disabled
                type="button"
            />
            <button
                className={"maximize"}
                aria-label="Maximize window"
                disabled
                type="button"
            />
        </div>
    )
}
export default WindowControls
