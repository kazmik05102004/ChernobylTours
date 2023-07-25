import React from 'react';
import ConteinerForMottos from './ConteinerForMottos';
import Rules from './Rules';
import Vstyp from './Vstyp';
import SliderConteiner from './SliderConteiner';
import Footer from '../GeneralComponents/Footer';
import './home.css';


function BotColumn() {
    return (
        <div className="bottom-column">
            <Vstyp/>
            <ConteinerForMottos/>
            <Rules/>
            <SliderConteiner/>
            <Footer/>
        </div>
    );
  }
  
  export default BotColumn;