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
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 fixed w-full z-10 top-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
            <span className="text-2xl pl-2"><i className="em em-grinning"></i> El manual de los deportes</span>
          </a>
        </div>

        <div className="block lg:hidden">
          <button id="nav-toggle"
                  className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>

        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-0" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                 href="#">link</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                 href="#">link</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                 href="#">link</a>
            </li>
          </ul>
        </div>
      </nav>

  // <header className="flex h-20 bg-blue-500 p-4 fixed w-full top-0 z-10">
  //   <div className="container mx-auto flex justify-between items-center">
  //     <h1 className="text-white text-2xl font-bold">Sports Guide</h1>
  //     <h2 className="text-white font-bold">Tu guía del entrenador</h2>
  //     {state.isLoggedIn ? (
  //         <div className=' flex  items-center'>
  //           <h2 className="flex text-white font-bold">Bienvenido {state.username}</h2>
  //           <button type="button"
  //                   className="flex border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
  //                   onClick={() => {
  //                     handleClick();
  //                   }}>
  //             Logout
  //           </button>
  //         </div>
  //     ) : (
  //         <button type="button"
  //                 className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
  //           Login
  //         </button>
  //     )}
  //
  //   </div>
  // </header>
)
  ;
}

export default Header;

