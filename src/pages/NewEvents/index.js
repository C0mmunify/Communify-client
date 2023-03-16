import React from 'react';
import { BackButton, EventForm, Nav } from '../../components';
import './styles.css'

const NewEvents = () => {

    return (
        <section id='newEventSection'>
            <EventForm />
            <BackButton />
        </section>
    )
}

export default NewEvents;
