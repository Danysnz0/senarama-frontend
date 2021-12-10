import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import PublicRoute from './PubicRoute';

const AppRouter = () => {
  const authenticated = false;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={(
            <PublicRoute isAuthenticated={authenticated}>
              <Login />
            </PublicRoute>
          )}
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
