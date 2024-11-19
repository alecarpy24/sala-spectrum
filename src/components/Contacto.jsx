import { Header } from "./Header"
import { Footer } from "./Footer";
import './contacto.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contacto() {
    return (
        <>

            <main className="w-100">
                <section className="bg-fuego-new ">
                    <div className="container seccion-contacto  lh-2">
                        <div className="row justify-content-center">
                            <div className="col-md-12 col-10 caja-trans p-5 mb-0"><h1 className=" fs-1 fw-bold text-uppercase mb-4 ">Contáctanos</h1>
                                <p className="fs-1 fs-md-4  fw-light text-uppercase mb-3 lh-sm">Visitadnos cuando deseéis</p>
                                <p className="fs-5 fs-md-1 fw-light text-uppercase mb-4 lh-sm">Os damos la bienvenida al mundo del Heavy Metal</p>
                                <div className="contacto-social fs-6 fw-light ">
                                    <a href="tel:669546444" className=" fw-light d-block mb-2"><FontAwesomeIcon className="px-1" icon="fa-solid fa-phone" />Teléfono: 669 546 444</a>
                                    <a target="_blank" href="https://www.instagram.com/salaspectrum/?hl=en" className="mb-2  d-block"><FontAwesomeIcon className="px-1" icon="fa-brands fa-instagram" />Instagram: salaspectrum</a>
                                    <a href="mailto:salaspectrum@gmail.com" className="mb-2 d-block" ><FontAwesomeIcon className="px-1" icon="fa-solid fa-envelope-open-text" />  Correo: salaspectrum@gmail.com</a>
                                    <a className="  d-block" href="https://goo.gl/maps/pwhXCFShkNd4QYsv5" target="_blank"> <FontAwesomeIcon className="px-1" icon="fa-solid fa-location-dot" />
                                        Dirección: Av. Ciclista Mariano Rojas, 16, 30009 Murcia</a>
                                </div></div>
                            <div className="col-md-12 col-10 caja-trans">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7810.8614167793185!2d-1.145307!3d38.000588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63811230a0d28d%3A0x190497892d30abb0!2sSala%20Spectrum!5e1!3m2!1ses!2sus!4v1731285508150!5m2!1ses!2sus" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div></div>
                    </div>
                </section>

            </main>

        </>

    )
}

export { Contacto }
