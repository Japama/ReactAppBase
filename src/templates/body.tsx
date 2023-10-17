import React from 'react';
import {useAuth} from '../AuthContext';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignInSide from "../login/SignInSide";
import ProjectsPage from "../projects/ProjectsPage";
import ActivitiesPage from '../activities/ActivitiesPage';
import Footer from "./Footer";

function Body() {
    const {state, login, logout} = useAuth();

    return (
        <div className="min-w-full pt-20">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInSide/>}/>
                    {/*<Route index element={<ProjectsPage/>}/>*/}
                    <Route path="login" element={<SignInSide/>}/>
                    <Route path="projects" element={<ProjectsPage/>}/>
                    <Route path="activities" element={<ActivitiesPage/>}/>
                    {/*<Route path="contact" element={<Contact/>}/>*/}
                    {/*<Route path="*" element={<NoPage/>}/>*/}
                    {/*</Route>*/}
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>

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