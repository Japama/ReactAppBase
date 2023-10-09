import React from 'react';
import { useAuth } from '../AuthContext';
import ProjectsPage from '../projects/ProjectsPage';
import SignInSide from '../login/SignInSide';
import { Activity } from '../activities/Activity';
import ActivityCard from '../activities/ActivityCard';
import ActivitiesPage from '../activities/ActivitiesPage';

function Body() {
  const { state, login, logout } = useAuth();

  return (
    <div className='bg-gray-50 pt-20'>
      {state.isLoggedIn ? (
        <div>
          {/* <ProjectsPage /> */}
          <ActivitiesPage />
          {/* <ActivityCard activity={testActivity} onEdit={() => { }} /> */}
        </div>
      ) : (
        <SignInSide />
      )}
    </div>
  );
}

export default Body;