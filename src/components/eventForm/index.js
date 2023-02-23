import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerFunction } from "../../actions";
import './styles.css'

function EventForm() {

    const goTo = useNavigate();

    const [errorMessage, setErrorMessage] = useState();
    const [ eventTitle, setEventTitle ] = useState();
    const [ eventDescription, setEventDescription ] = useState();
    const [ eventLocation, setEventLocation ] = useState();
    const [ eventCouncil, setEventCouncil ] = useState();
    const [ eventSpaces, setEventSpaces ] = useState();
    const [ startDate, setStartDate ] = useState();
    const [ endDate, setEndDate ] = useState();
    const [ createdby, setCreatedBy ] = useState();

    const handleSubmit = async(e) => {
        e.preventDefault();
        setErrorMessage('')
        await createEventFunction(e);      
    }

    const updateEventTitle = e => {
        const input = e.target.value;
        setEventTitle(input)
    }

    const updateEventDescription = e => {
        const input = e.target.value;
        setEventDescription(input)
    }

    const updateEventLocation = e => {
        const input = e.target.value;
        setEventLocation(input)
    }

    const updateEventCouncil = e => {
        const input = e.target.value;
        setEventCouncil(input)
    }

    const updateEventSpaces = e => {
        const input = e.target.value;
        setEventSpaces(input)
    }

    const updateStartDate = e => {
        const input = e.target.value;
        setStartDate(input)
    }

    const updateEndDate = e => {
        const input = e.target.value;
        setEndDate(input)
    }

    const updateCreatedBy = e => {
        const userToken = localStorage.getItem('token')
        const userInfo = jwt(userToken)
        setCreatedBy(userInfo.id)
    }

    return (
        <form aria-label='form' onSubmit={handleSubmit}>
             {errorMessage && (
                <p className="error"> {errorMessage} </p>
            )}
            <label htmlFor='EventTitle'>Event Title</label>
            <input aria-label="EventTitle" name="eventtitle" type='text' onChange={updateEventTitle} />
            <label htmlFor='EventDescription'>Event Description</label>
            <input aria-label="EventDescription" name="eventdescription" type='textarea' onChange={updateEventDescription} />
            <label htmlfor='EventLocation'>Event Location</label>
            <input aria-label="EventLocation" name="eventlocation" type='textarea' onChange={updateEventLocation} />
            <label htmlFor="EventCouncil">Event Council</label>
            <input aria-label="EventCouncil" name="eventcouncil" type='text' onChange={updateEventCouncil} />
            <label htmlFor="EventSpaces">Event Spaces</label>
            <input aria-label="EventSpaces" name="eventspaces" type='number' onChange={updateEventSpaces} />
            <label htmlFor='StartDate'>Start Date</label>
            <input aria-label="StartDate" name="startdate" type='date' onChange={updateStartDate} />
            <label htmlFor='EndDate'>End Date</label>
            <input aria-label='EndDate' name="enddate" type='date' onChange={updateEndDate} />
            <input aria-label='CreatedBy' name="createdby" type='hidden' onLoad={updateCreatedBy} />
            <input role='submit' className='submit' type='submit' value='CREATE' />
            </form>
    );
};

export default EventForm;
