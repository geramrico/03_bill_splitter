import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import billService from "./billService";


const initialState = {
    bill: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create new note
export const createBill = createAsyncThunk(
    'bill/create',
    async (str, thunkAPI) => {
        try {
            return await billService.createBill(str)
        } catch (error) {
            const message = (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    })


export const billSlice = createSlice({
    name: 'bill',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createBill.pending, state => {
                state.isLoading = true
            })
            .addCase(createBill.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.bill = action.payload
            })
            .addCase(createBill.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = billSlice.actions

//Imported in store.js as billReducer
export default billSlice.reducer