import React from 'react';
import { useAuth } from '../AuthContext';
import ProjectsPage from '../projects/ProjectsPage';
import SignInSide from '../login/SignInSide';

function Body() {
  const { state, login, logout } = useAuth();

  return (
      <div className=''>
        {state.isLoggedIn ? (
           <ProjectsPage /> 
          ) : (
            <SignInSide />
          )}
      </div>
    );
}

export default Body;