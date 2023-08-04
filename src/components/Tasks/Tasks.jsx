import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import { Container, ContainerItem, Item } from "./Tasks.style";
import { TaskItem } from "./TaskItem";

export const Tasks = ({ tasks, onDeleteTask }) => {
    console.log("first", tasks)
    return (
        <>
            <Container>
               
                      <ContainerItem style={{background:" grey", borderRadius:"5px"}}>
                      <Item style={{ borderLeft: '15px' }}>Name</Item>
                            <Item>Created</Item>
                            <Item>Category</Item>
                            <Item>Content</Item>
                            <Item>Dates</Item>
                            <Item>
                                <AssignmentReturnedIcon style={{ color: 'white' }} />

                                <DeleteIcon style={{ fill: 'white' }} />
                            </Item>
                      </ContainerItem>
                           
                       
                        {tasks?.map((item) => (
                           <TaskItem key={item.id}
                           id={item.id}
                           name={item.name}
                           createData={item.createData}
                           categoryName={item.categoryName}
                           content={item.content}
                           onDelete={onDeleteTask}
                           />
                        )


                        )}
                   
            </Container>
        </>
    )
}