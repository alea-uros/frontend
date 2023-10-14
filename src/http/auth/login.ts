import { useMutation } from '@tanstack/react-query';
import { login } from '../../services/auth/auth.service';
import { useUserStore } from '../../stores/user.store';

export const useLoginMutation = () => {
  const setUser = useUserStore((state) => state.setUser);

  return useMutation(['login'], login, {
    onSuccess: (data) => {
      setUser(data);
    },
  });
};
