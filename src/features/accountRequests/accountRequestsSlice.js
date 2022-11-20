import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchAccountRequests } from './accountRequestsAPI'

const initialState = {
  requests: [],
  pagination: {
    current: 1,
    total: 10,
  },
}

export const getRequests = createAsyncThunk('accountRequests/getRequests', async () => {
  try {
    return await fetchAccountRequests()
  } catch (e) {
    console.error(e)
  }
})

export const accountRequestsSlice = createSlice({
  name: 'accountRequests',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRequests.fulfilled, (state, action) => {
      state.requests = action.payload
    })
  },
})

export const selectRequests = (state) => state.accountRequests.requests

export default accountRequestsSlice.reducer
