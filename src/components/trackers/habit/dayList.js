import React from 'react';
import styled from 'styled-components';
import Daily from './daily';

const List = styled.ul`
`;
const ListItem = styled.li`
    display: inline-flex;
    height: 30px;
    vertical-align: top;
    &:nth-child(7n + 1) Button {
        border-left: 0;
    }
`;

function DayList({days, habitIndex}) {
    return (
        <List>
            {days.map((daily, dailyIndex) => {
                const {day, isComplete} = daily;
                return(
                    <ListItem key={`daily_${dailyIndex}`}>
                        <Daily day={day} habitIndex={habitIndex} dailyIndex={dailyIndex} isComplete={isComplete}/>
                    </ListItem>
                )
            })}   
        </List>
    );
}

export default DayList;