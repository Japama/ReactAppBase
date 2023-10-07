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
        <div className='Header'>
          <Header />
        </div>
        <div className='Body '>
        <Body />
        </div>
        <div className='Footer'>
          <Footer />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
