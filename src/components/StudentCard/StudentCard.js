import React from 'react'
import { StudentCardWrapper, StudentCardHeader, StudentCardNameRow, StudentCardNameContent, StudentCardEmailRow } from './StudentCardStyles';

const StudentCard = (props) => {
    return (
        <StudentCardWrapper>
            <StudentCardHeader isAdmin={props.isAdmin}>
                {props.isAdmin ? "Admin" : "Student"}
            </StudentCardHeader>
            <StudentCardNameRow>
                <StudentCardNameContent>
                    {props.firstName}
                </StudentCardNameContent>
                <StudentCardNameContent>
                    {props.lastName}
                </StudentCardNameContent>
            </StudentCardNameRow>
            <StudentCardEmailRow>
                    {props.email}
            </StudentCardEmailRow>
        </StudentCardWrapper>
    );
}

export default StudentCard;