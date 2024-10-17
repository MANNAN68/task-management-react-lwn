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
    priority: "High",
    isFavorate: false,
  };

  const [tasks, setTasks] = useState([defaultTask]);
  const [showModal, setShowModal] = useState(false);
  const [updatetask, setUpdateTask] = useState(null);

  const handleAddEditTask = (e, newTask, isAdd) => {
    e.preventDefault();
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowModal(false);
  };

  const handleEditTask = (task) => {
    setUpdateTask(task);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setUpdateTask(null);
  };
  const handleDeleteTask = (taskId) => {
    const afterDeleteTask = tasks.filter((task) => task.id !== taskId);
    setTasks(afterDeleteTask);
  };

  const handleAllTaskDelete = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleFavorate = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFavorate = !newTasks[taskIndex].isFavorate;
  };

  const handleSearch = (searchTerm) => {
    const filterTask = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTasks([...filterTask]);
  };

  return (
    <>
      <section className="mb-20" id="tasks">
        {showModal && (
          <TaskModal
            onSave={handleAddEditTask}
            updatetask={updatetask}
            onClose={handleClose}
          />
        )}
        <div className="container mx-auto">
          <SearchTask onSearch={handleSearch} />

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction
              onAddTask={() => setShowModal(true)}
              handleAllTaskDelete={handleAllTaskDelete}
            />
            {tasks.length > 0 ? (
              <TaskList
                tasks={tasks}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
                onFav={handleFavorate}
              />
            ) : (
              <p>no data found</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TaskBoard;
