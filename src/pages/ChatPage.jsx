import React, { useEffect, useState } from "react";
// import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { addDoc, serverTimestamp } from "firebase/firestore";

import {
  collection,
  query,
  onSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import db from "../database/firebase";

const ChatPage = () => {
  const [value, setValue] = useState("");
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Enter valid message!");
      return;
    }

    try {
      await addDoc(collection(db, "messages"), {
        text: value,
        name: localStorage.getItem("chat-username"),
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
    setValue("");
  };

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe;
  }, []);

  return (
    <div className="w-full h-screen bg-[#326FFD] flex">
      <div className="2xl:container w-full h-screen 2xl:h-auto flex flex-col mx-auto my-auto ">
        <div className="w-full bg-[#272838] p-4">
          <h2 className="text-[#326FFD] font-bold text-lg">
            Real Time Chat App
          </h2>
        </div>
        <div className="w-full flex flex-grow ">
          <div className="bg-[#F9F8F8] flex-grow xl:h-[600px] p-4 overflow-y-scroll">
            {messages.map((message) => (
              <p>{message.text}</p>
            ))}
          </div>
          <div className="p-3 w-1/3 sm:w-1/6 bg-[#172838] text-white">
            <div className="h-1/2">
              <h3 className="border-y">Online Users</h3>
            </div>
            <div>
              <h3 className="border-y">Offline Users</h3>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSendMessage}
          className="w-full bg-[#272838] flex text-white text-lg"
        >
          <input
            type="text"
            className="bg-[#272838] flex-grow p-2 sm:p-4 outline-none"
            placeholder="Message"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="p-3 w-1/3 sm:w-1/6 bg-[#2A324B]">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;

// {messages.map((messages, index) => (
//   <div key={index}>
//     {messages.text}
//   </div>
// ))}

// const messagesRef = collection(db, "messages");
//   const q = query(messagesRef, orderBy("timestamp"));

//   useEffect(() => {
//     onSnapshot(q, (snapshot) => {
//       setMessages(snapshot.docs.map((doc) => doc.data()));
//     });
//     console.log(messages);
//   }, []);
