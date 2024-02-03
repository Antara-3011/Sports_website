import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

const Admin = () => {
  const navigate = useNavigate();
  const handleTournament = () => {
    navigate("/admin/tournament/form");
  };
  return (
    <>
      <nav className="bg-indigo-700 shadow-lg">
        <div className="container mx-auto">
          <div className="sm:flex">
            <a href="#" className="text-gray-900 text-3xl font-bold p-3">
              XYZ Company
            </a>
            <a href="#" className=""></a>
          </div>
        </div>
      </nav>
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
