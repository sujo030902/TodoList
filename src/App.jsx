import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import AllTask from './components/AllTask';
import PendingTask from './components/PendingTask';
import CompletedTask from './components/CompletedTask';
import AddTask from './components/AddTask';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <div className="w-full flex justify-center py-8">
        <h1 className="text-4xl font-semibold">TodoList</h1>
      </div>
      <NavBar />
      <Routes>
        <Route path="/all" element={<AllTask />}></Route>
        <Route path="/pending" element={<PendingTask />}></Route>
        <Route path="/complete" element={<CompletedTask />}></Route>
      </Routes>
      <AddTask />
    </>
  );
}

export default App
