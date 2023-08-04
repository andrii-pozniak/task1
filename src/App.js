import React, { useState } from "react";
import { nanoid } from 'nanoid';
import { Tasks } from './components/Tasks/Tasks';
import './App.css';
import { ModalSample } from "../src/components/Modal/Modal";
import { CategoryForm } from 'components/CategoryForm/CategoryForm';

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

 const[showModal, setShowModal] = useState()
 const[showModalAdd, setShowModalAdd] = useState()

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

const handleAddTask = (categoryData) => {
  setTasks((prevTasks) => [...prevTasks, {id: nanoid(4), ...categoryData}]);
};

const handleDeleteTask = (taskId) => {
  setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskId));
};

 console.log("task", tasks)
  return (
    <div>
      <Tasks tasks={tasks} onDeleteTask={handleDeleteTask}/>
      <button type="button" onClick={onChangeModal}>
            Create note
          </button>
      {showModal && (
        <ModalSample toggleModal={toggleModal}>
          <CategoryForm onChangeModalAdd={toggleModalAdd}
          onAddTask={handleAddTask}
          />
          
        </ModalSample>
      )}
      
    </div>
  );
}

export default App;
