import create from 'zustand';
import { UserType } from '../types/user/user.type';

interface UserStore extends UserType {
  setUser: (user: UserType) => void;
  reset: () => void;
}

const initialState: UserType = {
  email: '',
  id: '',
};

export const useUserStore = create<UserStore>((set) => ({
  ...initialState,
  setUser: (user: UserType) => set(user),
  reset: () => set(initialState),
}));
