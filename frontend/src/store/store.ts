/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

// check if the LoginResponse is suitable over here
type userStore = {
  user: Record<string, any> | null;
  setUser: (userDetails: any) => void;
  removeUser: () => void;
};

export const useUserStore = create<userStore>((set) => ({
  user: null,
  setUser: (userDetails) => {
    set({ user: userDetails });
  },
  removeUser: () => {
    set({ user: null });
  },
}));
