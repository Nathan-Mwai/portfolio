import {create} from "zustand";
import {immer} from "zustand/middleware/immer";
import {locations} from "@/constants";
import type { FolderNode } from "@/type";

const DEFAULT_LOCATION = locations.work

type LocationState = {
    activeLocation: FolderNode | null;
    setActiveLocation: (location: FolderNode | null) => void;
    resetActiveLocation: () => void;
};


const useLocationStore = create<LocationState>()(immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation : (location = null) => set((state) => {
        state.activeLocation = location;
    }),

    resetActiveLocation : () => set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
    })
})))

export default useLocationStore;