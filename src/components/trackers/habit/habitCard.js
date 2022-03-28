import React from 'react';
import styled from 'styled-components';
import DayList from './dayList';
import HabitHeader from './habitHeader';
import Total from './total';

const Container = styled.div`
    display: inline-block;
    width: 210px;
    margin:10px;
    border: 1px solid #000;
`;

const HabitBody = styled.div`
    position: relative;
`;

function HabitCard({habitItem, habitIndex}) {
    const {title, count, days} = habitItem;
    return (
        <Container >
            <HabitHeader title={title} habitIndex={habitIndex} />  
            <HabitBody>
                <DayList days={days} habitIndex={habitIndex}/>
                <Total count={count} days={days}/>
            </HabitBody>
        </Container>
    );
}

export default HabitCard;