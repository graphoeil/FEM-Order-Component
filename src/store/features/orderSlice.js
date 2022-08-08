// Imports
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
	isTouch:false
};

// Slice
const orderSlice = createSlice({
	name:'order',
	initialState,
	reducers:{
		// Is touch ?
		setIsTouch:(state) => {
			return { ...state, isTouch:true }
		}
	}
})

// Actions export
export const { setIsTouch } = orderSlice.actions;

// Reducer export
export default orderSlice.reducer;