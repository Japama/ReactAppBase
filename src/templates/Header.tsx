import React from 'react';
import { useAuth } from '../AuthContext';
import SignInSide from '../login/SignInSide';

function Header() {
  const { state, login, logout } = useAuth();

  const logoutMethod = async (): Promise<void> => {

    try {
      const response = await logout(); // Llama a la función de inicio de sesión del contexto

      // Realiza cualquier lógica adicional después del inicio de sesión exitoso
    } catch (error) {
      // Lógica para manejar errores
    }
  };

  const handleClick = () => {
    logoutMethod();
  };

  return (
    <header className="flex h-20 bg-blue-500 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Sports Guide</h1>
        <h2 className="text-white font-bold">Tu guía del entrenador</h2>
        {state.isLoggedIn ? (
          <div className=' flex  items-center'>
            <h2 className="flex text-white font-bold">Bienvenido {state.username}</h2>
            <button type="button"
              className="flex border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
              onClick={() => { handleClick(); }}>
              Logout
            </button>
          </div>
        ) : (
          <button type="button"
            className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
            Login
          </button>
        )}

      </div>
    </header>
  );
}

export default Header;

