import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist((set) => ({
    id: null,
    name: "",
    email: null,
    profileImg: null,
    isAuthenticated: true,
    setId: (userId) => set(() => ({ id: userId })),
    setName: (userName) => set(() => ({ name: userName })),
    setEmail: (userEmail) => set(() => ({ email: userEmail })),
    setProfileImg: (userProfileImg) =>
      set(() => ({ profileImg: userProfileImg })),
    setIsAuthenticated: (boolean) => set(() => ({ isAuthenticated: boolean })),
  }))
);
