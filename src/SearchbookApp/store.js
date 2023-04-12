import { configureStore, createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "books",
  initialState: { value: [] },
  reducers: {
    addBook: (state, action) => {
      state.value.push(action.payload);
    },
    deleteBook: (state, action) => {
      const newArr = state.value.filter((ele)=>{
        if (action.payload.id === ele.id){
          return false;
        }
        return true
      })
      state.value = newArr
    },
  },
});

const searchSlice = createSlice({
  name: "search",
  initialState: { value: { booksObj: {} } },
  reducers: {
    searchQuery: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addBook, deleteBook } = wishlistSlice.actions;
export const { searchQuery } = searchSlice.actions;

export const store = configureStore({
  reducer: {
    books: wishlistSlice.reducer,
    search: searchSlice.reducer,
  },
});
