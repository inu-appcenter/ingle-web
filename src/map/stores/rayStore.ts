import { create } from 'zustand';

interface RayState {
  visibleBuildings: string[];
  setVisibleBuildings: (buildings: string[]) => void;
}

export const useRayStore = create<RayState>(set => ({
  visibleBuildings: [],
  setVisibleBuildings: buildings => set({ visibleBuildings: buildings }),
}));
