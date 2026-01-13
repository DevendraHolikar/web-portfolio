import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";
import All from "./All";
import Add from "./Add";
import Update from "./Update";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth();

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, () => setLoading(false));
  }, []);

  if (loading) return null;

  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC (Login) */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* PROTECTED LAYOUT */}
        <Route
          element={
            <ProtectedRoute>
              <Body />
            </ProtectedRoute>
          }
        >
          <Route path="/profile" element={<Profile />} />
          <Route path="/all" element={<All />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
