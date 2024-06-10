import { create } from "zustand";

const useActiveModal = create((set) => ({
  activeModal: "",
  setActiveModal: (modal) => set((state) => ({ activeModal: modal })),
}));

export { useActiveModal };
