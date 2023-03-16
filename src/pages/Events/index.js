import React, {useState, useEffect} from 'react';
import { getAllEvents } from '../../actions';
import { BackButton, EventBlock, Nav } from '../../components';
import './styles.css'

const Events = () => {

    const [ eventArray, setEventArray ] = useState([]);
    const [ EventList, setEventList ] = useState([]);
    
    useEffect(() => {

        async function eventsFunction() {
        let localEvents = await getAllEvents();
        setEventArray(localEvents);
        }
        eventsFunction()
    }, [])

    useEffect(() => {
        function renderAllEvents() {
            if (!eventArray) {
                return;
            }
            let arr = eventArray.map((event, index) => <EventBlock title={event.title} description={event.description} location={event.location} spaces_total={event.spaces_total} spaces_remaining={event.spaces_remaining} date_occurring={event.date_occurring} key={index} />);
            setEventList(arr);
            console.log(EventList)
        }
        renderAllEvents();
    }, [eventArray])


    return (
        <section id='eventsSection'>
            { EventList }
            <BackButton />
        </section>
    )

}

export default Events;
