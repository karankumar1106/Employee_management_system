import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="flex items-center gap-4 overflow-x-auto justify-start flex-nowrap h-[55%] py-4 mt-10 w-full"
    >
      {/* <AcceptTask/>
        <NewTask/>
        <CompleteTask/>
        <FailedTask/> */}

      {data.tasks.map((task, index) => {
        if (task.newTask) {
          return <NewTask key={index} task={task} data={task} />;
        } if (task.active) {
          return <AcceptTask key={index} task={task} data={task} />;
        } if (task.completed) {
          return <CompleteTask key={index} task={task} data={task} />;
        }if (task.failed) {
          return <FailedTask key={index} task={task} data={task} />;
        }
      })}
    </div>
  );
};

export default TaskList;
