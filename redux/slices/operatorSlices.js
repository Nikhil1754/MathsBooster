import { createSlice } from "@reduxjs/toolkit";

const operatorSlice = createSlice({
  name: 'operator',
  initialState: '', 
  reducers: {
    setOperator: (state, action) => {
        console.log(action.payload);
      return action.payload; 
    }
  }
});

export const { setOperator } = operatorSlice.actions;
export default operatorSlice;


