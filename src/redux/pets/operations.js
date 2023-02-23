import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://pet.tizenmile.keenetic.pro/api/";

export const fetchPets = createAsyncThunk(
  "pets/fetchAll",

  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/auth/current");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewPet = createAsyncThunk(
  "pets/addNewPet",
  async (newPet, thunkAPI) => {
    try {
      const res = await axios.post("/pets", newPet, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deletePet = createAsyncThunk(
  "pets/deletPet",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`/pets/${payload}`);
      return payload;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
