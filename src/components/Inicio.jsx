
import { EventsList } from "./EventsList";
import { CustomCarousel } from "./CustomCarousel";
import { Link } from "react-router-dom";


//ASSETS
import imgPortada from '/src/assets/img/spectrumOctubre2024-729x1024.jpeg';
import headerLogo from '../assets/img/logo.svg';
import discordiaLogo from '/src/assets/img/Discordia.png'
import instrumentos from '/src/assets/img/bg-instrumentos.jpg'
//CARROUSEL
import carousel1 from '/src/assets/img/carousel/carousel-1.png';
import carousel2 from '/src/assets/img/carousel/carousel-2.png';
import carousel3 from '/src/assets/img/carousel/carousel-3.png';
import carousel4 from '/src/assets/img/carousel/carousel-4.png';
import carousel5 from '/src/assets/img/carousel/carousel-5.png';
import carousel6 from '/src/assets/img/carousel/carousel-6.png';
import carousel7 from '/src/assets/img/carousel/carousel-7.png';
import carousel8 from '/src/assets/img/carousel/carousel-8.png';
import './inicio.css'
function Inicio() {

    const images = [
        carousel1, carousel2, carousel3, carousel4, carousel5,carousel6, carousel7, carousel8
    ];





    return (
        <>

            <main className="w-100">
                <section className="portada bg-fuego">
                    <div className="container d-flex align-items-center justify-content-center">
                        <h1 className="fs-1 fs-md-2 fs-lg-1 lh-1">¡Bienvenidos al epicentro del Heavy Metal en Murcia!</h1>
                    </div>
                </section>

                <div className="portada-new">
                    <section className="section-fire container ">
                        <div className="row align-items-center justify-content-center">
                            <article className="col-9 col-md-12 p-1 p-md-3  d-flex align-items-center justify-content-center caja-trans">
                                <img className="img-portada" src={imgPortada} />
                            </article>
                            <article className=" col-9 col-md-12 caja-trans d-flex flex-column align-items-center justify-content-center">
                                <EventsList />
                                <Link className="all-events" to="/conciertos">VER TODOS LOS EVENTOS</Link>
                            </article>
                        </div>

                    </section>
                </div>
                <div className="container-fluid px-3 px-md-5 box-sala">
                    <section className="photo-carousel row d-flex align-items-center">
                        <div className="col-12 col-md-4 px-5 "><h2 className="text-center">LA SALA</h2>
                            <p className="default-text">Exploramos la esencia del Heavy Metal underground, atrayendo a un público joven y entregado. En un ambiente auténtico y electrizante, los amantes del género disfrutan de su música favorita en vivo mientras degustan nuestras bebidas.</p></div>
                        <div className="col-12 col-md-8"><CustomCarousel images={images} /></div>

                    </section>
                </div>
                <section className="container cta-sala py-5">
                    <div className="row align-item-center justify-content-center ">
                        <h2 className="col-11 col-md-9 text-center mb-4 fs-1">¡Preparaos para el apoteósico sonido del Heavy Metal!</h2>
                        <div className="col-10 col-md-4  ">
                            <div className="p-4 d-flex row justify-content-center cta-sala-card-1">
                                <img className="w-75 mb-3" src={headerLogo} />
                                <h3 className="text-center mb-3">Una sala de conciertos dedicada al Heavy Metal</h3>
                                <p>Un santuario para los amantes del metal, Spectrum ofrece una experiencia acústica incomparable. Sumérgete en el fervor del heavy metal en este espacio dotado con tecnología de vanguardia, garantizando conciertos intensos e inolvidables.</p>

                            </div></div>
                        <div className="col-11 col-md-4 mt-4 mt-md-0">
                            <div className="p-4 cta-sala cta-sala-card-2 d-flex flex-column align-items-center justify-content-center">
                                <img className="w-100 mb-3" src={discordiaLogo} />
                                <h3 className="text-center">Juventud y Rebeldía</h3>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container-fluid row  g-0">
                    <div className="col-12 col-md-6 p-5 cta-info d-flex flex-column justify-content-center align-items-center text-center">
                        <img className="w-75 mb-3" src={headerLogo} />
                        <p>Somos un espacio cultural público reconocido por el ayuntamiento de Murcia</p>
                        <p>En colaboración con Murcia Live (asociación de salas de música en directo de la Región de Murcia) y ACCES (Asociación Española de Salas de Conciertos).</p>
                        <h3>¡Nos enorgullece ser parte de la vibrante escena musical de la zona!</h3> </div>

                    <div className="col-12 col-md-6 cta-img">
                        <img src={instrumentos} className="w-100" /> </div>
                </section>

            </main>

        </>
    )
}

export { Inicio }
