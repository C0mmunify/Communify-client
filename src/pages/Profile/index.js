import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'
import './styles.css'
import { BackButton, EventBlock } from '../../components';
import ProfileBlock from '../../components/profileBlock';
import { getAllEvents } from '../../actions';

const Profile = () => {
    const goTo = useNavigate();
    const userInfo = localStorage.getItem('token')
    const username = jwt(userInfo).name

    const [ eventArray, setEventArray ] = useState([]);
    const [ EventList, setEventList ] = useState([]);
    
    useEffect(() => {
        async function eventsFunction() {
        let localEvents = await getAllEvents();
        setEventArray(localEvents.sort(function(a, b){return a.dateOcurring - b.dateOcurring}).slice(0, 2));
        }
        eventsFunction()
    }, [])

    useEffect(() => {
        function renderAllEvents() {
            if (!eventArray) {
                return;
            }
            let arr = eventArray.map((event, index) => <EventBlock title={event.title} description={event.description} location={event.location} spaces_total={event.spacesTotal} spaces_remaining={event.spacesRemaining} dateOcurring={event.dateOcurring} key={index} />);
            setEventList(arr);
            console.log(EventList)
        }
        renderAllEvents();
    }, [eventArray])

    return (
        <section>
            <img src='https://drive.google.com/uc?export=view&id=1psAL2nh2-VuiS4XvU0sU259gGn3WDO6Y' alt='Communify Logo'></img>
            <ProfileBlock />
            { EventList }
            <BackButton />
        </section>
    )
}

export default Profile;
