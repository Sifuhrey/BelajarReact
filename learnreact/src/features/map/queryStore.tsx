import { create } from "zustand";

type QueryStore = {
    query: string;
    setQuery: (query: string) => void;
};  

export const useQueryStore = create<QueryStore>((set) => ({
    query: "",
    setQuery: (query) => set({ query }),
}))