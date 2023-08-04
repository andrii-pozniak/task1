import React, { useState } from "react";
import { nanoid } from 'nanoid';
import { Tasks } from 'components/Tasks/Tasks';
import './App.css';
import { ModalSample } from "components/Modal/Modal";
import { CategoryForm } from 'components/CategoryForm/CategoryForm';
import { ChangeForm } from "components/ChangeTask/ChangeForm";
import { Container } from "./App.Style";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      name: "Books",
      createData: "April, 24, 21",
      categoryName: "Task",
      content: "The Lean Starup"
    },
    {
      id: '2',
      name: "Shopping List",
      createData: "April, 27, 21",
      categoryName: "Task",
      content: "Tomatoes, bread"
    }
  ]);

  const [showModal, setShowModal] = useState()
  const [showModalAdd, setShowModalAdd] = useState()
  const [showModalChange, setShowModalChange] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

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
        task.id === selectedTaskId ? { ...task, content: changeData.content, dataStart: changeData.dataStart, dataEnd: changeData.dataEnd } : task
      )
    );
    toggleModalChange();
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId));
  };

  console.log("task", tasks)
  return (
    <Container>
      <Tasks tasks={tasks} onDeleteTask={handleDeleteTask} onOpenChangeModal={handleOpenChangeModal} />
      <button type="button" onClick={onChangeModal} style={{ marginLeft: 'auto' }}>
        Create note
      </button>
      {showModal && (
        <ModalSample toggleModal={toggleModal}>
          <CategoryForm onChangeModalAdd={toggleModalAdd}
            onAddTask={handleAddTask}
          />

        </ModalSample>
      )}
      {showModalChange && (
        <ModalSample toggleModalChange={toggleModalChange}>
          <ChangeForm onChangeModalChange={toggleModalChange}
            onChangeTask={handleChangeTask}
          />

        </ModalSample>
      )}

    </Container>
  );
}

export default App;
