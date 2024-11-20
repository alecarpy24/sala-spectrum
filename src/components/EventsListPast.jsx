// EventsList.js
import React from 'react';
import { EventCard } from './EventCard';
//ASSETS
import imgPastEvent1 from '/src/assets/img/events/img-events-1.jpg'
import imgPastEvent2 from '/src/assets/img/events/img-events-2.jpg'
import imgPastEvent3 from '/src/assets/img/events/img-events-3.jpg'
import imgPastEvent4 from '/src/assets/img/events/img-events-4.jpg'
const eventsActuales = [
    { eventName: 'Lude + La Voz Del Silencio + Arroye', eventInfo: 'Este 9 de noviembre en Sala Spectrum contamos con LUDE, uno de los máximos representantes del nu-metal. Recién llegados de otros lares de la región contaremos con La Voz del […]', eventDate: '09', eventMonth: 'Nov', eventDay: 'Sábado',img:imgPastEvent1 },
    { eventName: 'Drunkskull + Toxic Sludge', eventInfo: 'Noche de Metal de la mano de BAF Rock Management!! La sala Spectrum albergará a dos de las bandas de metal más importantes del levante español. De Cartagena llegan Drunkskull, […]', eventDate: '08', eventMonth: 'Nov', eventDay: 'VIERNES' ,img:imgPastEvent2},
    { eventName: 'The Black Tree', eventInfo: '¡ALL COLOURS TURNING BLACK AT THE DYING! ¡Sábado 2 de noviembre de 2024 apertura a las 21:30h! The Black Tree + Shallow Waters + Sun Of The Dying PRECIOS: Anticipada: […]', eventDate: '02', eventMonth: 'Nov', eventDay: 'Viernes',img:imgPastEvent3 },
    { eventName: 'Dia De Los Muertos Rock Fest', eventInfo: '¡DIA DE LOS MUERTOS ROCK FEST! ¡Viernes 1 de noviembre de 2024 apertura a las 21:30h! Enigmas + Shaman Shaman + Ruido Del Eco PRECIOS: Anticipada: 8€ o Taquilla: 10€', eventDate: '01', eventMonth: 'Nov', eventDay: 'VIERNES',img:imgPastEvent4}
];

function EventsListPast() {
    return (
        <div className="container">
            {eventsActuales.map((event, index) => (
                <EventCard
                    key={index}
                    eventName={event.eventName}
                    eventInfo={event.eventInfo}
                    eventDate={event.eventDate}
                    eventMonth={event.eventMonth}
                    eventDay={event.eventDay}
                    img={event.img}
                />
            ))}
        </div>
    );
}

export {EventsListPast};
