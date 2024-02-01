import { useNavigate } from "react-router-dom";
const Card = ({ name }) => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/coach/tournament");
  };
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl m-5">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">ABC Tournament</h2>

          <p>17.01.2024</p>
          <p>Venue?</p>
          <p>Reg. Deadline?</p>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary" onClick={handleButton}>
              {name}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
