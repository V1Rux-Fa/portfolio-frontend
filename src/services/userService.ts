import { Person } from "../components/sign-up/SignUp";
import api from "../api/axios";

const userService = {
  async getUsers(): Promise<Person[] | undefined> {
    try {
      const res = await api.get<Person[]>("/games");
      return res.data;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  },

  async postUsers(person: Person): Promise<Person | undefined> {
    try {
      const res = await api.post<Person>("/users", person);
      console.log(res);
      return;
    } catch (err) {
      console.log(err);
      return undefined;
    }
  },
};

export default userService;
