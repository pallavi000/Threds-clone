import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post/:id" element={<PostDetail />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
