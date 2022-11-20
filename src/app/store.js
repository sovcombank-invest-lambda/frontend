import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import accountRequestsReducer from '../features/accountRequests/accountRequestsSlice'
import usersReducer from '../features/users/users'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    accountRequests: accountRequestsReducer,
    users: usersReducer,
  },
})
