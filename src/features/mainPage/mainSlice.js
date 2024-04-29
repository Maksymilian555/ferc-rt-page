import {createSlice} from "@reduxjs/toolkit"

const mainSlice = createSlice({
    name: "mainPage",
    initialState: {
        sectionsRefs: [],
    },
    reducers: {
        addRef: ({sectionsRefs}, {payload}) => {
            sectionsRefs.push(payload);
        }
    }
});

export const {addRef} = mainSlice.actions;
export const selectRef = state => state.sectionsRefs
export default mainSlice.reducer