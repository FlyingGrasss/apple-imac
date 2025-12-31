import { create } from "zustand"

const useMacBookStore = create((set) => ({
  color: "#adb5bd",
  setColor: (color: string) => set({ color }),

  scale: 0.1,
  setScale: (scale: number) => set({ scale }),

  reset: () => set({ color: "adb5bd", scale: 0.1})

}))

export default useMacBookStore