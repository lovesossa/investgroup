import React from 'react';
import { Link } from 'react-router-dom';
import { mainlogo, phone } from './img'

function Header() {

    function show() {
        const show = document.querySelector(".header");
        show.classList.add('show');
        show.classList.remove('close');
    }
    function close() {
        const show = document.querySelector(".header");
        show.classList.remove('show');
        show.classList.add('close');
    }


    return (
        <header className="header container">
            <div className="header__logo">
                <a href="/">
                    <img src={mainlogo} alt="" />
                </a>
            </div>
            <div className="header__nav nav-header">
                <button className="nav-header__link"><Link to="/company">КОМПАНИЯ</Link></button>
                <button className="nav-header__link"><Link to="/services">ИНВЕСТИЦИОННЫЕ УСЛУГИ</Link></button>
                <button className="nav-header__link"><Link to="/management">УПРАВЛЕНИЕ НЕДВИЖИМОСТЬЮ</Link></button>
                <button className="nav-header__link"><Link to="/agency">УСЛУГИ ПРЕДСТАВИТЕЛЬСТВА</Link></button>
                <button className="nav-header__link"><Link to="/projects">ПРОЕКТЫ</Link></button>
                <button className="nav-header__link"><Link to="/contacts">КОНТАКТЫ</Link></button>
            </div>
            <a href="tel:380777398523" className="nav-header__phone"><img src={phone} alt=""/></a>
            <button className="header__burger" onClick={show}></button>
            <button className="header__burger-close" onClick={close}></button>
        </header>
    )
}
export default Header;