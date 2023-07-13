import React from "react";

const Users = ({ users }) => {
  return (
    <div className="flex-shrink-0 overflow-hidden xl:h-[600px] p-3 w-1/3 sm:w-1/6 bg-[#172838] text-white">
      <div className="h-full overflow-y-scroll">
        <h3 className="border-y">Users</h3>
        {users.map((name) => (
          <p>{name}</p>
        ))}
      </div>
    </div>
  );
};

export default Users;
