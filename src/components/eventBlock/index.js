import React from "react";
import "./styles.css";

const EventBlock = (props) => {
    let dateArray = props.date_occurring.split("T")[0].split("-");
    let formattedDate = `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;

    return (
        <section id="eventBlock">
            <section id="eventMain">
                {<h1> {props.title} </h1>}
                {<h2> {props.location} </h2>}
                {<p> {formattedDate} </p>}
                <section id="eventDescription">
                    {<p> {props.description} </p>}
                </section>
                <section id="eventAttendance">
                    {
                        <p>
                            {" "}
                            Attendees:{" "}
                            {props.spaces_total - props.spaces_remaining}{" "}
                        </p>
                    }
                    {<p> Spaces Remaining: {props.spaces_remaining} </p>}
                </section>
            </section>
        </section>
    );
};

export default EventBlock;
