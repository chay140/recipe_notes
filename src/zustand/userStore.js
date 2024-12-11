import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist((set) => ({
    id: null,
    name: null,
    email: null,
    profileImg:
      'https://item.kakaocdn.net/do/991efe6c367092ef02cb0d96373402377154249a3890514a43687a85e6b6cc82',
    isAuthenticated: true,
    setId: (userId) => set(() => ({ id: userId })),
    setName: (userName) => set(() => ({ name: userName })),
    setEmail: (userEmail) => set(() => ({ email: userEmail })),
    setProfileImg: (userProfileImg) =>
      set(() => ({ profileImg: userProfileImg })),
    setIsAuthenticated: (boolean) => set(() => ({ isAuthenticated: boolean })),
  }))
);
