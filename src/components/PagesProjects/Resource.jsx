import React from 'react'
import { ProjectsNav, Header } from '../index'
import { projectslide1, projectslide2, projectslide3, projectslide4, projectlogo, r1, r2, r3, r4, r5, r6, r7 } from '../img'
import { Link } from 'react-router-dom';

import SwiperCore, { Navigation, EffectCube } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-cube/effect-cube.scss';


SwiperCore.use([ Navigation, EffectCube ]);

function Resource() {
    return (
        <div className="page__company company-page project resource">
            <div className="company-page__bg"></div>
            <div className="company-page__content company-content">
                <Header />
                <div className="company-content__maintitle">РЕСУРС</div>
                <ProjectsNav />
                <section className="project-section container">
                    <div className="project-section__desc">Складской комплекс "Ресурс" - привлекательное предложение на рынке складской недвижимости - комплекс помещений площадью от  50 до 7 500 м 2</div>
                    <div className="project-section__desc">
                        Расположен на 15 км Режевского тракта в 20 минутах езды от г. Екатеринбург, вблизи города-спутника Березовский. 
                        <br/>
                        Территориальная близость к объездным дорогам, удобный съезд с ЕКАД обеспечивает внушительную экономию Вашему бизнесу. До территории комплекса курсирует общественный транспорт - автобусный маршрут №5. Комплекс находится под круглосуточной охраной, оснащен системами видеонаблюдения.</div>
                    <div className="project-section__desc">
                        Характеристика:
                        <ul>
                            <li>- общая площадь 17 Га</li>
                            <li>- две собственные газовые котельные, мощностью 6 МВт и 2 МВт</li>
                            <li>- три трансформаторные подстанции общей мощностью 4 МВт</li>
                        </ul>
                    </div>
                    <div className="project-section__desc">
                        На территории комплекса:
                        <ul>
                            <li>- столовая для персонала и клиентов</li>
                            <li>- вместительная бесплатная парковка</li>
                            <li>- подключение к интернету и телефонии (5 провайдеров)</li>
                            <li>- конференц-зал для проведения переговоров</li>
                            <li>- службы клининга, охраны и безопасности</li>
                            <li>- готовое решение для вашего бизнеса: производство, склад, офис, открытые площадки, услуги погрузки-разгрузки, ответственное хранение</li>
                            <li>- размещение рекламы непосредственно на территории комплекса, а также на щитах ЕКАДа.</li>
                        </ul>
                    </div>
                    <div className="project-section__logo">
                        <img src={projectlogo} alt=""/>
                    </div>
                </section>
                <section className="project-section container">
                    <div className="project-section__slider container">
                        <Swiper effect="cube" navigation setTransition={2000}>
                            <SwiperSlide><div className="project-section__slider-slide"><img src={projectslide1} alt=""/></div></SwiperSlide>
                            <SwiperSlide><div className="project-section__slider-slide"><img src={projectslide2} alt=""/></div></SwiperSlide>
                            <SwiperSlide><div className="project-section__slider-slide"><img src={projectslide3} alt=""/></div></SwiperSlide>
                            <SwiperSlide><div className="project-section__slider-slide"><img src={projectslide4} alt=""/></div></SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className="project-section container">
                    <div className="project-section__tables">
                        <div className="project-section__table">
                            <div className="project-section__table-title">ХАРАКТЕРИСТИКИ ЗЕМЕЛЬНОГО УЧАСТКА</div>
                            <table className="project-section__table-item">
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">ТИПЫ ПОМЕЩЕНИЙ</td>
                                    <td className="project-section__table-text">Складские, производственные, офисные, открытые площадки от 6 до 16 м 2</td>
                                </tr>
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">ПЛОЩАДЬ ПОМЕЩЕНИЙ</td>
                                    <td className="project-section__table-text">от 10 м 2 (офисы) до 10 000 м 2 (складские и производственные помещения)</td>
                                </tr>
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">ТЕЛЕКОММУНИКАЦИИ</td>
                                    <td className="project-section__table-text">телефония и скоростной интернет (3 провайдера услуг)</td>
                                </tr>
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">ПОДВЕДЕНЫ СЕТИ</td>
                                    <td className="project-section__table-text">согласованны технические условия на подключение электроснабжения, водоснабжения, газоснабжения</td>
                                </tr>
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">СПЕЦТЕХНИКА</td>
                                    <td className="project-section__table-text">два мостовых крана на 10 тонн, кран-балка 5 тонн</td>
                                </tr>
                            </table>
                        </div>
                        <div className="project-section__table">
                            <div className="project-section__table-title">ОСУЩЕСТВЛЯЕМЫЕ УСЛУГИ</div>
                            <ul className="project-section__table-list">
                                <li className="project-section__table-li">Технический консалтинг</li>
                                <li className="project-section__table-li">Электроизмерительные работы</li>
                                <li className="project-section__table-li">Техническое обслуживание</li>
                                <li className="project-section__table-li">Служба безопасности</li>
                                <li className="project-section__table-li">Комплексная уборка</li>
                                <li className="project-section__table-li">Администрирование паркинга</li>
                                <li className="project-section__table-li">Обслуживание оборудования</li>
                                <li className="project-section__table-li">Интернет и связь</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="project-section container">
                    <div className="project-section__info">
                        <div className="project-section__info-text">4<span>мостовых крана по 10-12,5 тонн</span></div>
                        <div className="project-section__info-text">1 КМ СЪЕЗД ОТ ЕКАД</div>
                        <div className="project-section__info-text">17 ГА<span>общая площадь</span></div>
                    </div>
                </section>
                <section className="project-section container">
                    <div className="project-section__title">АРЕНДАТОРЫ</div>
                    <div className="project-section__rentors">
                        <div className="project-section__rentors-row">
                            <div className="project-section__rentors-item">
                                <img src={r1} alt=""/>
                            </div>
                            <div className="project-section__rentors-item">
                                <img src={r2} alt=""/>
                            </div>
                            <div className="project-section__rentors-item">
                                <img src={r3} alt=""/>
                            </div>
                            <div className="project-section__rentors-item">
                                <img src={r4} alt=""/>
                            </div>
                        </div>
                        <div className="project-section__rentors-item">
                            <img src={r5} alt=""/>
                        </div>
                        <div className="project-section__rentors-item">
                            <img src={r6} alt=""/>
                        </div>
                        <div className="project-section__rentors-item">
                            <img src={r7} alt=""/>
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
                        <Link to="/projects/dom" className="project-section__box-item">
                            <div className="project-section__box-item-span">Торговый центр</div>
                            <div className="project-section__box-item-title">DOM</div>
                        </Link>
                        <Link to="/projects/energy" className="project-section__box-item">
                            <div className="project-section__box-item-span">Производственный комплекс</div>
                            <div className="project-section__box-item-title">ЭНЕРГО­РЕСУРС</div>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Resource
