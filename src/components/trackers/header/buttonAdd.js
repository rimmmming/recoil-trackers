import React from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { modalState } from '../../../store/trackers';

const Button = styled.button`
    position: absolute;
	right: 30px;
	top: 30px;
	width: 30px;
	height: 30px;
	border: 1px solid #000;
    background-color:#fff;
`;

function ButtonAdd() {
    const setIsModal = useSetRecoilState(modalState)
    const handelModal = () => {
        setIsModal(true)
    }
    return (
        <Button onClick={handelModal}>+</Button>
    );
}

export default ButtonAdd;