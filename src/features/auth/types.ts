import { User } from '../../types';

export interface AuthStore {
  isAuth: boolean;
  loading: 'idle' | 'pending';
  error: string | null;
  user: User | null;
}
