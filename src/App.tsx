import React, { useState } from 'react';
import './App.css';
import { AuthProvider, useAuth } from './AuthContext';
import ProjectsPage from './projects/ProjectsPage';
import SignInSide from './login/SignInSide';
import Header from './templates/Header';
import Footer from './templates/Footer';
import Body from './templates/body';

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col h-screen App">
        <div className='Header fixed w-full top-0 z-10'>
          <Header />
        </div>
        <div className='Body flex-1 bg-gray-300 z-0'>
        <Body />
        </div>
        <div className='Footer fixed w-full bottom-0 z-10'>
          <Footer />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
