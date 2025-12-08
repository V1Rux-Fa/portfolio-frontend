import axios from "axios";
import { MusicCard } from "../models/Music";

export const musicService = {
  async getMusics(): Promise<MusicCard[] | undefined> {
    try {
      const res = await axios.get<MusicCard[]>("http://localhost:8000/musics");
      return res.data;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  },
};

export default musicService;
