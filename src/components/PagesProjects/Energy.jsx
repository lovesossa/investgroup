import React from 'react'
import { ProjectsNav, Header } from '../index'
import { projectslide13, projectslide14, projectslide15 } from '../img'
import { Link } from 'react-router-dom';

import SwiperCore, { Navigation, EffectCube } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-cube/effect-cube.scss';


SwiperCore.use([ Navigation, EffectCube ]);

function Energy() {
    return (
        <div className="page__company company-page project energy">
            <div className="company-page__bg"></div>
            <div className="company-page__content company-content">
                <Header />
                <div className="company-content__maintitle">ЭНЕРГОРЕСУРС</div>
                <ProjectsNav />
                <section className="project-section container">
                    <div className="project-section__desc">Производственный комплекс «ЭНЕРГОРЕСУРС» занимает выгодное месторасположение в Восточной части города Екатеринбурга. Находится на расстоянии 30 км от Челябинского и 35 км от Полевского трактов. Имеет удобный подъезд от ЕКАД (1 км).</div>
                </section>
                <section className="project-section container">
                    <div className="project-section__slider container">
                        <Swiper effect="cube" navigation setTransition={2000}>
                            <SwiperSlide><div className="project-section__slider-slide"><img src={projectslide13} alt=""/></div></SwiperSlide>
                            <SwiperSlide><div className="project-section__slider-slide"><img src={projectslide14} alt=""/></div></SwiperSlide>
                            <SwiperSlide><div className="project-section__slider-slide"><img src={projectslide15} alt=""/></div></SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className="project-section container">
                    <div className="project-section__tables">
                        <div className="project-section__table">
                            <div className="project-section__table-title">ХАРАКТЕРИСТИКИ ОБЪЕКТА</div>
                            <table className="project-section__table-item">
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">ТИПЫ ПОМЕЩЕНИЙ</td>
                                    <td className="project-section__table-text">производственные, складские и офисные</td>
                                </tr>
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">ПЛОЩАДЬ ОТКРЫТЫХ ПЛОЩАДОК</td>
                                    <td className="project-section__table-text">до 20 000 м2</td>
                                </tr>
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">ПЛОЩАДЬ ОФИСНЫХ ПОМЕЩЕНИЙ</td>
                                    <td className="project-section__table-text">от 10 до 200 м2</td>
                                </tr>
                            </table>
                        </div>
                        <div className="project-section__table">
                            <div className="project-section__table-title">ОСУЩЕСТВЛЯЕМЫЕ УСЛУГИ</div>
                            <ul className="project-section__table-list">
                                <li className="project-section__table-li">Аренда помещений</li>
                                <li className="project-section__table-li">Администрирование</li>
                                <li className="project-section__table-li">Комплексная уборка</li>
                            </ul>
                        </div>
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
                <section className="project-section">
                    <div className="project-section__box">
                        <Link to="/projects/resource" className="project-section__box-item">
                            <div className="project-section__box-item-span">Складской комплекс</div>
                            <div className="project-section__box-item-title">РЕСУРС</div>
                        </Link>
                        <Link to="/projects/dom" className="project-section__box-item">
                            <div className="project-section__box-item-span">Торговый центр</div>
                            <div className="project-section__box-item-title">DOM</div>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Energy
