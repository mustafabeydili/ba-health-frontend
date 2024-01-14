// apiService.js
import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your API base URL

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const sendGetRequest = async (path) => {
  try {
    const response = await apiService.get(path);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const sendPostRequest = async (path,data) => {
    try {
      const response = await apiService.post(path,data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const sendPutRequest = async (path,data) => {
    try {
      const response = await apiService.put(path,data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const sendPatchRequest = async (path,data) => {
    try {
      const response = await apiService.patch(path,data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export const sendDeleteRequest = async (path) => {
    try {
      const response = await apiService.delete(path);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

// You can define more API functions here for different endpoints