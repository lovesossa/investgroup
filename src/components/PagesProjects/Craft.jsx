import React from 'react'
import { ProjectsNav, Header } from '../index'
import { projectslide5, projectslide6, projectslide7, projectslide8, projectslide9, projectslide10, projectslide11, projectslide12 } from '../img'

import SwiperCore, { Navigation, EffectCube } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-cube/effect-cube.scss';


SwiperCore.use([ Navigation, EffectCube ]);

function Craft() {
    return (
        <div className="page__company company-page project craft">
            <div className="company-page__bg"></div>
            <div className="company-page__content company-content">
                <Header />
                <div className="company-content__maintitle">CRAFT</div>
                <ProjectsNav />
                <section className="project-section container">
                    <div className="project-section__desc">
                        Индустриальный парк CRAFT — площадка для размещения складских и производственных комплексов, а также центров сервиса и ремонта автотранспортных средств, заправочных комплексов в непосредственной близости от международного аэропорта «Кольцово». Парк примыкает к Екатеринбургской кольцевой дороге, соединяющей Екатеринбург и Челябинск.
                        Основные расстояния: 9 км до центра г. Березовский; 17 км до центра города Екатеринбург; 16 км до Аэропорта Кольцово
                    </div>
                    <div className="project-section__desc">Построен и введен в эксплуатацию асфальтированный съезд. Существует возможность строительства ж\д тупика. Перегон между станциями «Энергетическая» и «Заводская».</div>
                </section>
                <section className="project-section container">

                    <div className="project-section__slider container">
                        <Swiper effect="cube" navigation setTransition={2000}>
                            <SwiperSlide><div className="project-section__slider-slide"><img src={projectslide5} alt=""/></div></SwiperSlide>
                            <SwiperSlide><div className="project-section__slider-slide"><img src={projectslide6} alt=""/></div></SwiperSlide>
                            <SwiperSlide><div className="project-section__slider-slide"><img src={projectslide7} alt=""/></div></SwiperSlide>
                            <SwiperSlide><div className="project-section__slider-slide"><img src={projectslide8} alt=""/></div></SwiperSlide>
                            <SwiperSlide><div className="project-section__slider-slide"><img src={projectslide9} alt=""/></div></SwiperSlide>
                            <SwiperSlide><div className="project-section__slider-slide"><img src={projectslide10} alt=""/></div></SwiperSlide>
                            <SwiperSlide><div className="project-section__slider-slide"><img src={projectslide11} alt=""/></div></SwiperSlide>
                            <SwiperSlide><div className="project-section__slider-slide"><img src={projectslide12} alt=""/></div></SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className="project-section container">
                    <div className="project-section__tables">
                        <div className="project-section__table">
                            <div className="project-section__table-title">ХАРАКТЕРИСТИКИ ЗЕМЕЛЬНОГО УЧАСТКА</div>
                            <table className="project-section__table-item">
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">ПЛОЩАДЬ</td>
                                    <td className="project-section__table-text">52 Га</td>
                                </tr>
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">ФАСАДНОСТЬ</td>
                                    <td className="project-section__table-text">на протяжении 1300 м участок непосредственно примыкает к ЕКАД по восточной границе</td>
                                </tr>
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">СЪЕЗД</td>
                                    <td className="project-section__table-text">Построен и введен в эксплуатацию прямой съезд с ЕКАД</td>
                                </tr>
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">ИНЖЕНЕРНЫЕ КОММУНИКАЦИИ</td>
                                    <td className="project-section__table-text">Заключены договоры на проектирование</td>
                                </tr>
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">РАЗРАБОТКА ГЕНПЛАНА</td>
                                    <td className="project-section__table-text">Уральский научно-исследовательский и проектно конструкторский институт Российской академии архитектуры и строительных наук</td>
                                </tr>
                            </table>
                        </div>
                        <div className="project-section__table">
                            <div className="project-section__table-title">ОСУЩЕСТВЛЯЕМЫЕ УСЛУГИ</div>
                            <ul className="project-section__table-list">
                                <li className="project-section__table-li">Анализ рынка коммерческой недвижимости</li>
                                <li className="project-section__table-li">Анализ наилучшего развития территории</li>
                                <li className="project-section__table-li">Разработка финансово-экономической модели</li>
                                <li className="project-section__table-li">Определение и согласование этапов реализации</li>
                                <li className="project-section__table-li">Контроль реализации</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="project-section container">
                    <div className="project-section__info">
                        <div className="project-section__info-text">СКЛАДЫ И ПРОИЗВОДСТВА</div>
                        <div className="project-section__info-text">АВТОЦЕНТРЫ И ЗАПРАВКИ</div>
                    </div>
                </section>
                <section className="project-section container">
                    <div className="project-section__table">
                            <div className="project-section__table-title">КОНЦЕПЦИЯ РАЗВИТИЯ:</div>
                            <ul className="project-section__table-list">
                                <li className="project-section__table-li">Размещение производственно-складских комплексов класса А,В</li>
                                <li className="project-section__table-li">Распределительные центры</li>
                                <li className="project-section__table-li">Организация площадки по сервису и аренде спецтехники</li>
                                <li className="project-section__table-li">Локализация депо обслуживания танк- контейнеров и вагонов</li>
                                <li className="project-section__table-li">Тепличные комплексы и овощехранилища</li>
                            </ul>
                        </div>
                </section>
                <section className="project-section company-content__section contact container">
                    <div className="contact-form__title">СВЯЗАТЬСЯ ПО ОБЪЕКТУ</div>
                    <span className="contact-form__desc">по будням с 9:00 до 18:00</span>
                    <div className="contact-form">
                        <div className="contact-form__box">
                            <a href="tel:73432870000" className="contact-form__box-phone">+7 (343) 287 00 00</a>
                        </div>
                        <div className="contact-form__box">
                            <input type="text" placeholder="ВАШЕ ИМЯ" required />
                            <input type="text" placeholder="ТЕЛЕФОН" required />
                            <button className="contact-form__box-callback">ЗАКАЗАТЬ ЗВОНОК</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Craft
