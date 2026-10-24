import React, { useState } from "react";

const CreateTask = ({ employees, setEmployees }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskAssignee, setTaskAssignee] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // const data = JSON.parse(localStorage.getItem("employees") || "[]");

    const employeeName = taskAssignee.trim().toLowerCase();
    // let assigned = false;

    const employeeExists = employees.some(
      (employee) => employee.firstName.toLowerCase() === employeeName,
    );

    if (!employeeExists) {
      alert("Employee not found!");
      return;
    }

    const newTask = {
      active: true,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDescription,
      taskDate,
      category: taskCategory,
    };

    const updatedEmployees = employees.map((employee) => {
      if (employee.firstName.toLowerCase() === employeeName) {
        const counts = employee.taskCounts || {};

        return {
          ...employee,
          tasks: [...(employee.tasks || []), newTask],
          taskCounts: {
            ...counts,
            active: (counts.active || 0) + 1,
            newTask: (counts.newTask || 0) + 1,
            completed: counts.completed || 0,
            failed: counts.failed || 0,
          },
        };
      }
      return employee;
    });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setEmployees(updatedEmployees);

    // logging
    console.log("Task created successfully!");

    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setTaskAssignee("");
    setTaskCategory("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              required
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              required
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="date"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              required
              value={taskAssignee}
              onChange={(e) => setTaskAssignee(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="Employee first name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              required
              value={taskCategory}
              onChange={(e) => setTaskCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"
              type="text"
              placeholder="design, dev etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            required
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py=2 px=4 rounded outline-none bg-transparent border border-gray-400"
          />
          <div className="mt-3 w-full">
            <button
              type="submit"
              className="py-3 px-5 hover:cursor-pointer rounded text-sm w-full bg-emerald-500 active:bg-emerald-600"
            >
              Create task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
