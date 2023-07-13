import React, { useEffect, useState } from "react";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import db from "../database/firebase";

import ChatBox from "../components/ChatBox";
import Users from "../components/Users";
import SendMessage from "../components/SendMessage";

const ChatPage = () => {

  const [value, setValue] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (value.trim() === "" || value.length > 50) {
      alert("Enter valid message!");
      return;
    }
    let textValue = value;
    setValue("");
    try {
      await addDoc(collection(db, "messages"), {
        text: textValue,
        name: JSON.parse(localStorage.getItem("chat-username")),
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }

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
    console.log(messages);

    return () => unsubscribe;
  }, []);

  const users = [...new Set(messages.map((message) => message.name))];
  return (
    <div className="w-full h-screen bg-[#326FFD] flex">
      <div className="2xl:container w-full h-screen 2xl:h-auto flex flex-col mx-auto my-auto ">
        <div className="w-full bg-[#272838] p-4">
          <h2 className="text-[#326FFD] font-bold text-lg">
            Real Time Chat App
          </h2>
        </div>
        <div className="w-full flex flex-grow overflow-hidden">
          <ChatBox messages={messages} />
          <Users users={users} />
        </div>

        <SendMessage
          handleSendMessage={handleSendMessage}
          setValue={setValue}
          value={value}

        />

      </div>
    </div>
  );
};

export default ChatPage;
