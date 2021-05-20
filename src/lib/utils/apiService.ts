import axios from "axios";

class APIService {
  private _instance;

  constructor() {
    this._instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });
  }

  get instance() {
    return this._instance;
  }
}

const API = new APIService();
export default API;
