import { configureStore } from "@reduxjs/toolkit";
import { counterreducer } from "./Counterslice";

 export const store=configureStore({
    reducer:{
        counter:counterreducer
    }
})