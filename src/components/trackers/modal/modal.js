import React, { useEffect, useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { habitsSate, modalState } from '../../../store/trackers';
import dailyCheckData from '../../../api/dailyCheckData';
import * as _ from 'lodash';

const Container = styled.div``;
const Content = styled.div`
    position:fixed;
    left:50%;
    top:50%;
    width:400px;
    height:150px;
    padding:0 20px;
    background-color:#fff;
    transform:translate(-50%, -50%);
    border-radius:10px;
    box-sizing:border-box;
    z-index:20
`;
const Title = styled.h2`
    padding:30px 0 20px;
    font-size:20px;
    color:#222;
`;
const Input = styled.input`
    width:100%;
    border:1px solid #ddd;
    height:35px;
    line-height:35px;
    text-indent:10px;
    font-size:16px
`;
const Dimmed = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.6);
    z-index:10;
`;

function Modal() {
    const inputRef = useRef();
    const [habitList, setHabitList] = useRecoilState(habitsSate)
    const setIsModal = useSetRecoilState(modalState)

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = inputRef.current.value;
        const data = _.cloneDeep(dailyCheckData);
        const newHabit = [...habitList, {title, count:0, ...data }]
        setHabitList(newHabit);
        setIsModal(false);
    }
    useEffect(()=>{
        inputRef.current.focus()
    }, [])
    return (
        <Container>
            <Content>
                <form onSubmit={handleSubmit}>
                    <Title>습관을 입력하세요.</Title>
                    <Input type="text" ref={inputRef} placeholder='입력후 엔터를 누르세요' />
                </form>
            </Content>
            <Dimmed />
        </Container>
    );
}

export default Modal;