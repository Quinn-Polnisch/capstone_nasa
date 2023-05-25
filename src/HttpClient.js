import axios from "axios"

const url = "https://api.nasa.gov/planetary/apod?api_key=";
const token = '3Cl5PtFcnqRjiNYR4sFQvp1etwGhTjpjMip7kUbO';


export default {
  getApod() {
    return axios.get(url + token)
  },
}