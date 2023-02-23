import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BackButton, EventForm } from '../../components';
import './styles.css'

const Events = () => {
    const goTo = useNavigate();

    return (
        <section>
            <img src='https://drive.google.com/uc?export=view&id=1psAL2nh2-VuiS4XvU0sU259gGn3WDO6Y' alt='Communify Logo'></img>
            <EventForm />
            <BackButton />
        </section>
    )
}

export default Events;
