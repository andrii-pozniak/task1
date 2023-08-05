import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Tasks } from "components/Tasks/Tasks";
import { ArchivedTasks } from "components/Tasks/ArchiveTask";
import "./App.css";
import { ModalSample } from "components/Modal/Modal";
import { CategoryForm } from "components/CategoryForm/CategoryForm";
import { ChangeForm } from "components/ChangeTask/ChangeForm";
import { Container } from "./App.Style";
import initialData from "../src/initialData.json";

function App() {
  const [tasks, setTasks] = useState(initialData);

  const [showModal, setShowModal] = useState();
  const [showModalAdd, setShowModalAdd] = useState();
  const [showModalChange, setShowModalChange] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [archivedTasks, setArchivedTasks] = useState([]);

  const toggleModal = () => {
    setShowModal(!showModal);

    document.body.style.overflow = "";
  };
  const onChangeModal = () => {
    toggleModal();
  };

  const toggleModalAdd = () => {
    setShowModalAdd(!showModalAdd);
    setShowModal(false);
    document.body.style.overflow = "";
  };
  const toggleModalChange = () => {
    setShowModalChange(!showModalChange);
    setShowModal(false);
    document.body.style.overflow = "";
  };

  const handleAddTask = (categoryData) => {
    setTasks((prevTasks) => [...prevTasks, { id: nanoid(4), ...categoryData }]);
  };
  const handleOpenChangeModal = (taskId) => {
    setSelectedTaskId(taskId);
    toggleModalChange();
  };
  const handleChangeTask = (changeData) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === selectedTaskId
          ? {
              ...task,
              content: changeData.content,
              dataStart: changeData.dataStart,
              dataEnd: changeData.dataEnd,
            }
          : task
      )
    );
    toggleModalChange();
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };
  const handleArchiveTask = (taskId) => {
    const taskToArchive = tasks.find((task) => task.id === taskId);

    if (taskToArchive) {
      setArchivedTasks((prevArchivedTasks) => [
        ...prevArchivedTasks,
        taskToArchive,
      ]);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }
  };

  console.log("archivedTasks", archivedTasks);
  return (
    <Container>
      <Tasks
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onArchiveTask={handleArchiveTask}
        onOpenChangeModal={handleOpenChangeModal}
      />
      <button
        type="button"
        onClick={onChangeModal}
        style={{ marginLeft: "auto" }}
      >
        Create note
      </button>
      <ArchivedTasks tasks={tasks} archivedTasks={archivedTasks} />
      {showModal && (
        <ModalSample toggleModal={toggleModal}>
          <CategoryForm
            onChangeModalAdd={toggleModalAdd}
            onAddTask={handleAddTask}
          />
        </ModalSample>
      )}
      {showModalChange && (
        <ModalSample toggleModalChange={toggleModalChange}>
          <ChangeForm
            onChangeModalChange={toggleModalChange}
            onChangeTask={handleChangeTask}
          />
        </ModalSample>
      )}
    </Container>
  );
}

export default App;
