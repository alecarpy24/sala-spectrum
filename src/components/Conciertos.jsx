import { Header } from "./Header"
import { Footer } from "./Footer";
import { EventsList } from "./EventsList";
import { EventsListPast } from "./EventsListPast";
import './conciertos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Conciertos() {
    return (
        <>


            <main className="w-100 portada-conciertos .portada-new">
                <section className="container">
                    <div className="row justify-content-center">
                        <div className=" p-5">
                            <h1 className="text-center">PRÓXIMOS EVENTOS</h1>
                        </div>
                        <div className="col-10 lista-eventos p-2 rounded">
                            <EventsList />
                        </div>
                    </div>
                </section>
                <section className="container">
                    <div className="row justify-content-center">
                        <div className=" p-5 text-center">
                            <FontAwesomeIcon className="p-4 fs-1 fw-light" icon="fa-solid fa-angles-down" />
                            <p className="text-center fs-3 fw-bold">EVENTOS PASADOS</p>
                        </div>
                        <div className="col-10 lista-eventos p-2 rounded ">
                            <EventsListPast />
                        </div>
                    </div>
                </section>
            </main>

        </>


    )
}

export { Conciertos }
