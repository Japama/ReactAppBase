import React from 'react';

function Footer() {
  return (
  <footer className=" flex bg-gray-900 text-white p-4 h-20 fixed w-full bottom-0 z-10">
  <div className="container mx-auto flex justify-between items-center">
    <div>
      <p>&copy; 2023 Sports Guide</p>
    </div>
    <div>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="hover:text-gray-400">Inicio</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">Acerca de nosotros</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</footer>
  );
}

export default Footer;