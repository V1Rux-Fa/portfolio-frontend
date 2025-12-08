import axios from "axios";
import { type Anime, AnimeCard } from "../models/Anime";

export const animeService = {
  async getAnimes(): Promise<AnimeCard[] | undefined> {
    try {
      const res = await axios.get<Anime[]>("http://localhost:8000/animes");
      let animes: AnimeCard[] = [];
      res.data.forEach((element) => {
        const anime: AnimeCard = {
          name: element.name,
          mainCharacter: element.main_character,
          image: element.image,
          watched: element.watched,
          releaseDate: element.releaseDate,
        };
        animes.push(anime);
      });
      return animes;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  },
};

export default animeService;
