import { MusicCard } from "../models/Music";
import api from "../api/axios";

const musicService = {
  async getMusics(): Promise<MusicCard[] | undefined> {
    try {
      const res = await api.get<MusicCard[]>("/musics");
      return res.data;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  },
};

export default musicService;
