import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { habitsSate, modalState } from '../../store/trackers';
import Header from './header/header';
import Modal from './modal/modal';
import HabitCard from './habit/habitCard';

const Container = styled.div`
    padding: 30px;
`;

function HabitContainer() {
    const isModal = useRecoilValue(modalState)
    const habitList = useRecoilValue(habitsSate)
    return (
        <>
            <Header />
            {isModal && <Modal />}
            <Container>
                {habitList.map((habitItem, habitIndex) => {
                    return(
                        <HabitCard key={`habits_${habitIndex}`} habitItem={habitItem} habitIndex={habitIndex} />
                    )
                })}
            </Container>
        </>
    );
}

export default HabitContainer;