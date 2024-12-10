import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create(persist());