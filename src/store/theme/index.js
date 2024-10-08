import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    color: false,
}
const colorSlice = createSlice({
    name: 'color',
    initialState: initalState,
    reducers: {
        setColor: (state, action) => {
            state.color = action.payload
        }
    }
})

export const { setColor } = colorSlice.actions
export default colorSlice.reducer