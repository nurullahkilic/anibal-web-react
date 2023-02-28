import { create } from "zustand";

export const useModal = create((set) => ({
  isStartProjectClose: true,
  isMenuClose: true,
  applyModal: {
    isClose: true,
    type: null,
  },
  toggleStartProject: () =>
    set((state) => ({ isStartProjectClose: !state.isStartProjectClose })),
  toggleApplyModal: (slug) =>
    set((state) => ({
      applyModal: { isClose: !state.applyModal, type: slug },
    })),
  toggleMenu: () => set((state) => ({ isMenuClose: !state.isMenuClose })),
}));
