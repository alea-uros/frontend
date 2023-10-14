import { useMutation } from '@tanstack/react-query';
import { register } from '../../services/auth/auth.service';
import { useUserStore } from '../../stores/user.store';

export const useRegisterMutation = () => {
  const setUser = useUserStore((state) => state.setUser);

  return useMutation(['register'], register, {
    onSuccess: (data) => {
      setUser(data);
    },
  });
};
