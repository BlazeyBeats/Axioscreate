import axios from 'axios';
const apiKey = "1abe5f48fb054ea18d5b61efc9944ba8";

export default axios.create({
  method: "get",
  baseURL: "https://newsapi.org/v2",
  params: {
    pageSize: 6
  },
  headers: {
    Authorization: apiKey
  }
});