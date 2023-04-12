import { Iresponse } from "@/type/authType";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Iuser {
  username: string ;
  email: string ;
  photo: string;
}
interface Ires {
  user: Iuser;
}
// Define the initial state using that type
const initialState: Ires = {
  user: {
    username: "",
    email: "",
    photo: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state: any, action: PayloadAction<Iuser>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = initialState.user;
    },
  },
});
export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
