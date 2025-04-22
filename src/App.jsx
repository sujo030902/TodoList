import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AllTask from "./components/AllTask";
import PendingTask from "./components/PendingTask";
import CompletedTask from "./components/CompletedTask";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <div className="w-full flex justify-center py-8">
        <h1 className="text-4xl font-semibold">TodoList</h1>
      </div>
      <nav className="w-full mt-12 flex justify-around">
        <Link
          to={"/all"}
          className="text-xl bg-gray-300 border-2 border-gray-400 w-40 text-center px-4 py-4 rounded-3xl active:border-red-500"
        >
          All
        </Link>
        <Link
          to={"/pending"}
          className="text-xl bg-gray-300 border-2 border-gray-400 w-40 text-center px-4 py-4 rounded-3xl active:border-red-500"
        >
          Pending
        </Link>
        <Link
          to={"/complete"}
          className="text-xl bg-gray-300 border-2 border-gray-400 w-40 text-center px-4 py-4 rounded-3xl active:border-red-500"
        >
          Finished
        </Link>
      </nav>

      <Routes>
        <Route path="/all" element={<AllTask tasks={tasks} />} />
        <Route path="/pending" element={<PendingTask tasks={tasks} />} />
        <Route path="/complete" element={<CompletedTask tasks={tasks} />} />
      </Routes>

      <AddTask setTasks={setTasks} />
    </>
  );
};

export default App;
