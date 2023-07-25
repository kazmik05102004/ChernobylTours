import React from 'react';
import './home.css';


function Vstyp() {
    return (
        <div className="wrapper">
        <div className="ChornoblText">
            <h4>Чорнобиль - це місце, яке зберігає пам'ять про трагедію, що сталася 
                в 1986 році, коли вибухнула реакторна установка на Чорнобильській АЕС. 
                Сьогодні це місце приваблює туристів, які цікавляться історією та наукою, 
                які хочуть розглянути руїни з близької відстані і дізнатися більше про те, 
                як влада і населення реагували на цю трагедію. Туристи можуть відвідати 
                містечко Прип'ять, яке було евакуйоване після катастрофи, дослідити зону 
                відчуження, відвідати музеї та інші пам'ятки, що зберігають пам'ять про 
                Чорнобиль. Такий туризм може бути корисним, щоб пам'ятати трагедію і 
                пропагувати здоровий спосіб життя та збереження навколишнього середовища.
            </h4>
        </div>
        <div className="ChornoblMap">
            <div style={{border:0}}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19967.785888057308!2d30.213494600164772!3d51.27481173613015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472a8f00e898abcf%3A0x14bcceabdbfd5d2c!2z0KfQvtGA0L3QvtCx0LjQu9GMLCDQmtC40ZfQstGB0YzQutCwINC-0LHQuy4!5e0!3m2!1suk!2sua!4v1682444906402!5m2!1suk!2sua" 
            width="755" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Карта Чорнобилю'></iframe></div>
        </div>
    </div>
    );
  }
  
  export default Vstyp;