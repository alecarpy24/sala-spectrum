import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import { HashRouter, Route, Routes } from 'react-router-dom';


/*Estilos*/
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  faLocationDot,
  faStar,
  faAnglesDown,
  faPhone,
  faEnvelopeOpenText,
  faEnvelopesBulk,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

// Add icons to the FontAwesome library
library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faStar,
  faInstagram,
  faLocationDot,
  faAnglesDown,
  faPhone,
  faEnvelopeOpenText,
  faEnvelopesBulk,
  faEnvelope
);
/*COMPONENTES*/
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { Inicio } from './components/Inicio';
import ErrorPage from "./error-page";
import { Conciertos } from './components/Conciertos.jsx';
import { Discordia } from './components/Discordia.jsx';
import { Contacto } from './components/Contacto.jsx';
// Define your routes using `createBrowserRouter`
const router = createBrowserRouter(
  [
    {
      path: "/", 
      element: <Inicio />,
    },
    {
      path: "/conciertos",
      element: <Conciertos />,
    },
    {
      path: "/contacto",
      element: <Contacto />,
    },
    {
      path: "/discordia",
      element: <Discordia />,
    },
  ],
  {
    basename: "/sala-spectrum", // Specify your deployment path here
  }
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <RouterProvider router={router} />
    
  );
}
/*
    <HashRouter basename="/sala-spectrum">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/conciertos" element={<Conciertos />} />
      </Routes>
    </HashRouter>*/
export { App };
