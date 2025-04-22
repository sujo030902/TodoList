import React from "react";

const AllTask = ({ tasks }) => {
  return (
    <div className="mt-12 mx-8">
      <h2 className="text-2xl font-bold mb-4">All Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="bg-gray-200 p-4 my-2 rounded">
            {task.title}
          </div>
        ))
      )}
    </div>
  );
};

export default AllTask;
