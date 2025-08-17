import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { axiosApi } from "@/lib/axios";

// Initial state
const initialState = {
  travelData: {
    loading: false,
    data: [],
    error: null,
  },
  categories: ["All", "City", "Heritage", "Spiritual", "Nature", "Adventure"],
  selectedCategory: "All",
  travelDetail: {
    loading: false,
    data: null,
  },
};

// Async actions
export const fetchTravelData = () => async (dispatch) => {
  try {
    dispatch(travelState([{ key: "travelData.loading", value: true }]));

    const response = await axiosApi.get("/api/travel");

    if (response) {
      dispatch(
        travelState([
          { key: "travelData.loading", value: false },
          { key: "travelData.data", value: response.data },
        ])
      );
    }
    return response;
  } catch (error) {
    dispatch(travelState([{ key: "travelData.loading", value: false }]));
    console.error(error?.response?.data?.message);
    return { error: true, message: error?.response?.data?.message };
  }
};

const travelSlice = createSlice({
  name: "travel",
  initialState: initialState,
  reducers: {
    travelState: (state, { payload }) => {
      const applyValue = (current, value) =>
        typeof value === "function" ? value(current) : value;

      if (Array.isArray(payload)) {
        for (const { key, value } of payload) {
          const currentValue = _.get(state, key);
          _.set(state, key, applyValue(currentValue, value));
        }
      } else {
        const currentValue = _.get(state, payload.key);
        _.set(state, payload.key, applyValue(currentValue, payload.value));
      }
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { travelState, setSelectedCategory } = travelSlice.actions;
export default travelSlice.reducer;
