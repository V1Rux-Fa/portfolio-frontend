import { FoodCard } from "../models/Food";
import api from "../api/axios";

const foodService = {
  async getFood(): Promise<FoodCard[] | undefined> {
    try {
      const res = await api.get<FoodCard[]>("/foods");
      return res.data;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  },
};

export default foodService;
