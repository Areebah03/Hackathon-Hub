import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    // evaluators: {
        data: [],
        loading: false,
        error: null,
    // },
};

export const fetchEvaluators = createAsyncThunk(
    "evaluator/fetchEvaluators",
    async (thunkAPI) => {
        try {
            const response = await axios.get(
                "http://localhost:8080/Admin/Evaluator"
            );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const registerEvaluator = createAsyncThunk(
    "evaluator/registerEvaluator",
    async (evaluatorData, thunkAPI) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/Admin/Evaluator",
                evaluatorData
            );
            // const response2 = await axios.get(
            //     "http://localhost:8080/Admin/Evaluator"
            // );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const assignEvaluator = createAsyncThunk(
    "evaluator/assignEvaluator",
    async (evaluatorData, thunkAPI) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/Admin/assign",
                evaluatorData
            );
            // const response2 = await axios.get(
            //     "http://localhost:8080/Admin/Evaluator"
            // );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const evaluatorSlice = createSlice({
    name: "evaluator",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvaluators.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEvaluators.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; // Extract data from the response
                state.error = null;
            })
            .addCase(fetchEvaluators.rejected, (state, action) => {
                state.loading = false;
                // state.data = [];
                state.error = action.payload; // Set error payload
            })
            .addCase(registerEvaluator.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerEvaluator.fulfilled, (state, action) => {
                state.loading = false;
                // state.data = action.payload; // Refetch and set evalautor list   
                state.error = null;
            })
            .addCase(registerEvaluator.rejected, (state, action) => {
                state.loading = false;
                // state.data = null;
                state.error = action.payload; // Set error payload
            })
            .addCase(assignEvaluator.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(assignEvaluator.fulfilled, (state, action) => {
                state.loading = false;
                // state.data = action.payload; // Refetch and set evalautor list   
                state.error = null;
            })
            .addCase(assignEvaluator.rejected, (state, action) => {
                state.loading = false;
                // state.data = null;
                state.error = action.payload; // Set error payload
            });
    },
});


export const selectEvaluators = (state) => state.evaluator.data;

export const selectErrorEvaluator = (state) => state.evaluator.error;
export const selectLoadingEvaluator = (state) => state.evaluator.loading;


// export const { login, logout, register } = evaluatorSlice.actions;

export default evaluatorSlice.reducer;
