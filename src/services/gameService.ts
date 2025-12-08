import axios from "axios";
import { Game } from "../models/Game";

export const gameService = {
  async getGames(): Promise<Game[] | undefined> {
    try {
      const res = await axios.get<Game[]>("http://localhost:8000/games");
      return res.data;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  },
};

export default gameService;
