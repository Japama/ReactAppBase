



import { Activity } from './Activity';

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
}

interface ActivityCardProps {
    activity: Activity;
    onEdit: (activity: Activity) => void;
}

function ActivityCard(props: ActivityCardProps) {
    const { activity, onEdit } = props;
    const handleEditClick = (activityBeingEdited: Activity) => {
        onEdit(activityBeingEdited);
    };
    return (
        <div>
            <div className="px-4 bg-white mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                    <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl mb-6">
                            <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-black sm:text-4xl sm:leading-none max-w-lg mb-6">
                                {activity.name}
                            </h2>
                            <p className="text-black text-base md:text-lg">{activity.description}</p>
                            <p>Deporte ID: {activity.sport_id}</p>
                            <p>Categoría: {activity.category}</p>
                            <p>Calificación: {activity.rating}</p>
                            <p>Etiquetas: {activity.tags.join(', ')}</p>
                        </div>
                        <div className='space-x-4'>
                            <button className="text-neutral-800  text-lg font-medium inline-flex items-center">
                                <span> get insights →</span>
                            </button>
                        </div>
                    </div>
                    <img alt="logo" width="420" height="120" src="https://cdn.dribbble.com/userupload/2338354/file/original-ae1855a82a249b8522e6d62be6351828.png?resize=752x" />
                </div>
            </div>

            <div className="px-4 bg-white mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
                <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
                    <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                        <div className="max-w-xl mb-6">

                            <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-black sm:text-4xl sm:leading-none max-w-lg mb-6">
                                {activity.name}
                            </h2>
                            <p className="text-black text-base md:text-lg">{activity.description}</p>
                        </div>
                        <div className='space-x-4'>
                            <button className="text-neutral-800  text-lg font-medium inline-flex items-center">
                                <span> get insights →</span>
                            </button>
                        </div>
                    </div>
                    <img alt="logo" width="420" height="120" src="https://cdn.dribbble.com/userupload/2338354/file/original-ae1855a82a249b8522e6d62be6351828.png?resize=752x" />
                </div>
            </div>

        </div>
    );
}

export default ActivityCard;