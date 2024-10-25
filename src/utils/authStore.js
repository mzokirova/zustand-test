import { create } from "zustand";

const useAuthStore = create((set) => ({
    user: null,
    login: (userData) => {
      localStorage.setItem('user', JSON.stringify(userData));
      set({ user: userData });
    },
    logout: () => {
      localStorage.removeItem('user');
      set({ user: null });
    },
    register: (userData) => {
      localStorage.setItem('user', JSON.stringify(userData));
      set({ user: userData });
    },
    loadUser: () => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        set({ user });
      }
    }
  }));
  export default useAuthStore;