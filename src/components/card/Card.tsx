import { useState } from "react";
import Pagination from "../pagination/Pagination";
import "./Card.css";

export interface Cards {
  cards: {
    name: string;
    image: string;
    hours?: number;
    mainCharacter?: string;
    origin?: string;
    type?: string;
    band?: string;
  }[];
}

const Card = ({ cards }: Cards) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(cards.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const currentItems = cards.slice(start, start + itemsPerPage);

  return (
    <>
      <div className="row">
        {currentItems.map((card) => (
          <div className="col-4">
            <div className="card text-white bg-dark">
              <img
                className="card-img-top"
                src={card.image}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {card.name}
                  {card.hours && (
                    <div className="card-text">{card.hours} hours</div>
                  )}
                  {card.origin && <p className="card-text">{card.origin}</p>}
                  {card.mainCharacter && (
                    <p className="card-text">{card.mainCharacter}</p>
                  )}
                  {card.band && <p className="card-text">{card.band}</p>}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default Card;
