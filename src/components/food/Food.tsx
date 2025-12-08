import { useEffect, useState } from "react";
import Card from "../card/Card";
import { FoodCard } from "../../models/Food";
import foodService from "../../services/foodService";

const Food = () => {
  const [foods, setFoods] = useState<FoodCard[]>();
  useEffect(() => {
    const getFoods = async () => {
      const foods = await foodService.getFood();
      if (foods) {
        setFoods(foods);
      } else console.log("Error on fetching foods");
    };
    getFoods();
  }, []);
  return (
    <div className="row">
      <div className="col-9">{foods && <Card cards={foods} />}</div>
    </div>
  );
};

export default Food;
