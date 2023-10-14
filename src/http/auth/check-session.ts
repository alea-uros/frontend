import { useMutation } from '@tanstack/react-query';
import {checkSession, register} from '../../services/auth/auth.service';
import { useUserStore } from '../../stores/user.store';

export const useCheckSessionMutation = () => {
    const setUser = useUserStore((state) => state.setUser);

    return useMutation(['check-session'], checkSession, {
        onSuccess: (data) => {
            setUser(data);
        },
    });
};
