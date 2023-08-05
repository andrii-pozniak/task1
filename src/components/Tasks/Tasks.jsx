import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentReturnedIcon from "@mui/icons-material/AssignmentReturned";
import { ContainerItem, Item } from "./Tasks.style";
import { TaskItem } from "./TaskItem";

export const Tasks = ({
  tasks,
  onDeleteTask,
  onOpenChangeModal,
  onArchiveTask,
}) => {
  return (
    <>
      <ContainerItem style={{ background: " grey", borderRadius: "5px" }}>
        <Item>Name</Item>
        <Item>Created</Item>
        <Item>Category</Item>
        <Item>Content</Item>
        <Item>Dates</Item>
        <Item></Item>
        <Item>
          {" "}
          <AssignmentReturnedIcon style={{ color: "white" }} />
        </Item>
        <Item>
          <DeleteIcon style={{ fill: "white" }} />
        </Item>
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
