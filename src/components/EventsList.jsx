// EventsList.js
import React from 'react';
import { EventCard } from './EventCard';

//Portadas evento
import evento1 from '/src/assets/img/events/img-events-1.jpg'
import evento2 from '/src/assets/img/events/img-events-2.jpg'
import evento3 from '/src/assets/img/events/img-events-3.jpg'
import evento4 from '/src/assets/img/events/img-events-4.jpg'

const eventsActuales = [
    { eventName: 'Alae Noctis + In Dreams + Dysforia', eventInfo: 'Tras el concierto celebrado en mayo en Málaga, gracias al buen rollo y afinidad generada entre las bandas, los sevillanos Dysforia devuelven la visita a los murcianos InDreams. Y a estas 2 bandas emergentes se les unen los cartageneros Alae Noctis.', eventDate: '15', eventMonth: 'Nov', eventDay: 'Viernes',img:evento1 },
    { eventName: 'Bocanada', eventInfo: '¡Sábado 23 de Noviembre de 2024 apertura a las 21:00h! PRECIOS: Anticipada: 12€ + gastos de gestión o Taquilla: 16€ ¡COMPRA TUS ENTRADAS AQUÍ!', eventDate: '23', eventMonth: 'Nov', eventDay: 'Sábado' ,img:evento2 },
    { eventName: 'Veladura + Sheken', eventInfo: 'Una noche de Rock, Veladura hará presentación de disco. Su música sintetiza el sonido clásico del rock español con el rock progresivo. A la parte musical se suma una lírica […]', eventDate: '29', eventMonth: 'Nov', eventDay: 'Viernes',img:evento3 },
    { eventName: 'El Año Del Caiman + Stillblind + Astter', eventInfo: '¡Prepárate para una noche de rock inolvidable! El próximo 30 de noviembre, la Sala Spectrum vibrará con la potencia de tres bandas explosivas. Desde Bilbao, El Año del Caimán llega […]', eventDate: '30', eventMonth: 'Nov', eventDay: 'Sábado',img:evento4}
];

function EventsList() {
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

export {EventsList};
