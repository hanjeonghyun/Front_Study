import { create } from "zustand";

export const useSearchTextStore = create((set) => ({
  searchText: "",
  setSearchText: (text) => set((state) => ({ searchText: text })),
}));
