import React from 'react'

const NavBar = () => {
  return (
    <>
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
    </>
  );
}

export default NavBar
