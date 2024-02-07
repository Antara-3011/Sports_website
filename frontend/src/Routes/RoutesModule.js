import { Routes, Route } from "react-router-dom";
import Login from "../Components/Login/Login.jsx";
import Admin from "../Components/Admin/Admin.jsx";
import Coach from "../Components/Coach/Coach.jsx";
import Athlete from "../Components/Athlete/Athlete.jsx";
import Home from "../Components/home.jsx";
import Signup from "../Components/SignUp/Signup.jsx";
import Profile from "../Components/Coach/Profile.jsx";
import Tournament from "../Components/Coach/Tournament/Tournament.jsx";
import Tform from "../Components/Coach/Tournament/Register/Tform.jsx";
import TournamentForm from "../Components/Admin/Tournament/TournamentCreateform.jsx";
import AdminTour from "../Components/Admin/Admin_tournamet/AdminTour.jsx";
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
        <Route path="/admin/tournament" element={<AdminTour />} />
        <Route path="/admin/tournament/form" element={<TournamentForm />} />
        <Route path="/coach/tournament/register" element={<Tform />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </>
  );
};
export default RoutesModule;
