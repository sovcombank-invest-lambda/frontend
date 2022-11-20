import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { generateUsersMock } from './usersMocks'

const initialState = {
  users: [],
  pagination: {
    current: 1,
    total: 10,
  },
}

export const getUsers = createAsyncThunk('users/Users', async () => {
  try {
    return generateUsersMock()
  } catch (e) {
    console.error(e)
  }
})

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload
    })
  },
})

export const selectUsers = (state) => state.users.users

export default usersSlice.reducer
