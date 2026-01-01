// store/index.ts

import { create } from "zustand"

interface MacBookStore {
  color: string
  setColor: (color: string) => void

  scale: number
  setScale: (scale: number) => void

  texture: string
  setTexture: (texture: string) => void

  reset: () => void
}

const useMacBookStore = create<MacBookStore>((set) => ({
  color: "#adb5bd",
  setColor: (color: string) => set({ color }),

  scale: 0.1,
  setScale: (scale: number) => set({ scale }),

  texture: "/videos/feature-1.mp4",
  setTexture: (texture: string) => set({ texture }),

  reset: () =>
    set({
      color: "#adb5bd",
      scale: 0.1,
      texture: "/videos/feature-1.mp4",
    }),
}))

export default useMacBookStore