import React from 'react';
import './home.css';

function Logos() {
    return (
        <div className="wrapper">
            <div className="Bezpeka">          
                <img src={process.env.PUBLIC_URL + '/images/home/Save.png'} alt='Save'/>   
            </div>
            
            <div className="Cikavo">
                <img src={process.env.PUBLIC_URL + '/images/home/Cikavo.png'} alt='Cikavo'/>   
            </div>
            <div className="Ekstrim">                   
                <img src={process.env.PUBLIC_URL + '/images/home/Ekstrim.png'} alt='Ekstrim'/>   
            </div>
        </div>    
    );
  }
  
  export default Logos;
