import { useEffect, useState } from "react";
import Card from "../card/Card";
import animeService from "../../services/animeService";
import { AnimeCard } from "../../models/Anime";

const Anime = () => {
  const [countWatched, setCountWatched] = useState(0);

  const [animeCards, setAnimeCards] = useState<AnimeCard[]>();

  useEffect(() => {
    const fetchAnimes = async () => {
      const res = await animeService.getAnimes();

      if (res) {
        setAnimeCards(res);
        const watched = res.filter((anime) => anime.watched).length;
        setCountWatched(watched);
      } else console.log("Error on fetching");
    };

    fetchAnimes();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-9">{animeCards && <Card cards={animeCards} />}</div>
        <div className="col-3">
          <div className="card text-white bg-dark mb-3 total">
            <div className="card-header">Total Viewed</div>
            <div className="card-body">{countWatched}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Anime;
