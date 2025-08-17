import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  experiences: [
    {
      id: 1,
      destination: "Mumbai, Maharashtra",
      date: "December 2024",
      description:
        "Explored the bustling city of Mumbai, visited iconic landmarks and experienced the vibrant culture.",
      highlights: [
        "Gateway of India",
        "Marine Drive",
        "Local Street Food",
        "Bollywood Studios",
      ],
      images: [
        "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=500",
      ],
      category: "City",
    },
    {
      id: 2,
      destination: "Rajkot, Gujarat",
      date: "November 2024",
      description:
        "Visited family and explored the cultural heritage of Rajkot, known for its historical significance.",
      highlights: [
        "Watson Museum",
        "Jubilee Garden",
        "Local Markets",
        "Traditional Food",
      ],
      images: [
        "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=500",
      ],
      category: "Heritage",
    },
    {
      id: 3,
      destination: "Dwarka, Gujarat",
      date: "October 2024",
      description:
        "Spiritual journey to one of the four sacred Hindu pilgrimage sites, experiencing peace and devotion.",
      highlights: [
        "Dwarkadhish Temple",
        "Rukmini Devi Temple",
        "Gomti Ghat",
        "Sunset Point",
      ],
      images: [
        "https://images.unsplash.com/photo-1582544694556-f6ed5448e284?w=500",
      ],
      category: "Spiritual",
    },
  ],
  categories: ["All", "City", "Heritage", "Spiritual", "Nature", "Adventure"],
  selectedCategory: "All",
};

const assistantSlice = createSlice({
  name: "assistant",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    addExperience: (state, action) => {
      state.experiences.push(action.payload);
    },
    updateExperience: (state, action) => {
      const index = state.experiences.findIndex(
        (exp) => exp.id === action.payload.id
      );
      if (index !== -1) {
        state.experiences[index] = action.payload;
      }
    },
    deleteExperience: (state, action) => {
      state.experiences = state.experiences.filter(
        (exp) => exp.id !== action.payload
      );
    },
  },
});

export const {
  setSelectedCategory,
  addExperience,
  updateExperience,
  deleteExperience,
} = assistantSlice.actions;
export default assistantSlice.reducer;
