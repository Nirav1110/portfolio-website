import api from "./api";

// Example: GET root endpoint
export const getBackendMessage = async () => {
  const response = await api.get("/");
  return response.data;
};
