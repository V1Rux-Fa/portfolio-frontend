import api from "../api/axios";
import { LoginResponse, LoginRequest } from "../models/Users";

const AuthService = {
  async login(data: LoginRequest): Promise<LoginResponse | undefined> {
    try {
      const res = await api.post<LoginResponse>("/login", data);

      //inserir nos cookies
      return res.data;
    } catch (err) {
      console.log(err);
      return undefined;
    }

    //ir ao back

    //receber jwt token

    //inserir nos cookies

    //adicionar às outras componentes camda de proteção -> != logado => nao tem acesso aos componentes
  },
};

export default AuthService;
