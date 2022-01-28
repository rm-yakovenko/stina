import { useContext } from 'react';

import AuthProvider from './Provider';
import { AuthContext } from './Context';

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}

export default useAuth;

export { AuthProvider };
