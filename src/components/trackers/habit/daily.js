import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { habitsSate } from '../../../store/trackers';
import * as _ from 'lodash';

const Button = styled.button`
    position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	border-left: 1px solid #000;
	border-top: 1px solid #000;
	box-sizing: border-box;
	font-size: 12px;
	cursor: pointer;
    &.active{
        background: #ffff00;
        color: #999;

        &::after{
            content: "";
            position: absolute;
            width: 1px;
            height: 60px;
            transform: rotate(45deg);
            background-color: #999;
        }
    }
`;

function Daily({day, habitIndex, dailyIndex, isComplete}) {
    const [habitList, setHabitList] = useRecoilState(habitsSate)

    const handleClick = () => {
        const data = _.cloneDeep(habitList);
        data[habitIndex].days[dailyIndex].isComplete = !data[habitIndex].days[dailyIndex].isComplete;
        data[habitIndex].days[dailyIndex].isComplete ? data[habitIndex].count += 1 : data[habitIndex].count -= 1
        const newHabit = [...data]
        setHabitList(newHabit)
        localStorage.setItem('habitList', JSON.stringify(newHabit))
    }
    return (
        <Button type='button' className={isComplete && 'active'}  onClick={handleClick}>{day}</Button>
    );
}

export default Daily;