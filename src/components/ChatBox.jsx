import React, { useEffect, useRef } from "react";

const ChatBox = ({ messages }) => {
  const messagesEndRef = useRef();
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);
  return (
    <div
      className="
              
             bg-[#F9F8F8] flex flex-col  flex-grow xl:h-[600px] p-4 overflow-y-scroll"
    >
      {messages.map((message) => (
        <div
          className={`${
            message.name == JSON.parse(localStorage.getItem("chat-username"))
              ? "bg-[#326FFD] text-white rounded-bl-full ml-auto"
              : "bg-[#e5e5ea] text-black rounded-br-full"
          } w-fit min-w-[70px] max-w-full break-all relative    flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`}
        >
          <p
            className={`${
              message.name == JSON.parse(localStorage.getItem("chat-username"))
                ? "right-2"
                : "left-2"
            } absolute -top-4 text-gray-600 text-xs`}
          >
            {message.name}
          </p>
          <p>{message.text}</p>
        </div>
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatBox;
