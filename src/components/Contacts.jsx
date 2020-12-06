import React from 'react'
import { Header } from './index'

function Contacts() {

    function nav1() {
        const maps = document.querySelector('.contacts-maps');
        maps.classList.add('nav1');
        maps.classList.remove('nav2', 'nav3', 'nav4');
    };
    function nav2() {
        const maps = document.querySelector('.contacts-maps');
        maps.classList.add('nav2');
        maps.classList.remove('nav1', 'nav3', 'nav4');
    };
    function nav3() {
        const maps = document.querySelector('.contacts-maps');
        maps.classList.add('nav3');
        maps.classList.remove('nav1', 'nav2', 'nav4');
    };
    function nav4() {
        const maps = document.querySelector('.contacts-maps');
        maps.classList.add('nav4');
        maps.classList.remove('nav1', 'nav2', 'nav3');
    };


    return (
        <div className="page__company company-page contacts nav__contacts">
            <div className="company-page__bg"></div>
            <div className="company-page__content company-content">
                <Header />
                <div className="company-content__maintitle">КОНТАКТЫ</div>
                <section className="company-content__section container">
                    <div className="contacts-card">
                        <div className="contacts-card__map">
                            <div style={{position:'relative',overflow:'hidden'}}><a href="https://yandex.ru/maps/54/yekaterinburg/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:12+'px',position:'absolute',top:0+'px',border: "none"}}></a><a href="https://yandex.ru/maps/profile?l=sat&ll=60.590653%2C56.846289&utm_medium=mapframe&utm_source=maps&z=17" style={{color:'#eee',fontSize:12+'px',position:'absolute',top:14+'px',border: "none"}}></a><iframe src="https://yandex.ru/map-widget/v1/-/CCUEYAxX-D" width="100%" height="420" frameborder="1" allowfullscreen="true" style={{position:'relative',border: "none"}}></iframe></div>
                        </div>
                        <div className="contacts-card__content">
                            <div className="contacts-card__content-title">ГЛАВНЫЙ ОФИС ГРУППЫ КОМПАНИЙ INVESTGROUP</div>
                            <div className="contacts-card__content-index"><span>ИНДЕКС</span>620014</div>
                            <div className="contacts-card__content-index"><span>АДРЕС</span>г. Екатеринбург, БЦ «Президент», ул. Бориса Ельцина,1а, офис 10.7</div>
                            <div className="contacts-card__content-index"><span>ТЕЛЕФОН</span>8 (343) 287-00-00</div>
                            <div className="contacts-card__content-text contact-form__box-callback">НАПИСАТЬ НАМ</div>
                        </div>
                    </div>
                </section>
                <section className="company-content__section container contacts-maps nav1">
                    <h5 className="company-content__title">ОБЪЕКТЫ</h5>
                    <div className="contacts-card__nav">
                        <div className="contacts-card__nav-item contacts-card__nav-item1" onClick={nav1}>DOM</div>
                        <div className="contacts-card__nav-item contacts-card__nav-item2" onClick={nav2}>ЭНЕРГОРЕСУРС</div>
                        <div className="contacts-card__nav-item contacts-card__nav-item3" onClick={nav3}>CRAFT</div>
                        <div className="contacts-card__nav-item contacts-card__nav-item4" onClick={nav4}>РЕСУРС</div>
                    </div>
                    <div className="contacts-card contacts-card1">
                        <div className="contacts-card__content">
                            <div className="contacts-card__content-title">ТОРГОВЫЙ ЦЕНТР DOM</div>
                            <div className="contacts-card__content-index"><span>ИНДЕКС</span>623414</div>
                            <div className="contacts-card__content-index"><span>АДРЕС</span>Свердловская область. г. Каменск-Уральский, ул. Лермонтова, 83а</div>
                            <div className="contacts-card__content-index"><span>ТЕЛЕФОН</span>8 (3439) 378-314</div>
                            <div className="contacts-card__content-index"><span>E-MAIL</span>antonova@progroup.pro</div>
                        </div>
                        <div className="contacts-card__map">
                            <div style={{position:'relative',overflow:'hidden'}}><a href="https://yandex.ru/maps/11164/kamensk-uralskiy/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:12+'px',position:'absolute',top:0+'px',border: "none"}}></a><a href="https://yandex.ru/maps/11164/kamensk-uralskiy/house/ulitsa_lermontova_83a/YkgYfgFgSk0OQFtsfXhzdnhjbA==/?l=sat&ll=61.864664%2C56.427548&utm_medium=mapframe&utm_source=maps&z=16" style={{color:'#eee',fontSize:12+'px',position:'absolute',top:14+'px',border: "none"}}></a><iframe src="https://yandex.ru/map-widget/v1/-/CCUEYIsAoC" width="100%" height="420" frameborder="0" allowfullscreen="true" style={{position:'relative',border: "none"}}></iframe></div>
                        </div>
                    </div>
                    <div className="contacts-card contacts-card2">
                        <div className="contacts-card__content">
                            <div className="contacts-card__content-title">ЭНЕРГО­РЕСУРС</div>
                            <div className="contacts-card__content-index"><span>ИНДЕКС</span>623700</div>
                            <div className="contacts-card__content-index"><span>АДРЕС</span>г. Березовский, Режевской тракт 15 км</div>
                            <div className="contacts-card__content-index"><span>ТЕЛЕФОН</span>+7 (343) 384 00 88</div>
                        </div>
                        <div className="contacts-card__map">
                            <div style={{position:'relative',overflow:'hidden'}}><a href="https://yandex.ru/maps/29397/berezovskyi/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:12+'px',position:'absolute',top:0+'px',border: "none"}}></a><a href="https://yandex.ru/maps/29397/berezovskyi/?l=sat&ll=60.768758%2C56.920378&mode=routes&rtext=~56.920700%2C60.771665&rtt=auto&ruri=~&utm_medium=mapframe&utm_source=maps&z=16" style={{color:'#eee',fontSize:12+'px',position:'absolute',top:14+'px',border: "none"}}></a><iframe src="https://yandex.ru/map-widget/v1/-/CCUEYIHnGA" width="100%" height="420" frameborder="0" allowfullscreen="true" style={{position:'relative',border: "none"}}></iframe></div>
                        </div>
                    </div>
                    <div className="contacts-card contacts-card3">
                        <div className="contacts-card__content">
                            <div className="contacts-card__content-title">ИНДУСТРИАЛЬНЫЙ ПАРК CRAFT</div>
                            <div className="contacts-card__content-index"><span>АДРЕС</span>ЕКАД 17 км, 1</div>
                            <div className="contacts-card__content-index"><span>ТЕЛЕФОН</span>+7 343 287-00-00</div>
                        </div>
                        <div className="contacts-card__map">
                            <div style={{position:'relative',overflow:'hidden'}}><a href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:12+'px',position:'absolute',top:0+'px',border: "none"}}></a><a href="https://yandex.ru/maps/11162/sverdlovsk-oblast/geo/yekad_17_y_kilometr/2063842314/?l=sat&ll=60.805518%2C56.862877&utm_medium=mapframe&utm_source=maps&z=14" style={{color:'#eee',fontSize:12+'px',position:'absolute',top:14+'px',border: "none"}}></a><iframe src="https://yandex.ru/map-widget/v1/-/CCUEYIdpkA" width="100%" height="420" frameborder="0" allowfullscreen="true" style={{position:'relative',border: "none"}}></iframe></div>
                        </div>
                    </div>
                    <div className="contacts-card contacts-card4">
                        <div className="contacts-card__content">
                            <div className="contacts-card__content-title">СКЛАДСКОЙ КОМПЛЕКС «РЕСУРС»</div>
                            <div className="contacts-card__content-index"><span>ИНДЕКС</span>623700</div>
                            <div className="contacts-card__content-index"><span>АДРЕС</span>г. Березовский, Режевской тракт 15 км</div>
                            <div className="contacts-card__content-index"><span>ТЕЛЕФОН</span>+7 (343) 384 00 88</div>
                        </div>
                        <div className="contacts-card__map">
                            <div style={{position:'relative',overflow:'hidden'}}><a href="https://yandex.ru/maps/29397/berezovskyi/?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:12+'px',position:'absolute',top:0+'px',border: "none"}}></a><a href="https://yandex.ru/maps/29397/berezovskyi/?l=sat&ll=60.760626%2C56.920769&mode=routes&rtext=~56.922230%2C60.766645&rtt=auto&ruri=~&utm_medium=mapframe&utm_source=maps&z=16" style={{color:'#eee',fontSize:12+'px',position:'absolute',top:14+'px',border: "none"}}></a><iframe src="https://yandex.ru/map-widget/v1/-/CCUEYMAedC" width="100%" height="420" frameborder="1" allowfullscreen="true" style={{position:'relative',border: "none"}}></iframe></div>
                        </div>
                    </div>
                </section>
            
            </div>
        </div>
    )
}

export default Contacts;
