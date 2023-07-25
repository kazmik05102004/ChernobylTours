import React from 'react';
import './signIn.css';
import { FaFacebook } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function TopColumn() {
    return (
        <div className="top-column">
            <h4>ТУРИ В ЧОРНОБИЛЬ ТА ПРИП'ЯТЬ</h4>
            <a href="https://t.me/toursOfChernobyl" className="fa fa-telegram"><FaTelegram /></a>
            <a href="https://t.me/toursOfChernobyl" className="fa fa-instagram"><FaInstagram /></a>
            <a href="https://t.me/toursOfChernobyl" className="fa fa-facebook"><FaFacebook /></a>
            <h3>З Києва <br/> +38 068 95 24 765</h3>
            <h2>Пориньте у атмосферу найбільшої техногенної катастрофи</h2>
        </div>
    );
}
  
  export default TopColumn;