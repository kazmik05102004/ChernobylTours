import React from 'react';
import Top from './GeneralComponents/Top';
import TopColumn from './HomeComponents/TopColumn';
import BotColumn from './HomeComponents/BotColumn';


const Main = () => {
    return (
        <div>
            <Top/>
            <TopColumn/>
            <BotColumn/>
        </div>
    );
}

export default Main;