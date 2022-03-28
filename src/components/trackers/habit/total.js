import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
    position: absolute;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 120px;
	height: 30px;
	border-left: 1px solid #000;
	border-top: 1px solid #000;
	box-sizing: border-box;
	font-size: 12px;
`;

function Total({count, days}) {
    return (
        <Container>달성률 : {Math.ceil(count/days.length * 100)}%</Container>
    );
}

export default Total;