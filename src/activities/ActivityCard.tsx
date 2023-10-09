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
        // <div>
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Welcome To Harare City</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Welcome to [Company Name], your gateway to unforgettable travel experiences. We are a leading travel and tour company dedicated to creating exceptional journeys for adventurers, explorers, and wanderers like you.</p>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                        Get started
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"/></svg>
                    </a>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Speak to Sales
                    </a>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
                    <img src="https://lp-cms-production.imgix.net/2019-06/554369495_full.jpg" alt="mockup" className="rounded-lg" />
                </div>
            </div>
        </section>


        // <div className="px-4 bg-white py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 shadow-md hover:scale-105 hover:shadow-2xl cursor-pointer hover:duration-1000 max-h-96">
        //     <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
        //         <div className='w-2/3'>
        //                 <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-medium tracking-tight text-black  mb-6">
        //                     {activity.name}
        //                 </h2>
        //                 <p className="text-black text-base md:text-lg">{activity.description}</p>
        //                 <p>Deporte ID: {activity.sport_id}</p>
        //                 <p>Categoría: {activity.category}</p>
        //                 <p>Calificación: {activity.rating}</p>
        //                 <p>Etiquetas: {activity.tags.join(', ')}</p>
        //         </div>
        //         <div className='w-1/3'>
        //             <img alt="logo" className="hidden lg:block" src="https://cdn.dribbble.com/userupload/2338354/file/original-ae1855a82a249b8522e6d62be6351828.png?resize=752x" />
        //         </div>
        //     </div>
        // </div>
    );
}

export default ActivityCard;