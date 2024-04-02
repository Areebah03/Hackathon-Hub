// import { Button } from '@material-tailwind/react';
import React, { useEffect } from "react";
import AdminEvaluators from "./pages/AdminEvaluators";
import AdminHackathons from "./pages/AdminHackathons";
// import AdminDashboard from './components/AdminDashboard';
import Results from "./pages/Results";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Hackathons from "./pages/Hackathons";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchHackathons,
    selectHackathons,
} from "./features/hackathon/hackathonSlice";
import {
    reattemptLogin,
    selectUserDetails,
    selectUserId,
} from "./features/user/userSlice";
import BaseLayout from "./components/BaseLayout";
import TeamDetails from "./pages/TeamDetails";
import PanelistShortlist from "./pages/PanelistShortlist";
import JudgeReview from "./pages/JudgeReview";
import {
    fetchJudgeTeamsByHackathonId,
    fetchPanelistTeamsByHackathonId,
    fetchTeamDetails,
} from "./features/team/teamSlice";
import { HACKATHONS, USER } from "./constants";
import { Slide, ToastContainer, toast } from "react-toastify";
import { fetchEvaluators } from "./features/evaluator/evaluatorSlice";
import Cookies from "js-cookie";
import HackathonRequests from "./pages/HackathonRequests";
// import Cookies from "js-cookie";
function App() {
    const dispatch = useDispatch();

    //change to this for redux integration
    const hackathons = useSelector(selectHackathons);
    // HACKATHONS;
    // useSelector((state) => state.hackathon.hackathons.data);
    const userData = useSelector(selectUserDetails);
    
    // const token = Cookies.get("token");
    useEffect(() => {
        dispatch(fetchHackathons());
        //just a work around until we have a proper userdetails fetch api

        //

        if (userData?.role === "admin") {
            console.log("fetching evaluators")
            dispatch(fetchEvaluators());
        }
        // if (userData?.role === "participant") {
        //     dispatch(fetchTeamDetails(userId));
        // }
        if (userData?.role === "judge") {
            dispatch(
                fetchJudgeTeamsByHackathonId({
                    hackathonId: userData?.assignedHackathon,
                })
            );
        }
        if (userData?.role === "panelist") {
            console.log("fetching teams");
            dispatch(
                fetchPanelistTeamsByHackathonId({
                    hackathonId: userData?.assignedHackathon,
                    panelistid: userId,
                })
            );
        }
    }, [userData]);

    useEffect(() => {
        const userId = Cookies.get("userId");
        const token = Cookies.get("token");
        if (userId && token) {
            dispatch(reattemptLogin({userId}));
        }
    }, []);

    const userId = useSelector(selectUserId);

    // const userId = USER?.userId
    // const data = useSelector((state) => state.user.login.data);
    // const userId = data ? data.data.userId : null;
    // useEffect(() => {
    // }, []);

    // const [reviewedIdeas, setReviewedIdeas] = useState([]);

    return (
        <div className="App">
            <ToastContainer
                position="top-left"
                autoClose={3800}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
                // className="z-999"
            />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="hackathons" element={<Hackathons />} />
                    <Route
                        path="admin/hackathons"
                        element={<AdminHackathons />}
                    />
                    <Route
                        path="admin/evaluators"
                        element={<AdminEvaluators />}
                    />
                    <Route path="results/:hackathonId" element={<Results />} />
                    <Route path="teamdetails" element={<TeamDetails />} />
                    <Route
                        path="panelist/shortlist"
                        element={<PanelistShortlist />}
                    />
                    <Route
                        path="judge/review"
                        element={
                            <JudgeReview
                            // reviewedIdeas={reviewedIdeas}
                            // setReviewedIdeas={setReviewedIdeas}
                            />
                        }
                    />
                    <Route
                            path="trial"
                            element={<HackathonRequests />}
                        />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
