import { createSlice, configureStore } from "@reduxjs/toolkit";
// import { createStore } from "redux";
// the reducer will return an object
const counterslice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state) {
      state.counter++;
    },
  },
});
// const reducer = (state = { counter: 0 }, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//     };
//   }
//   return {
//     counter: state.counter + 1,
//   };
// };

// const store = createStore(counterslice.reducer);
const store = configureStore({
  reducer: counterslice.reducer,
});
export const counterActions = counterslice.actions;

export default store;
