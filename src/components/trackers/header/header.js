import React from 'react';
import styled from 'styled-components';
import ButtonAdd from './buttonAdd';

const Conainer = styled.header`
    position: relative;
	padding: 30px 0;
	text-align: center;
`;
const Title = styled.h1`
    display: inline;
    font-size: 38px;
    color: #fff;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
    border-bottom: 1px solid #000;
`;

function Header() {
    return (
        <Conainer>
            <Title>Tracker</Title>
            <ButtonAdd />
        </Conainer>
    );
}

export default Header;