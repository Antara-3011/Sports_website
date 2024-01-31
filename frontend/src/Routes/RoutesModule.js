import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login/Login.jsx";
import Admin from "../Components/Admin/Admin.jsx";
import Coach from "../Components/Coach/Coach.jsx";
import Athlete from "../Components/Athlete/Athlete.jsx";
import Home from "../Components/home.jsx";
import Signup from "../Components/SignUp/Signup.jsx";
import Profile from "../Components/Coach/Profile.jsx";
import Tournament from "../Components/Coach/Tournament/Tournament.jsx";
import TournamentForm from "../Components/Coach/Tournament/TournamentCreateform.jsx";
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
        <Route path="/coach/tournament" element={<Tournament />} />
        <Route path="/coach/tournamentform" element={<TournamentForm />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </>
  );
};
export default RoutesModule;
