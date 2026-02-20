import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";

function App() {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/profile" /> : <Navigate to="/login" />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/profile"
          element={
            isLoggedIn ? <Profile /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
