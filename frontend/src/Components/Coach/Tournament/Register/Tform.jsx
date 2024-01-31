import Search from "../../../../Shared/Search";
import Footer from "../../../Footer/Footer";
import Header from "../Header";
import Newform from "./Newform";
import "./form.css";

const Tform = () => {
  const handleSearch = (query) => {
    console.log(`Searching for: ${query}`);
  };
  return (
    <>
      <Header />
      <div className="tform-body">
        <p className="font-bold text-2xl">New Registration!!!</p>

        <div className="p-4 form-reg">
          <Newform />
        </div>
        <div className="divider">OR</div>

        <div className="flex flex-col justify-center items-center mt-5 mb-5">
          <div>
            <p className="text-xl ml-5">Candidate ID: </p>
            <Search onSearch={handleSearch} />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="p-3 m-2 bg-green-500 rounded-xl text-white"
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Tform;
