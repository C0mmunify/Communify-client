import React from 'react';
import './styles.css';

const EventBlock = (props) => {
    
    return(
        <section id='eventBlock'>
        {/* <img src=></img> */}
        { <h1> {props.title} </h1> }
        { <h2> {props.location} </h2> }
        { <p> {props.description} </p> }
        { <p> attendees: {props.spaces_total - props.spaces_remaining} </p> }
        {/* <AttendButton /> */}
    </section>
    )
}

export default EventBlock
