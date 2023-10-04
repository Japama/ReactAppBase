// AuthContext.tsx
import React, { createContext, useContext, useReducer, ReactNode  } from 'react';

// Definir las acciones relacionadas con la autenticación
type AuthAction = { type: 'LOGIN' } | { type: 'LOGOUT' };

// Reducer para manejar el estado de autenticación
interface AuthState {
  isLoggedIn: boolean;
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
};

// Estado inicial
const initialState: AuthState = { isLoggedIn: false };

// Crear el contexto de autenticación
const AuthContext = createContext<{
  state: AuthState;
  login: () => void;
  logout: () => void;
} | undefined>(undefined);

// Proveedor de autenticación
// Proveedor de autenticación
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
  
    const login = () => {
      dispatch({ type: 'LOGIN' });
    };
  
    const logout = () => {
      dispatch({ type: 'LOGOUT' });
    };
  
    return (
      <AuthContext.Provider value={{ state, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };

// Hook personalizado para acceder al contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};
