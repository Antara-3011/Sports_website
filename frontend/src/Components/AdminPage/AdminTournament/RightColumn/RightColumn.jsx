import "./right.css";
import Event from "../LeftColumn/Event";
const RightColumn = () => {
  const onButtonClick = () => {
    const pdfUrl = "Sample.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <div className="right-column ">
        <div className="info-coach">
          <p className="font-bold font-serif text-xl">General Information</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a
            ultricies felis. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Praesent pellentesque dolor sed ipsum convallis, id
            convallis risus finibus. Duis eget mauris eu nisi blandit ornare nec
            et elit. Vivamus ornare posuere odio vestibulum gravida. Donec eros.
          </p>
        </div>
        <div>
          <button className="btn-dwld" onClick={onButtonClick}>
            Download Tournament_Guidelines
          </button>
        </div>
        <div className="flex">
          <Event />
          <Event />
          <Event />
        </div>
        <div className="venue">
          <p className="font-bold text-xl">Venue</p>
          <p>map</p>
        </div>
      </div>
    </>
  );
};
export default RightColumn;
