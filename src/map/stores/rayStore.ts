import { create } from 'zustand';

interface RayState {
  visibleBuildings: number[];
  setVisibleBuildings: (buildings: number[]) => void;
}

export const useRayStore = create<RayState>(set => ({
  visibleBuildings: [],
  setVisibleBuildings: buildings => {
    set({ visibleBuildings: Array.from(buildings) });
  },
}));
