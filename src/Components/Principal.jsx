import React from 'react';
import MenuSuperior from "./MenuSuperior";
import Examen from './Examen';
import MenuLateral from './MenuLateral';
import Footer from './Footer';

const Principal = () => {
    return(
        <div>
            <MenuSuperior/>
            <MenuLateral/>
            <Examen/>
            <Footer/>
        </div>
    );
}
export default Principal;