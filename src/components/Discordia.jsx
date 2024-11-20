import { Header } from "./Header"
import { Footer } from "./Footer";
import './discordia.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EventsListPast } from "./EventsListPast";

//ASSETS
import imgDiscordia from '/src/assets/img/discordia-pag.png'
import bgImage from '/src/assets/img/discordia-bg.jpg'


function Discordia() {
  return (
    <>
      <Header />
      <main className="w-100">
        <section className="portada-discordia py-5" style={{ backgroundImage: `url(${bgImage})` }}>
          <div className="p-2 text-center container">
            <img className="w-50 py-5 py-md-0 img-discordia" src={imgDiscordia} />
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="caja-trans col-md-10 col-10  p-5 rounded mb-4">
                <h2 className="fs-1 text-center">NO HAY MÁS EVENTOS PRÓXIMOS</h2>
              </div>
              <div className="col-md-10   text-center mb-5">
                <FontAwesomeIcon className="p-4 fs-1 fw-light" icon="fa-solid fa-angles-down" />
                <p className="text-center fs-3 fw-bold">EVENTOS PASADOS</p>
              </div>
              <div className=" col-10 bg-dark rounded mb-4">
                <EventsListPast />
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>

  )
}

export { Discordia }
