import React, { useState } from 'react';
import { MOCK_ACTIVITIES } from './MockActivities';
import ActivityList from './ActivityList';
import { Activity } from './Activity';

function ActivitiesPage() {
  const [Activities, setActivities] = useState<Activity[]>(MOCK_ACTIVITIES)
  const saveActivity = (Activity: Activity) => {
    let updatedActivities = Activities.map((a: Activity) => {
      return a._id === Activity._id ? Activity : a;
    });
    setActivities(updatedActivities);
  };
  return (
    <div className="items-center justify-center bg-gray-50 mt-20 pb-20">
      <h1>Activitys</h1>
      <ActivityList onSave={saveActivity} activities={Activities} />
    </div>
  );
}

export default ActivitiesPage;
