import React from "react";
import {
  ContainerTasks,
  Item,
  ShoppingCartIconStyle,
  EmojiObjectsIconStyle,
  FormatQuoteIconStyle,
  PsychologyIconStyle,
} from "./Tasks.style";

export const ArchivedTasks = ({ tasks, archivedTasks }) => {
  const countTasksByCategory = (category) => {
    const activeCount = tasks.filter(
      (task) => task.categoryName === category
    ).length;
    const archivedCount = archivedTasks.filter(
      (task) => task.categoryName === category
    ).length;
    return { active: activeCount, archived: archivedCount };
  };
  return (
    <>
      <ContainerTasks
        style={{ background: " grey", borderRadius: "5px", marginTop: "50px" }}
      >
        <Item>Name</Item>
        <Item>Active</Item>
        <Item>Archived</Item>
      </ContainerTasks>
      {["Task", "Idea", "Quot", "Random Thought"].map((category) => (
        <ContainerTasks key={category} style={{ background: "#e6e6ff" }}>
          <Item>
            {category === "Task" && <ShoppingCartIconStyle />}
            {category === "Idea" && <EmojiObjectsIconStyle />}
            {category === "Quot" && <FormatQuoteIconStyle />}
            {category === "Random Thought" && <PsychologyIconStyle />}
            {category}
          </Item>
          <Item>{countTasksByCategory(category).active}</Item>
          <Item>{countTasksByCategory(category).archived}</Item>
        </ContainerTasks>
      ))}
    </>
  );
};
