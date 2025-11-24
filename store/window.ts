import {create} from "zustand"
import {immer} from "zustand/middleware/immer";
import {INITIAL_Z_INDEX, WINDOW_CONFIG} from "@/constants";
import {WindowConfig, WindowKey} from "@/type";

type StoreState = {
    windows: WindowConfig;
    nextZIndex: number;
    openWindow: (windowKey: WindowKey, data?: unknown | null) => void;
    closeWindow: (windowKey: WindowKey, data?: unknown | null) => void;
    focusWindow: (windowKey: WindowKey, data?: unknown | null) => void;
};
const useWindowStore = create<StoreState>()(immer((set) => ({
    windows:WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) => set((state) => {
        const win = state.windows[windowKey];
        if(!win) return;
        win.isOpen = true;
        win.zIndex = state.nextZIndex
        win.data = data ?? win.data
        state.nextZIndex++
    }),
    closeWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if(!win) return;
        win.isOpen = false;
        win.zIndex =INITIAL_Z_INDEX;
        win.data =null
    }),
    focusWindow: (windowKey) => set((state) => {
        const win = state.windows[windowKey];
        if(!win) return;
        win.zIndex =state.nextZIndex++;
    })
})))

export default useWindowStore;