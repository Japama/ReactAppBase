import React from 'react';
import { useAuth } from '../AuthContext';

function Header() {
  const { state, login, logout } = useAuth();
  return (
    <header className="flex h-20 bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Sports Guide</h1>
        <h2 className="text-white font-bold">Tu guía del entrenador</h2>
      </div>
    </header>
  );
}

export default Header;