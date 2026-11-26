import { create } from "zustand";
import type { Location } from "./Map";
import type { SearchResult } from "./SearchResult";

type MapStore = {
    location: Location;
    results: SearchResult[];
    setLocation: (location: Location) => void;
    setResults: (results: SearchResult[]) => void;
    query: string;
    setQuery: (query: string) => void;
};

export const useMapStore = create<MapStore>((set) => ({
    location: {
        lat: -6.9214015,
        lon: 107.6111087,
        name: "Bandung",
    },
    results: [],
    setLocation: (location) => set({ location }),
    setResults: (results) => set({ results }),
    query: "",
    setQuery: (query) => set({ query }),
}));