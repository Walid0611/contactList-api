import {configureStore} from "@reduxjs/toolkit";
import ContactSlice from "../store/contactSlice"

export default configureStore ({
    reducer:{
contactElement :ContactSlice
    }
})