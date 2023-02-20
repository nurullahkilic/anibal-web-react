import { create } from "zustand";

export const useModal = create(set => ({
  isStartProjectOpen: false,
  isMenuClose: true,
  toggleStartProject: () => set((state)=>({isStartProjectOpen: !state.isStartProjectOpen})),
  toggleMenu: () => set((state)=>({isMenuClose: !state.isMenuClose})),
}));