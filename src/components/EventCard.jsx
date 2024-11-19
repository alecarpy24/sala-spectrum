// SingleEvent.js
import React from 'react';
import './eventcard.css';

function EventCard({ eventName, eventInfo, eventDate, eventMonth, eventDay,img }) {
    return (
        <div className="row event align-items-center justify-content-center flex-column-reverse flex-md-row text-center text-md-start my-3 mx-0 mx-md-5 my-md-5">
            <div className="box-date col-md-2 col-sm-12 mt-3 mt-md-0">
                <p className="i-date">{eventDate}</p>
                <p className="i-month">{eventMonth}</p>
                <p className="i-day">{eventDay}</p>
            </div>
            <div className="box-info col-md-6 col-sm-12">
                <h3>{eventName}</h3>
                <p className="info-p">{eventInfo}</p>
                <a href="#" className="b-buy">COMPRA TU ENTRADA</a>
            </div>
            <div className="box-img col-md-4 col-sm-12">
                <img className="event-thumb mb-3 mb-md-0" src={img} alt={`${eventName} thumbnail`} />
            </div>
        </div>
    );
}

export {EventCard};
