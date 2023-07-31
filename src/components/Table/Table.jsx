import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import { Container, TabStyle, HeaderTab, CellTab } from "./Table.style";

export const Table = () => {

    return (
        <>
            <Container>
                <TabStyle>
                    <HeaderTab>
                        <tr>
                            <CellTab style={{borderLeft: '15px'}}>Name</CellTab>
                            <CellTab>Created</CellTab>
                            <CellTab>Category</CellTab>
                            <CellTab>Content</CellTab>
                            <CellTab>Dates</CellTab>
                            <CellTab></CellTab>
                            <CellTab>
                                <AssignmentReturnedIcon style={{color: 'white'}}/>
                            </CellTab>
                            <CellTab>
                                <DeleteIcon style={{fill: 'white'}} />
                            </CellTab>
                        </tr>
                    </HeaderTab>
                </TabStyle>
            </Container>
        </>
    )
}