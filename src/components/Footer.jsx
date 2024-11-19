import React from "react";
import { CardCarousel } from "./CardCarousel";
import "./footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    const cards = [
        { title: 'Yesi Ruiz', text: 'Una fiesta para repetir...la del 11 de febrero Larga vida a la gresca y el jaleo 🙌🏾🔥🙌🏾🔥', date: '27/02/2024', imgSrc: 'src/assets/img/reviews/client-1.png' },
        { title: 'Vincen T', text: 'Sala amplia, climatizada. Barra para bebidas y bar superior con zona de juegos y terraza exterior.', date: '13/02/2024', imgSrc: 'src/assets/img/reviews/client-2.png' },
        { title: 'Valentina Grisales', text: 'Buenisimooooo!!!', date: '06/01/2024', imgSrc: 'src/assets/img/reviews/client-3.png' },
        { title: 'María Jose Cabanillas', text: 'TRAED LA SPECTRUM DE VUELTA NECESITO MI CASA', date: '11/10/2023', imgSrc: 'src/assets/img/reviews/client-4.png' },

    ];
    return (
        <footer>
            <div className="reviews p-5">
                <h2 className="text-center p-md-5 pb-4 mb-4 mb-md-0">Nos encanta leeros después de vuestra visita</h2>
                <div className="container p-md-5"><CardCarousel cards={cards} cardsPerSlide={3} /></div>
            </div>
            <div className=" cta-footer text-white">
                <div className="container mb-5">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12 col-md-5">
                            <h2 className="text-center mb-4">¡Dejad que la música os una a nosotros!</h2>
                            <p className="text-center mb-4 cta-text">Podéis encontrar la Sala Spectrum en Instagram, donde compartimos noticias, eventos y contenido relacionado con la música que os apasiona.</p>
                            <div className="d-flex justify-content-center"><a href="/contacto" className="b-info text-center">MÁS INFORMACIÓN</a></div>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row justify-content-center text-center text-md-start">
                        <div className=" col-12 col-md-3 mb-5">
                            <img className="w-50 mb-3" src="src\assets\img\logo.svg" />
                            <p>¡Uníos a la escena en Sala Spectrum! Somos vuestra sala del Heavy Metal en Murcia. Conciertos intensos, riffs poderosos y una experiencia única.</p>
                            <div className="social-links d-flex align-items-center justify-content-center justify-content-md-start">
                                <h3 className="m-0 ">SÍGUENOS:</h3>
                                <a className="social-link-instagram" href="https://www.instagram.com/salaspectrum/?hl=en" target="_blank"><FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                                <a className="social-link-location" href="https://goo.gl/maps/pwhXCFShkNd4QYsv5" target="_blank"> <FontAwesomeIcon icon="fa-solid fa-location-dot" /></a>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 footer-contact mb-5">
                            <h3 className="">INFORMACIÓN DE CONTACTO</h3>
                            <p>Dirección:<br />Av. Ciclista Mariano Rojas, 16, 30009 Murcia</p>
                            <p>Teléfono: 669 546 444</p>
                            <p>Mail: salaspectrum@gmail.com</p>
                            <p>Cómo llegar →</p>
                        </div>
                        <div className="col-12 col-md-4 footer-legal">
                            <h3 className="">LEGAL</h3>
                            <ul className="p-0">
                                <li>
                                    <a href="https://www.salaspectrum.com/aviso-legal/">
                                        Aviso legal
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.salaspectrum.com/politica-de-privacidad/">
                                        Política de privacidad
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.salaspectrum.com/politica-de-cookies-ue/">
                                        Política de cookies (UE)
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.salaspectrum.com/declaracion-de-accesibilidad/">
                                        Accesibilidad
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-white kit-digital">
                <div className="container d-flex justify-content-center py-3">
                    <img className="w-100 w-md-75" src="src\assets\img\Kid-digital-info.png" /></div>
            </div>
        </footer>

    )
}

export { Footer };
