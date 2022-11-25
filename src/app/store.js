import { configureStore } from "@reduxjs/toolkit";

import carBrandReducer from "../features/carBrand/carBrandSlice";


const rootReducer = {

    carBrand: carBrandReducer,

};

const store = configureStore({
    reducer: rootReducer,
});

export default store;