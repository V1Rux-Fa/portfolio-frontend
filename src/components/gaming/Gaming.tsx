import "./Gaming.css";
import { useEffect, useState } from "react";
import Card from "../card/Card";
import gameService from "../../services/gameService";
import { Game } from "../../models/Game";

const Gaming = () => {
  const [totalGames, setTotalGames] = useState<Game[]>();
  const [totalHours, setTotalHours] = useState(0);

  useEffect(() => {
    const getGames = async () => {
      const games = await gameService.getGames();
      if (games) {
        setTotalGames(games);
        setTotalHours(games.reduce((sum, game) => sum + (game.hours || 0), 0));
      } else console.log("Error while fetching games");
    };
    getGames();
  }, []);
  return (
    <div className="row">
      <div className="col-9">{totalGames && <Card cards={totalGames} />}</div>
      <div className="col-3">
        <div className="card text-white bg-dark mb-3 total">
          <div className="card-header">Total hours</div>
          <div className="card-body">{totalHours}</div>
        </div>
      </div>
    </div>
  );
};

export default Gaming;
