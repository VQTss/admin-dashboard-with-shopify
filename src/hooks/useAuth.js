
import { useStore } from '../store';

const useAuth = () => {
  const [auth, setAuth] = useStore.auth();

  const login = (user) => {
    setAuth((state) => {
      state.isAuthenticated = true;
      state.user = user;
    });
  };

  const logout = () => {
    setAuth((state) => {
      state.isAuthenticated = false;
      state.user = null;
    });
  };

  return { auth, login, logout };
};

export default useAuth;
