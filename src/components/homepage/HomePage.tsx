import { useNavigate } from "react-router";

import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="row">
        <div className="col-5">
          <div className="card text-white bg-dark">
            <img
              className="card-img-top"
              src="https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515462/ak47_ue7qrd.jpg"
              alt="ak47"
            />
            <div className="card-body">
              <h5 className="card-title">Ready for a game?</h5>
              <p className="card-text">Let's see what game we should play!</p>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => {
                  navigate("/Gaming");
                }}
              >
                Gaming
              </button>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="card text-white bg-dark">
            <img
              className="card-img-top"
              src={
                "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515470/kaneki_crcgmp.jpg"
              }
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Makete Kate</h5>
              <p className="card-text">Let's see what anime we'll watch!</p>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => {
                  navigate("/anime");
                }}
              >
                Anime
              </button>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="card text-white bg-dark">
            <img
              className="card-img-top square"
              src={
                "https://res.cloudinary.com/dhrezgtmg/image/upload/v1762515462/bmth_uh7kik.jpg"
              }
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Want aura farming?</h5>
              <p className="card-text">Check aura songs!</p>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => {
                  navigate("/music");
                }}
              >
                Music
              </button>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="card text-white bg-dark">
            <img
              className="card-img-top"
              src={
                "https://res.cloudinary.com/dhrezgtmg/image/upload/pizza_auow7e.jpg"
              }
              alt="pizza"
            />
            <div className="card-body">
              <h5 className="card-title">Ready for a meal?</h5>
              <p className="card-text">Should we deliver a burguer?</p>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => {
                  navigate("/food");
                }}
              >
                Food
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
