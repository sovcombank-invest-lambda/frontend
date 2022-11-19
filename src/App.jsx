import * as React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Authorization from './pages/Authorization/Authorization'
import Users from './pages/Users/Users'
import PageLayout from './components/PageLayout/PageLayout'
import AccountRequests from './pages/AccountRequests/AccountRequests'
import RequireAuth from './components/RequireAuth/RequireAuth';

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Authorization />} />
      <Route
        element={
          <RequireAuth>
            <PageLayout />
          </RequireAuth>
        }
      >
        <Route path="/" element={<Navigate to={'/users'} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/requests" element={<AccountRequests />} />
      </Route>
    </Routes>
  )
}