import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center  justify-between">
        <img
          className="h-12 w-24 md:w-auto "
          src="https://d3fzplfbemxxxv.cloudfront.net/srmd/wp-content/uploads/2019/09/06090806/mission_logo.svg"
          alt=""
        />

        <h1 className="text-sm md:text-lg font-bold text-yellow-600">
          My Registrations
        </h1>

        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
    </nav>
  );
};

export default Navbar;
