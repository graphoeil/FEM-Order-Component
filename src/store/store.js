// Imports
import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/orderSlice";

// Store
const store = configureStore({
	reducer:{
		order:orderReducer
	}
});

// Export
export default store;