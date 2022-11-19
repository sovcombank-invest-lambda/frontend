import * as React from 'react';
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from 'react-router-dom';
import { fakeAuthProvider } from './auth';
import Authorization from './pages/Authorization/Authorization';
import Users from './pages/Users/Users';
import PageLayout from './components/PageLayout/PageLayout';
import AccountRequests from './pages/AccountRequests/AccountRequests';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Authorization />} />
        <Route element={<RequireAuth><PageLayout /></RequireAuth>}>
          <Route path="/" element={<Navigate to={'/users'} />} />
          <Route
            path="/users"
            element={
              <Users />
            }
          />
          <Route
            path="/requests"
            element={
              <AccountRequests />
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export let AuthContext = React.createContext(null)

function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);

  let signin = (newUser, callback) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      callback();
    });
  };

  let signout = (callback) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return React.useContext(AuthContext);
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();
  console.log(auth.user)

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}