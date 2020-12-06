import React from 'react'
import { CompanyNav, Header } from './index'
import { company2, company3, company4, company5, company6, company7, client1, client2, client3, client4 } from './img'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay, EffectCube } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-cube/effect-cube.scss';


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay, EffectCube]);


function Company() {

    function addactive () {
        const client = document.querySelector('.company-content__client')
        client.classList.add('show');
    };
    function removeactive () {
        const client = document.querySelector('.company-content__client')
        client.classList.remove('show');
    };

    return (
        <div className="page__company company-page nav__company">
            <div className="company-page__bg"></div>
            <div className="company-page__content company-content">
                <Header />
                <div className="company-content__maintitle">INVESTGROUP</div>
                <CompanyNav />
                <section className="company-content__section container">
                    <h5 className="company-content__title">INVESTGROUP COMPANY</h5>
                    <p className="company-content__text">При грамотном управлении и адекватной оценке рисков инвестиции в коммерческую недвижимость способны не только сохранить, но и приумножить ваше финансовое состояние. Группа компаний Investgroup — это команда профессионалов, которая более 10 лет осуществляет консалтинг девелоперских проектов</p>
                    <div className="company-content__slider">
                        <Swiper effect="cube" navigation setTransition={2000}>
                            <SwiperSlide><div className="company-content__slider-slide"><img src={company2} alt=""/></div></SwiperSlide>
                            <SwiperSlide><div className="company-content__slider-slide"><img src={company3} alt=""/></div></SwiperSlide>
                            <SwiperSlide><div className="company-content__slider-slide"><img src={company4} alt=""/></div></SwiperSlide>
                            <SwiperSlide><div className="company-content__slider-slide"><img src={company5} alt=""/></div></SwiperSlide>
                            <SwiperSlide><div className="company-content__slider-slide"><img src={company6} alt=""/></div></SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className="company-content__section container">
                    <h5 className="company-content__title">ЦЕННОСТИ КОМПАНИИ</h5>
                    <p className="company-content__text">За годы работы компании Investgroup сложилась система ценностей, которая позволила заслужить безупречную рекомендацию у своих партнеров и клиентов</p>
                    <div className="company-content__box">
                        <div className="company-content__column">
                            <div className="company-content__column-item">
                                <div className="company-content__column-title">СООТВЕТСТВИЕ СТАНДАРТАМ</div>
                                <div className="company-content__column-text">Мы грамотно подходим к определению реальной рыночной стоимости объекта. Наши профессионалы работают в полном соответствии с российскими и мировыми стандартами</div>
                            </div>
                            <div className="company-content__column-item">
                                <div className="company-content__column-title">УВЕЛИЧЕНИЕ ВАШЕЙ ПРИБЫЛИ</div>
                                <div className="company-content__column-text">Для нас важна детальная разработка стратегии развития проекта. Даже в условиях нестабильного рынка мы минимизируем ваши затраты и увеличим прибыль</div>
                            </div>
                        </div>
                        <div className="company-content__column">
                            <div className="company-content__column-item">
                            <ul> 
                                <li className="company-content__column-title">ЭФФЕКТИВНОЕ УПРАВЛЕНИЕ</li> 
                                <li className="company-content__column-text">Корректировка концепции объекта</li>
                                <li className="company-content__column-text">Услуга по оказанию брокериджа</li>
                                <li className="company-content__column-text">Разработка и реализация рекламной и PR-компаний объекта</li>
                                <li className="company-content__column-text">Услуга по коммерческому управлению объектом</li>
                                <li className="company-content__column-text">Комплексный технический аудит</li>
                                <li className="company-content__column-text">Комплексная услуга по технической эксплуатации объекта</li>
                            </ul>
                            </div>
                            <div className="company-content__column-item">
                                <div className="company-content__column-title">БЕЗОПАСНОСТЬ</div>
                                <div className="company-content__column-text">Мы понимаем риски и ценим Ваше доверие, поэтому мы консультируем и сопровождаем сделку с начала переговоров до её полного юридического оформления</div>
                            </div>
                        </div>
                    </div>
                    <div className="company-content__quote">СНИЗИТЬ ИЗДЕРЖКИ ПО СОДЕРЖАНИЮ ВАШЕЙ КОММЕРЧЕСКОЙ НЕДВИЖИМОСТИ И ПОВЫСИТЬ ЕЕ ПРИВЛЕКАТЕЛЬНОСТЬ НА РЫНКЕ — НАША ОБЩАЯ ЦЕЛЬ</div>
                    <span className="company-content__quote-author">Генеральный директор</span>
                </section>
                <section className="company-content__section">
                    <h5 className="company-content__title">ИСТОРИЯ СТАНОВЛЕНИЯ</h5>
                    <div className="company-content__map">
                        <div style={{position:'relative',overflow:'hidden'}}><a href="https://yandex.ru/maps?utm_medium=mapframe&utm_source=maps" style={{color:'#eee',fontSize:12+'px',position:'absolute',top:0+'px'}}></a><a href="https://yandex.ru/maps/profile?from=api-maps&l=sat&ll=61.521088%2C56.651208&origin=jsapi_2_1_77&pt=60.790795%2C56.874233~60.766356361159%2C56.922392830947~60.771411%2C56.920949~61.860485%2C56.427451&utm_medium=mapframe&utm_source=maps&z=9" style={{color:'#eee',fontSize:12+'px',position:'absolute',top:14+'px'}}></a><iframe src="https://yandex.ru/map-widget/v1/-/CCUEMABwxA" width="100%" height="400" frameborder="1" allowfullscreen="true" style={{position:'relative'}}></iframe></div>
                    </div>
                    <p className="company-content__text align-left container">15 лет назад мы начали свою деятельность, приобретя объект площадью 1700 квадратных метров. Ежедневно мы работали над собой и над процессами внутри компании, проверяя наши действия на наших объектах и решая сопутствующие вопросы, например, юридического и финансового характера. Постоянно оттачивая наши процессы, мы смогли стабильно развиваться и приобрести к 2015 году 52 000 квадратных метров коммерческой недвижимости. Накопленные опытным путем знания, отлаженная работа внутри компании сейчас позволяет нам успешно реализовать пожелания клиента.</p>
                    <div className="company-content__inner">
                        <div className="company-content__inner-wrap">
                            <div className="company-content__inner-box">
                                <div className="company-content__inner-title">63 ГЕКТАРА</div>
                                <div className="company-content__inner-info">земли в собственности компании</div>
                            </div>
                            <div className="company-content__inner-box">
                                <div className="company-content__inner-title">100 000</div>
                                <div className="company-content__inner-info">м 2 реконструировано под нужды заказчиков</div>
                            </div>
                            <div className="company-content__inner-box">
                                <div className="company-content__inner-title">5 000</div>
                                <div className="company-content__inner-info">компаний являются нашими клиентами или арендаторами</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="company-content__section container">
                    <h5 className="company-content__title">НАШИ КЛИЕНТЫ</h5>
                    <div className="company-content__client">
                        <div className="company-content__client-row">
                            <div className="company-content__client-card client-card">
                                <div className="client-card__logo"><img src={client1} alt=""/></div>
                                <div className="client-card__text">ООО «Торговый Дом» выражает благодарность Производственно-Складскому Комплексу «РЕСУРС» за надежное и плодотворное сотрудничество, своевременный и ответственный подход к решению вопросов. Ценим сложившиеся деловые и дружеские отношения, надеемся на дальнейшее сотрудничество.</div>
                                <div className="client-card__author">Степанов М.В., начальник склада ООО «Торговый Дом»</div>
                                <div className="client-card__btn">Полный отзыв</div>
                            </div>
                            <div className="company-content__client-card client-card">
                                <div className="client-card__logo"><img src={client2} alt=""/></div>
                                <div className="client-card__text">Выражаем искреннюю благодарность администрации складского комплекса «Ресурс» за многолетнее сотрудничество. Желаем процветания вашему бизнесу и дальнейшего развития партнерских отношений.</div>
                                <div className="client-card__author">Воронин А.С., директор АО «Связной Логистика»</div>
                                <div className="client-card__btn">Полный отзыв</div>
                            </div>
                            <div className="company-content__client-card client-card">
                                <div className="client-card__logo"><img src={client3} alt=""/></div>
                                <div className="client-card__text">Копировальный центр «Таймер» выражает искреннюю благодарность и глубокую признательность за сотрудничество группе компаний Investgroup. Мы рады, что в качестве партнера мы выбрали именно вас!</div>
                                <div className="client-card__author">Михайлик Т.Н., директор ООО «Таймер-КЦ»</div>
                                <div className="client-card__btn">Полный отзыв</div>
                            </div>
                            <div className="company-content__client-card client-card">
                                <div className="client-card__logo"><img src={client3} alt=""/></div>
                                <div className="client-card__text">Копировальный центр «Таймер» выражает искреннюю благодарность и глубокую признательность за сотрудничество группе компаний Investgroup. Мы рады, что в качестве партнера мы выбрали именно вас!</div>
                                <div className="client-card__author">Михайлик Т.Н., директор ООО «Таймер-КЦ»</div>
                                <div className="client-card__btn">Полный отзыв</div>
                            </div>
                        </div>
                        <div className="company-content__client-hide">
                            <div className="company-content__client-row">
                                <div className="company-content__client-card client-card">
                                    <div className="client-card__logo"><img src={client4} alt=""/></div>
                                    <div className="client-card__text">Уважаемый Вадим Станиславович! Выражаем Вам нашу искреннюю благодарность и глубокую признательность за плодотворное сотрудничество в уходящем 2017 году. Мы верим, что дальнейшее развитие сложившихся деловых отношений откроет перед нашими компаниями новые перспективы и поможет в решении совместных задач. Желаем успешного развития и достижения новых вершин в бизнесе!</div>
                                    <div className="client-card__author">Филиппов С.Н., генеральный диреткор ООО «Ойл Энерджи Продакшн»</div>
                                    <div className="client-card__btn">Полный отзыв</div>
                                </div>
                            </div>
                        </div>
                    <div className="company-content__show" onClick={addactive}>Показать все</div>
                    <div className="company-content__сlose" onClick={removeactive}>Свернуть</div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Company;
