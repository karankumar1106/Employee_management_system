import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-4 h-80">
      <div className="bg-red-400 py-2 px-4 mb-2 flex justify-between rounded text-white">
        <h2 className="w-1/5 text-lg font-bold">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-bold">New Task</h3>
        <h5 className="w-1/5 text-lg font-bold">Active Task</h5>
        <h5 className="w-1/5 text-lg font-bold">Completed</h5>
        <h5 className="w-1/5 text-lg font-bold">Failed</h5>
      </div>

      <div className="h-[80%] overflow-y-auto">
        {authData?.employees?.map((employee, index) => {
          return (
            <div
              key={employee.id || index}
              className="border border-emerald-500 py-2 px-4 mb-2 flex justify-between rounded"
            >
              {/* Employee Name */}
              <h2 className="w-1/5 text-lg font-bold text-white">
                {employee.firstName}
              </h2>

              {/* New Task - Blue */}
              <h3 className="w-1/5 text-lg font-bold text-blue-500" style={{ color: "blue" }}>
                {employee.taskCounts?.newTask || 0}
              </h3>

              {/* Active Task - Yellow */}
              <h5 className="w-1/5 text-lg font-bold text-yellow-400" style={{ color: "yellow" }}>
                {employee.taskCounts?.active || 0}
              </h5>

              {/* Completed Task - Green */}
              <h5 className="w-1/5 text-lg font-bold text-emerald-400" style={{ color: "green" }}>
                {employee.taskCounts?.completed || 0}
              </h5>

              {/* Failed Task - Red */}
              <h5 className="w-1/5 text-lg font-bold text-red-500" style={{ color: "red" }}>
                {employee.taskCounts?.failed || 0}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;