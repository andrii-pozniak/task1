import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import { ContainerItem, Header } from "./Tasks.style";
import { TaskItem } from "./TaskItem";

export const Tasks = ({
  tasks,
  onDeleteTask,
  onOpenChangeModal,
  onArchiveTask,
}) => {
  return (
    <>
      <ContainerItem style={{ borderRadius: "5px" }}>
        <Header>Name</Header>
        <Header>Created</Header>
        <Header>Category</Header>
        <Header>Content</Header>
        <Header>Dates</Header>
        <Header></Header>
        <Header>
          {" "}
          <AssignmentReturnedIcon style={{ color: "white" }} />
        </Header>
        <Header>
          <DeleteIcon style={{ fill: "white" }} />
        </Header>
      </ContainerItem>

      {tasks?.map((item) => (
        <TaskItem
          key={item.id}
          id={item.id}
          name={item.name}
          createData={item.createData}
          categoryName={item.categoryName}
          dataStart={item.dataStart}
          dataEnd={item.dataEnd}
          content={item.content}
          onDelete={onDeleteTask}
          onOpenChangeModal={onOpenChangeModal}
          onArchive={onArchiveTask}
        />
      ))}
    </>
  );
};
