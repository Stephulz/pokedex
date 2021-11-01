import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
});

const getPokemon = async (search, offset, limit = 15) => {
  const pagination = `&offset=${offset}&limit=${limit}`;
  const finalUrl = `pokemon/${search ? search : ""}${
    offset && limit ? pagination : `?&limit=${limit}`
  }`;
  try {
    const { data } = await api.get(finalUrl);
    console.log("Data: ", data);
    return data;
  } catch (error) {
    console.log("Error: ", error);
    return error;
  }
};

export const getUrl = async (url) => {
  try {
    const { data } = await axios.get(url);
    console.log("Data: ", data);
    return data;
  } catch (error) {
    console.log("Error: ", error);
    return error;
  }
};

export default getPokemon;
