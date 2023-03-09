import React from 'react';
import { BackButton, EventForm } from '../../components';
import './styles.css'

const NewEvents = () => {

    return (
        <section>
            <img src='https://drive.google.com/uc?export=view&id=1psAL2nh2-VuiS4XvU0sU259gGn3WDO6Y' alt='Communify Logo'></img>
            <EventForm />
            <BackButton />
        </section>
    )
}

export default NewEvents;
