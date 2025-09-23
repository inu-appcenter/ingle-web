import { create } from 'zustand';

interface RayState {
  visibleBuildings: string[];
  resetVisibleBuildings: () => void;
  setVisibleBuildings: (buildings: string[]) => void;
}

export const useRayStore = create<RayState>(set => ({
  visibleBuildings: [],
  resetVisibleBuildings: () => set({ visibleBuildings: [] }),
  setVisibleBuildings: buildings => set({ visibleBuildings: buildings }),
}));
