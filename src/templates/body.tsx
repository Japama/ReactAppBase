import React from 'react';
import { useAuth } from '../AuthContext';
import ProjectsPage from '../projects/ProjectsPage';
import SignInSide from '../login/SignInSide';
import { Activity } from '../activities/Activity';
import ActivityCard from '../activities/ActivityCard';

function Body() {
  const { state, login, logout } = useAuth();

  // Crea una actividad de prueba
  const testActivity = new Activity({
    _id: '1',
    name: 'Actividad de prueba',
    sport_id: 123,
    category: 'Categoría de prueba',
    description: 'Esta es una descripción de prueba',
    multimedia_links: ['link1', 'link2'],
    rating: 4.5,
    tags: ['tag1', 'tag2'],
    user_id: 456,
  });

  return (
    <div className=''>
      {state.isLoggedIn ? (
        <div>
          <ProjectsPage />
          <ActivityCard activity={testActivity} onEdit={() => { }} />



        </div>
      ) : (
        <SignInSide />
      )}
    </div>
  );
}

export default Body;