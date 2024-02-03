import { Link } from "react-router-dom";

const Event = () => {
  return (
    <>
      <div className="bg-gray-300 event-card">
        <p className="font-bold text-lg">Event No.</p>
        <Link to={"/categories"} className="text-blue-800">
          Categories
        </Link>
      </div>
    </>
  );
};
export default Event;
