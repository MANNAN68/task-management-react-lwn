import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn react",
    description: "lorem ipsam",
    tag: ["ract", "javascript"],
    priority: "high",
    isFavorate: true,
  };

  const [tasks, setTasks] = useState([]);

  return (
    <>
      <section className="mb-20" id="tasks">
        <div className="container mx-auto">
          <SearchTask />

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction />
            <TaskList />
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
