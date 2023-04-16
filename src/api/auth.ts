import { ILogin, IRegister } from "../models";
import axios from "./axios";

export const registerUser = async (data: IRegister) => {
  const response = axios.post("/register", data);
  return response;
};

export const login = async (data: ILogin) => {
  const response = axios.post("/login", data);
  return response;
};
