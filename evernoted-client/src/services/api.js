import axios from "axios";

const EVERNOTED_API_URI = "http://localhost:3030";

const Api = axios.create({ baseURL: EVERNOTED_API_URI });

export default Api;
