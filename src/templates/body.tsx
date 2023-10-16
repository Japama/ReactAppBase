import React from 'react';
import {useAuth} from '../AuthContext';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignInSide from "../login/SignInSide";
import ProjectsPage from "../projects/ProjectsPage";

function Body() {
    const {state, login, logout} = useAuth();

    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<SignInSide/>}>*/}
                    {/*<Route index element={<ProjectsPage/>}/>*/}
                    <Route path="login" element={<SignInSide/>}/>
                    <Route path="projects" element={<ProjectsPage/>}/>
                    {/*<Route path="contact" element={<Contact/>}/>*/}
                    {/*<Route path="*" element={<NoPage/>}/>*/}
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>

        // <div className='bg-gray-50 pt-20'>
        //   {state.isLoggedIn ? (
        //     <div>
        //       {/* <ProjectsPage /> */}
        //       <ActivitiesPage />
        //       {/* <ActivityCard activity={testActivity} onEdit={() => { }} /> */}
        //     </div>
        //   ) : (
        //     <SignInSide />
        //   )}
        // </div>
    );
}

export default Body;