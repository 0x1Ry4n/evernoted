import axios from 'axios'; 

const EVERNOTED_API_URI = "https://evernoted.vercel.app/";

const Api = axios.create({baseURL: EVERNOTED_API_URI})

export default Api; 