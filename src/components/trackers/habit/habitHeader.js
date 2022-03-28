import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { habitsSate } from '../../../store/trackers';
import * as _ from 'lodash';

const Container = styled.div`
    position: relative;
    height: 38px;
    padding: 10px;
    box-sizing: border-box;
`;
const HabitTitle = styled.h2`
    font-size: 14px;
`;
const ButtonClose = styled.button`
    position: absolute;
    right: 5px;
    top: 5px;
    width: 30px;
    height: 30px;
    font-size: 14px;
`;

function HabitHeader({title, habitIndex}) {
    const [habitList, setHabitList] = useRecoilState(habitsSate);

    const handleClick = () => {
        const deleteNumber = habitIndex;
        const data = _.cloneDeep(habitList);
        const newHabit = data.filter((_, idx) => {
            return idx !== deleteNumber
        })
        setHabitList(newHabit)
        localStorage.setItem('habitList', JSON.stringify(newHabit))
    }
    return (
        <Container>
            <HabitTitle>{title}</HabitTitle>
            <ButtonClose onClick={handleClick}>X</ButtonClose>
        </Container>
    );
}

export default HabitHeader;