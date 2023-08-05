import React, { useState } from "react";
import { Container, BtnDelete } from "../CategoryForm/CategoryForm.Style";

export const ChangeForm = ({ onChangeTask, onChangeModalChange }) => {
  const [dataStart, setDataStart] = useState("");
  const [dataEnd, setDataEnd] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const changeData = {
      dataStart: formatDate(dataStart),
      dataEnd: formatDate(dataEnd),
      content,
    };
    onChangeTask(changeData);
    setDataStart("");
    setDataEnd("");
    setContent("");
    onChangeModalChange();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">DataStart:</label>
        <input
          type="date"
          id="dataStart"
          name="dataStart"
          value={dataStart}
          onChange={(e) => setDataStart(e.target.value)}
        />
        <label htmlFor="name">DataEnd:</label>
        <input
          type="date"
          id="dataEnd"
          name="dataEnd"
          value={dataEnd}
          onChange={(e) => setDataEnd(e.target.value)}
        />
        <label htmlFor="name">Content:</label>
        <input
          type="text"
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <BtnDelete>
          <button type="button" onClick={onChangeModalChange}>
            cancel
          </button>
          <button type="submit">save</button>
        </BtnDelete>
      </form>
    </Container>
  );
};
