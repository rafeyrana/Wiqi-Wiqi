import axiosInstance from "@/lib/axios";
import { Collection, Track } from "@/types";
import { create } from "zustand";
interface MusicStore {
  tracks: Track[];
  collections: Collection[];
  isLoading: boolean;
  error: string | null;
  fetchCollections: () => Promise<void>;
}

export const useMusicStore = create<MusicStore>((set) => ({
 collections: [],
 tracks:[],
  isLoading: false,
  error: null,
  fetchCollections: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get("/collections");
      set({ collections: Array.isArray(response.data.collections) ? response.data.collections : [] });
    } catch (error: unknown) {
      set({ error: error instanceof Error ? error.message : String(error), isLoading: false });
    } finally {
      set({ isLoading: false });
    }
  },
}));
