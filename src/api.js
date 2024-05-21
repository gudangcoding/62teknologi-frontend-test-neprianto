import axios from "axios";

const API_KEY =
  "Ubf1-f0uqsJUnssqPMGo-tiFeZTT85oFmKfznlPmjDtX8s83jYMoAb-ApuD63wgq6 LDZNsUXG6gurZIVYaj2jzxJmmLdCdXbDqIHU_b6KiCEVi8v-YB0OSsW6MWaY3Yx";

const api = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const searchBusinesses = (term, location, offset = 0) =>
  api.get("/search", {
    params: { term, location, offset },
  });

export const getBusinessDetails = (id) => api.get(`/${id}`);
