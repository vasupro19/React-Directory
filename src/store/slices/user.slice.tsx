// third-party
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../index"; // Update the path to your store file
import { getUsers } from "../../apiServices/users/getUsers";

// user.slice.ts

interface User {
  id: string;
  name: string;
  email: string;
  // Add other properties here based on the actual user structure
}

export interface UserState {
  error: string | null;
  users: User[];
}

const initialState: UserState = {
  error: null,
  users: [],
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    hasError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    getBrand(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
  },
});

export default slice.reducer;

// ----------------------------------------------------------------------

export function getBrands() {
  return async (dispatch: AppDispatch) => {
    try {
      console.log("in");
      const res: User[] = await getUsers();
      console.log(res);
      dispatch(slice.actions.getBrand(res));
    } catch (err: any) {
      dispatch(slice.actions.hasError(err.message || "Something went wrong"));
    }
  };
}
