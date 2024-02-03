import Header from "./Header";
import LeftColumn from "./LeftColumn/LeftColumn";
import RightColumn from "./RightColumn/RightColumn";
import Footer from "../../Footer/Footer";
const AdminTour = () => {
  return (
    <>
      <Header />
      <div className="two-column-layout">
        <LeftColumn />
        <RightColumn />
      </div>
      <Footer />
    </>
  );
};
export default AdminTour;
