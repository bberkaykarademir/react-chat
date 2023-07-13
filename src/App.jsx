import React from "react";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [access, setAccess] = useState(localStorage.getItem("chat-username"));
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            {!access ? (
              <LoginPage setAccess={setAccess} />
            ) : (
              <Navigate to="/chat" />
            )}
          </>
        }
      />
      <Route
        path="/chat"
        element={
          <>{access ? <ChatPage access={access} /> : <Navigate to="/" />}</>
        }
      />
    </Routes>
  );
}
