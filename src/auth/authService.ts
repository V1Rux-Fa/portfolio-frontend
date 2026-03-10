import api from "../api/axios";
import { AuthMe, LoginRequest } from "../auth/authContext";

const AuthService = {
  async login(data: LoginRequest): Promise<AuthMe> {
    const res = await api.post<AuthMe>("/auth/login", data);
    return res.data;
  },
};

export default AuthService;
