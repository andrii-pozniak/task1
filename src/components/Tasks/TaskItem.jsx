import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import CreateIcon from '@mui/icons-material/Create';
import { ContainerItem, Button } from "./Tasks.style";
import {Item} from './Tasks.style'

export const TaskItem = ({id, name, createData, content, categoryName, onDelete}) => {
    const handleDeleteClick = () => {
        onDelete(id);
      };
    return (
        <>
        <ContainerItem key={id} style={{ background: '#e6e6ff' }}>
            <Item>{name}</Item>
            <Item>{createData}</Item>
            <Item>{categoryName}</Item>
            <Item>{content}</Item>
            <Item></Item>
            <div style={{display: "flex"}}>
            <Button type="button">
                    <CreateIcon style={{ color: 'grey' }} />

                </Button >
                <Button type="button">
                    <AssignmentReturnedIcon style={{ color: 'grey' }} />

                </Button >
                <Button type="button" onClick={handleDeleteClick}>
                    <DeleteIcon style={{ fill: 'grey' }} />

                </Button >
            </div>
        </ContainerItem>

    </>
    )
}