import { useEffect, useState } from "react";
import Card from "../card/Card";
import { MusicCard } from "../../models/Music";
import musicService from "../../services/musicService";

const Music = () => {
  const [musics, setMusics] = useState<MusicCard[]>();

  useEffect(() => {
    const getMusics = async () => {
      const res = await musicService.getMusics();
      if (res) {
        setMusics(res);
      }
    };
    getMusics();
  }, []);
  return (
    <div className="row">
      <div className="col-9">{musics && <Card cards={musics} />}</div>
      <div className="col-3">
        <div className="row">
          <div className="card text-white bg-dark mb-3 total">
            <div className="card-header">Favorite song</div>
            <div className="card-body">Dark Aria</div>
          </div>
        </div>
        <div className="row">
          <div className="card text-white bg-dark mb-3 total">
            <div className="card-header">Most used app</div>
            <div className="card-body">Spotify</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
