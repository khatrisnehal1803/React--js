import { createSlice, nanoid } from "@reduxjs/toolkit";

const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    history: [],
  },
  reducers: {
    addCalculation: {
      reducer: (state, action) => {
        state.history.push(action.payload);
      },
      prepare: (expression, result) => {
        return {
          payload: {
            id: nanoid(),
            expression,
            result,
          },
        };
      },
    },
    updateCalculation: (state, action) => {
      const { id, expression, result } = action.payload;
      const existing = state.history.find((item) => item.id === id);
      if (existing) {
        existing.expression = expression;
        existing.result = result;
      }
    },
    deleteCalculation: (state, action) => {
      state.history = state.history.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addCalculation, updateCalculation, deleteCalculation } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
