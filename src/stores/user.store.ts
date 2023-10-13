import create from 'zustand';
import { UserType } from '../types/user/user.type';

interface UserStore {
  email: string;
  id: string;
  setUser: (user: UserType) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  email: '',
  id: '',
  setUser: (user: UserType) => set(user),
}));
