import Header from "./Header";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

const Coach = () => {
  const announcements = [
    "Announcement 1",
    "Announcement 2",
    "Announcement 3",
    "Announcement 4",
    "Announcement 5",
  ];
  return (
    <>
      <div>
        <Header />
        <p className="font-bold font-serif text-5xl p-5">
          Welcome, <span>...</span>
        </p>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-3xl bg-gray-200 p-6 rounded-xl">
          UPCOMING TOURNAMENTS <span className="text-sm">see all</span>
        </p>
      </div>
      <div className="flex justify-between">
        <Card name={"Click here to Register"} />
        <Card name={"Click here to Register"} />
        <Card name={"Click here to Register"} />
      </div>
      <div className="flex justify-center items-center">
        <p className="text-3xl bg-gray-200 p-6 rounded-xl">
          UPDATES <span className="text-sm">see all</span>
        </p>
      </div>
      <div className="text-center mt-3 mb-3">
        {announcements.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};
export default Coach;
