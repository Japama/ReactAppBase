import { Activity } from './Activity';
import ActivityCard from './ActivityCard';
import React, { useState } from 'react';

interface ActivityListProps {
    activities: Activity[];
    onSave: (activity: Activity) => void;
}

function ActivityList({ activities, onSave }: ActivityListProps) {
    const [activityBeingEdited, setActivityBeingEdited] = useState({});
    const handleEdit = (activity: Activity) => {
        setActivityBeingEdited(activity);
    }
    const cancelEditing = () => {
        setActivityBeingEdited({});
    };
    const items = activities.map(activity => (
        <div key={activity._id} className="cols-sm">
            {/* {activity === activityBeingEdited ? (
                <ActivityForm
                    activity={activity}
                    onSave={onSave}
                    onCancel={cancelEditing}
                />
            ) : (
                <ActivityCard activity={activity} onEdit={handleEdit} />
            )} */}
        </div>
    ));
    return <div className="row">{items}</div>;
}

export default ActivityList;