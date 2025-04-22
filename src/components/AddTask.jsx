import React, { useState } from "react";

const AddTask = ({ setTasks }) => {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    const newTask = {
      id: Date.now(),
      title: input,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
    setInput("");
  };

  return (
    <div className="fixed bottom-10 right-10 flex gap-2 items-center">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Task"
        className="px-4 py-2 border border-gray-400 rounded-lg"
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-emerald-400 text-white text-xl font-semibold rounded-full hover:bg-green-500"
      >
        +
      </button>
    </div>
  );
};

export default AddTask;
