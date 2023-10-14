import { useMutation } from '@tanstack/react-query';
import { logout } from '../../services/auth/auth.service';
import { useUserStore } from '../../stores/user.store';
import { useBookStore } from '../../stores/books.store';

export const useLogoutMutation = () => {
  const resetUser = useUserStore((state) => state.reset);
  const resetBooks = useBookStore((state) => state.reset);

  return useMutation(['logout'], logout, {
    onSuccess: (data) => {
      resetUser();
      resetBooks();
    },
  });
};
