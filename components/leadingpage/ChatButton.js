'use client';

import React, { useState } from 'react';
import { FiMessageCircle } from 'react-icons/fi';

export default function ChatButton() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
    // TODO: integrate ChatGPT API call here
    // e.g. fetch('/api/chat', { method: 'POST', body: JSON.stringify({ prompt: userInput }) })
  };

  return (
    <>
      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-4 flex flex-col z-50">
          <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Chat with us</h2>
            <button onClick={handleToggle} className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-y-auto mb-2">
            {/* TODO: Render chat messages here */}
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 dark:border-gray-600 rounded-l-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-xl px-4 py-2"
              // onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 z-50"
      >
        <FiMessageCircle size={24} />
      </button>
    </>
  );
}
