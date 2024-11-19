import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';


export function Root() {
    return (
        <>
            
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}