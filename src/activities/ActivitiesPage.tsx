import React, { useState } from 'react';
import { MOCK_ACTIVITIES } from './MockActivities';
import ActivityList from './ActivityList';
import { Activity } from './Activity';
import ActivityListGrid4 from './ActivityListGrid4';

function ActivitiesPage() {
  const [Activities, setActivities] = useState<Activity[]>(MOCK_ACTIVITIES)
  const saveActivity = (Activity: Activity) => {
    let updatedActivities = Activities.map((a: Activity) => {
      return a._id === Activity._id ? Activity : a;
    });
    setActivities(updatedActivities);
  };
  return (
    <div className="items-center justify-center bg-gray-50">
      <div className='p-8 pt-auto text-3xl font-semibold text-gray-800'>
      <h1>Actividades</h1>
      </div>
      <ActivityList onSave={saveActivity} activities={Activities} />
      {/*<ActivityListGrid4 onSave={saveActivity} activities={Activities} />*/}
    </div>
  );
}

export default ActivitiesPage;
