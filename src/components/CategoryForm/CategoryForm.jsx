import React, { useState } from 'react';
import { Container, BtnDelete } from "./CategoryForm.Style";

export const CategoryForm = ({ onAddTask, onChangeModalAdd }) => {
    const [name, setName] = useState('');
    const [createData, setCreateData] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [content, setContent] = useState('');

    const formatDate = (dateString) => {
        const options = { month: 'long', day: 'numeric', year: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        const categoryData = {
            name,
            createData: formatDate(createData),
            categoryName,
            content
        };
        onAddTask(categoryData); 
        setName('');
        setCreateData('');
        setCategoryName('');
        setContent('');
        onChangeModalAdd();
    };

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="name">CreateData:</label>
                <input type="date" id="dataStart" name="dataStart" value={createData} onChange={(e) => setCreateData(e.target.value)} />
                <label htmlFor="name">CategoryName:</label>
                <input type="text" id="categoryName" name="categoryName" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
                <label htmlFor="name">Content:</label>
                <input type="text" id="content" name="content" value={content} onChange={(e) => setContent(e.target.value)} />

                <BtnDelete>
                    <button type="button" onClick={onChangeModalAdd}>
                        cancel
                    </button>
                    <button type="submit">save</button>
                </BtnDelete>
            </form>
        </Container>
    );
};