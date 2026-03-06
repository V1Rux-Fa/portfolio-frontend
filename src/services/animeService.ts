import api from "../api/axios";
import { type Anime, AnimeCard } from "../models/Anime";

const animeService = {
  async getAnimes(): Promise<AnimeCard[] | undefined> {
    try {
      const res = await api.get<Anime[]>("/animes");
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
