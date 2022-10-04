import { createSlice, configureStore } from "@reduxjs/toolkit";

// import { createStore } from "redux";
// the reducer will return an object
const tokenslice = createSlice({
  name: "token",
  initialState: {
    token: "",
    islogin: false,
    // login: (token) => {},
    // logout: () => {},
  },
  reducers: {
    loginhandler(state,actions) {
      state.islogin = true;
      state.token = actions.payload;
    },
    logouthandler(state) {
      state.islogin = false;
      state.token = null;
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
  reducer: tokenslice.reducer,
});
export const tokenActions = tokenslice.actions;

export default store;
