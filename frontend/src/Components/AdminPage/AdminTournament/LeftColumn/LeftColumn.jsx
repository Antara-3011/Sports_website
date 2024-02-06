import "./left.css";
import { Link } from "react-router-dom";
const LeftColumn = () => {
  return (
    <>
      <div className="left-column-admin flex flex-col justify-around">
        <div>
          <button className="btn-left-admin">
            <Link to={"/coach/tournament/register"}>Register Here</Link>
          </button>
          <button className="btn-left-admin">View Participant List</button>
        </div>
        <div className="details-admin">
          <p className="font-bold font-serif text-xl">Details</p>
          <p>hello1</p>
          <p>hello1</p>
          <p>hello1</p>
          <p>hello1</p>
        </div>
        <div className="details-admin">
          <p className="font-bold font-serif text-xl">Hosted by: </p>
          <p>Sthitapragyan Rout</p>
          <p>Martial Arts Organisation</p>
        </div>
      </div>
    </>
  );
};
export default LeftColumn;
