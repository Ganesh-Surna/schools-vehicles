import { createSlice } from "@reduxjs/toolkit"

const initialUiState = {
    isDashboardOpen: false,
}

const uiSlice = createSlice({
    name: "ui",
    initialState: initialUiState,
    reducers: {
        toggleDashboard(state) {
            state.isDashboardOpen = !state.isDashboardOpen;
          },
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;