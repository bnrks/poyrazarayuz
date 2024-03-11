import axios from "axios";

const API_URL = "http://localhost:5000"; // Flask'ın çalıştığı port

const api = axios.create({
  baseURL: API_URL,
  timeout: 100000000, // İsteğin maksimum süresi (opsiyonel)
});

export const fetchMessage = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    console.error("API hatası:", error);
    throw error;
  }
};

// Bir kere istek atacak olan fonksiyon
export const fetchOnce = async () => {
  try {
    const response = await api.get("/changestat");
    return response.data;
  } catch (error) {
    console.error("API hatası:", error);
    throw error;
  }
};
