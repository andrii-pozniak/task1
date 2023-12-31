import React from "react";
import {
  ContainerTasks,
  Item,
  Header,
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
  const categories = ["Task", "Idea", "Quot", "Random Thought"];
  return (
    <>
      <ContainerTasks style={{ marginTop: "50px", borderRadius: "5px" }}>
        <Header>Name</Header>
        <Header>Active</Header>
        <Header>Archived</Header>
      </ContainerTasks>
      {categories.map((category) => {
        const activeCount = countTasksByCategory(category).active;
        const archivedCount = countTasksByCategory(category).archived;

        if (activeCount === 0 && archivedCount === 0) {
          return null;
        }

        return (
          <ContainerTasks key={category} style={{ background: "#e6e6ff" }}>
            <Item>
              {category === "Task" && <ShoppingCartIconStyle />}
              {category === "Idea" && <EmojiObjectsIconStyle />}
              {category === "Quot" && <FormatQuoteIconStyle />}
              {category === "Random Thought" && <PsychologyIconStyle />}
              {category}
            </Item>
            <Item>{activeCount}</Item>
            <Item>{archivedCount}</Item>
          </ContainerTasks>
        );
      })}
    </>
  );
};
