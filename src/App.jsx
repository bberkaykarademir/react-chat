import React from "react";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import { Navigate, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/chat"
        element={
          <>
            {localStorage.getItem("chat-username") ? (
              <ChatPage />
            ) : (
              <Navigate to="/" />
            )}
          </>
        }
      />
      
    </Routes>
  );
}
