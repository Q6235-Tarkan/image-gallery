import data from "../helper/data";
import Card from "react-bootstrap/Card";

const Picture = () => {
  return (
    <div className="container">
      <div className="row">
        {data.map((e) => (
          <div className="cards col-xl-3 col-lg-4 col-md-6 mb-5">
            <Card>
              <Card.Img className="card" variant="top" src={e.src.large} />
              <h4>{e.photographer}</h4>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Picture;
