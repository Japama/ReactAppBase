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
      <div className="flex flex-col h-screen App bg-gray-50">
        <div className='Header'>
          <Header />
        </div>
        <div className='Body min-w-min'>
          <Body />
        </div>
        {/*<div className='Footer w-screen'>*/}
        {/*  <Footer />*/}
        {/*</div>*/}
      </div>
    </AuthProvider>
  );
}

export default App;
