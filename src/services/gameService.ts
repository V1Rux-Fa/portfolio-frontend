import axios from "axios";
import { Game } from "../models/Game";
import api from "../api/axios";

const gameService = {
  async getGames(): Promise<Game[] | undefined> {
    try {
      const res = await api.get<Game[]>("/games");
      return res.data;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  },
};

export default gameService;
