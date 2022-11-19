import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { message } from 'antd';
// import { authorizationRequest, checkAuthorizationTokenRequest } from './authAPI';

const initialState = {
  isAuthorized: false
}

export const authorize = createAsyncThunk(
  'auth/authorize',
  async ({ login, password }) => {
    try {
      // const response = await authorizationRequest({ login, password })
      // localStorage.setItem('token', response.jwtToken)
      // return response
      return true
    } catch (error) {
      const parsedError = await error.json()
      if (parsedError?.Error) {
        parsedError.Error.map(errorMessage => message.error(errorMessage.ErrorMessageText))
      }
    }
  }
)

export const checkAuthorizationToken = createAsyncThunk(
  'auth/checkAuthorization',
  async () => {
    return true
    // const token = localStorage.getItem('token')
    // if (!token) return;
    // return await checkAuthorizationTokenRequest(token)
  }
)

export const chatSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuthorized = false
      localStorage.removeItem('token')
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(authorize.fulfilled, (state, action) => {
        state.userId = action.payload.userId
        state.isAuthorized = true
      })
      .addCase(checkAuthorizationToken.fulfilled, (state, action) => {
        state.userId = action.payload.userId
        state.isAuthorized = true
      })
      .addCase(checkAuthorizationToken.rejected, (state) => {
        state.isAuthorized = false
      })
  }
})

export const selectIsAuthorized = state => state.auth.isAuthorized;

export const { logout } = chatSlice.actions
export default chatSlice.reducer