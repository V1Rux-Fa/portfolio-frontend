import axios from "axios";
import { FoodCard } from "../models/Food";

export const foodService = {
  async getFood(): Promise<FoodCard[] | undefined> {
    try {
      const res = await axios.get<FoodCard[]>("http://localhost:8000/foods");
      console.log("foods");
      return res.data;
    } catch (err) {
      console.error(err);
      return undefined;
    }
  },
};

export default foodService;
