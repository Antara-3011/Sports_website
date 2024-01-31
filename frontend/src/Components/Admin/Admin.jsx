import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
const handleTournament = () => {
  navigate("/coach/tournamentform");
};
const Admin = () => {
  return (
    <>
      <p className="font-bold font-serif text-5xl p-5">
        <h1>Hey!!! XYZ Admin </h1>
      </p>
      <div className="flex justify-center items-center">
        <p className="text-3xl bg-gray-200 p-6 rounded-xl">
          UPCOMING EVENTS <span className="text-sm">see all</span>
        </p>
      </div>
      <div className="flex justify-between">
        <Card name={"More details"} />
        <Card name={"More details"} />
        <Card name={"More details"} />
      </div>
      <div className="flex justify-center items-center">
        <button
          className="text-3xl bg-gray-200 p-6 rounded-xl"
          onClick={handleTournament}
        >
          CREATE TOUNAMENT
        </button>
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};
export default Admin;
