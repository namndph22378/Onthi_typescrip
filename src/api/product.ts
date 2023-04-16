import { iProduct } from "../models";
import axios from "./axios";

export const getAll = () => {
  return axios.get("/products");
};

export const getDetail = (id: number) => {
  return axios.get(`/products/${id}`);
};

export const createProduct = (data: iProduct) => {
  return axios.post("/products", data);
};

export const updateProduct = (id: number, data: iProduct) => {
  return axios.put(`/products/${id}`, data);
};

export const deleteProduct = (id: number) => {
  return axios.delete(`/products/${id}`);
};
