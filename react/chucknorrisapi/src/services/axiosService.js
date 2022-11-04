import axios from "axios";

export function getChuckJoke() {
  return axios.get('https://api.chucknorris.io/jokes/random', {
    validateStatus: function (status) {
      return status < 500;
    }
  });
}