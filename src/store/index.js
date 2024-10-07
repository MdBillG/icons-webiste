'use client';

import { configureStore } from "@reduxjs/toolkit";
import colorSlice from './theme/index'

const store = configureStore({
    reducer: {
        color: colorSlice
    }
})

export default store