import axios from "axios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const url = "http://organicflowerpower.org/";

export default function Axios() {
 const [auth] = useContext(AuthContext);

 const apiClient = axios.create({
  baseURL: url,
 });

 apiClient.interceptors.request.use(function (config) {
  const token = auth.token;
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
 });

 return apiClient;
}