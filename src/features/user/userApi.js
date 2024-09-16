import axios from "axios";

let baseUrl = "http://localhost:4000/api/users";

export const login = (user) => {
  return axios.post(`${baseUrl}/login`, user);
};


export const sighnUp = async (user) => {
  console.log(user);
  return await axios.post(`${baseUrl}/`, user);
}

export const getAllUSersFromServer = () => {
  return axios.get(`${baseUrl}/`)
}