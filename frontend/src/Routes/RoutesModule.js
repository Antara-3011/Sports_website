import { Routes, Route, Form } from "react-router-dom";
import Login from "../Components/Login/Login.jsx";
import Admin from "../Components/AdminPage/Admin.jsx";
import Coach from "../Components/Coach/Coach.jsx";
import Athlete from "../Components/Athlete/Athlete.jsx";
import Home from "../Components/home.jsx";
import Signup from "../Components/SignUp/Signup.jsx";
import Profile from "../Components/Coach/Profile.jsx";
import CoachTour from "../Components/Coach/CoachTournament/CoachTour.jsx";
import Tform from "../Components/Coach/CoachTournament/Register/Tform.jsx";
import TournamentForm from "../Components/AdminPage/AdminTournament/TournamentCreateform.jsx";
import AthleteForm from "../Components/Athlete/AthleteForm.jsx";
import AdminTour from "../Components/AdminPage/AdminTournament/AdminTour.jsx";
const RoutesModule = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/admin" element={<Admin />} />
        <Route path="/coach" element={<Coach />} />
        <Route path="/athlete" element={<Athlete />} />
        <Route path="/login" element={<Login />} />
        <Route path="/coach-profile" element={<Profile />} />
        <Route path="/coach/tournament" element={<CoachTour />} />
        <Route path="/admin/tournament" element={<AdminTour />} />
        <Route path="/admin/tournament/form" element={<TournamentForm />} />
        <Route path="/coach/tournament/register" element={<Tform />} />
        <Route path="/athlete/form" element={<AthleteForm />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </>
  );
};
export default RoutesModule;
