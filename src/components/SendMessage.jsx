import React from "react";

const SendMessage = ({ handleSendMessage, setValue, value }) => {
  return (
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
  );
};

export default SendMessage;
