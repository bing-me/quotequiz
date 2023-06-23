import axios from "axios";

// export const BASE_URL = "https://localhost:44325/";
export const BASE_URL = "moviequizqpi.azurewebsites.net";

export const ENDPOINTS = {
  participant: "participant",
  question: "questions",
  getAnswers: "questions/getanswers",
  leaderboard: "participant/leaderboard",
};

export const createAPIEndpoint = (endpoint) => {
  let url = BASE_URL + "api/" + endpoint + "/";
  return {
    fetch: () => axios.get(url),
    fetchById: (id) => axios.get(url + id),
    post: (newRecord) => axios.post(url, newRecord),
    put: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    delete: (id) => axios.delete(url + id),
  };
};
