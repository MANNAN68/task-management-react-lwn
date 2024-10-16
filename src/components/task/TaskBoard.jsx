import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import TaskModal from "./TaskModal";

const TaskBoard = () => {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learn react",
    description: "lorem ipsam",
    tags: ["ract", "javascript"],
    priority: "high",
    isFavorate: false,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showModal, setShowModal] = useState(false);

  const handleAddTask = () => {
    console.log("add task");
  };

  return (
    <>
      <section className="mb-20" id="tasks">
        {showModal && <TaskModal />}
        <div className="container mx-auto">
          <SearchTask />

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction onAddTask={() => setShowModal(true)} />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
