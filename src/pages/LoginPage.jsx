import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ access, setAccess }) => {
  const [username, setUsername] = useState();
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    if (username.trim().length > 0 && username.length < 10) {
      localStorage.setItem("chat-username", JSON.stringify(username));
      setAccess(true);
      navigate("/chat");
    } else {
      alert("username length must be between 1 and 9 characters");
    }
  };
  return (
    <div className="w-full min-h-screen bg-[#326FFD] flex">
      <div className="container p-5 h-full my-auto mx-auto flex flex-col items-center gap-5 sm:gap-10 ">
        <h2 className="font-semibold text-2xl sm:text-5xl  text-center text-white tracking-wider font-mono">
          Socialize and Make New Friends
        </h2>
        <h1 className="font-semibold text-3xl sm:text-5xl text-white">
          Chat App
        </h1>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 sm:p-4 inline-block shadow-md outline-none"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="submit"
            className="w-full mt-4 bg-white text-[#326FFD] font-bold sm:text-lg py-2 sm:py-4"
          >
            START CHATTING!
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
