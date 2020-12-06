import React from 'react'
import { ProjectsNav, Header } from '../index'


function Dom() {
    return (
        <div className="page__company company-page project dom">
            <div className="company-page__bg"></div>
            <div className="company-page__content company-content">
                <Header />
                <div className="company-content__maintitle">DOM</div>
                <ProjectsNav />
                <section className="project-section container">
                    <div className="project-section__desc">ТЦ "DOM" - один из лучших ТЦ в Свердловской области формата Family-mall общей площадью 13 000 м 2. Арендаторы - лидеры рынка строительных материалов, мебели, товаров для дома, одежды, товаров для детей. </div>
                </section>
                <section className="project-section container">
                    <div className="project-section__tables">
                        <div className="project-section__table">
                            <div className="project-section__table-title">ХАРАКТЕРИСТИКИ ОБЪЕКТА</div>
                            <table className="project-section__table-item">
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">ПЛОЩАДЬ ОБЪЕКТА</td>
                                    <td className="project-section__table-text">13 000 кв. м</td>
                                </tr>
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">АРЕНДОПРИГОДНАЯ ПЛОЩАДЬ</td>
                                    <td className="project-section__table-text">9 700 кв. м</td>
                                </tr>
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">ЭТАЖНОСТЬ</td>
                                    <td className="project-section__table-text">2 этажа</td>
                                </tr>
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">ПАРКОВКА</td>
                                    <td className="project-section__table-text">400 мест</td>
                                </tr>
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">ОСНАЩЕННОСТЬ</td>
                                    <td className="project-section__table-text">Грузовой лифт, система вентиляции и кондиционирования.</td>
                                </tr>
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">ТИП ПОЛА</td>
                                    <td className="project-section__table-text">Бетон (наливной, керамогранит)</td>
                                </tr>
                                <tr className="project-section__table-row">
                                    <td className="project-section__table-span">ВЫСОТА ПОМЕЩЕНИЯ</td>
                                    <td className="project-section__table-text">3,2 – 3,5 м армстронг</td>
                                </tr>
                            </table>
                        </div>
                        <div className="project-section__table">
                            <div className="project-section__table-title">ПРЕДЛОЖЕНИЕ ДЛЯ АРЕНДАТОРОВ</div>
                            <ul className="project-section__table-list">
                                <li className="project-section__table-li">целевой клиентский трафик — 3500 человек в день;</li>
                                <li className="project-section__table-li">место в сбалансированной товарной матрице ТЦ;</li>
                                <li className="project-section__table-li">стабильный денежный поток;</li>
                                <li className="project-section__table-li">долгосрочное и эффективное партнерство.</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="project-section container">
                    <div className="project-section__info">
                        <div className="project-section__info-text">13 000<span>кв. м — общая площадь</span></div>
                        <div className="project-section__info-text">УДАЧНАЯ ЛОКАЦИЯ</div>
                        <div className="project-section__info-text">400<span>машино-мест</span></div>
                    </div>
                </section>
                <section className="project-section container">
                <div className="project-section__table">
                            <div className="project-section__table-title">ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</div>
                            <ul className="project-section__table-list">
                                <li className="project-section__table-li">Группы товаров: Стройматериалы; Товары для интерьера; Мебель; Товары для обустройства дачи и сада; Одежда, обувь; игрушки</li>
                                <li className="project-section__table-li">Услуги: доставка; услуги по пошиву и ремонту одежды и др.</li>
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
                <section className="project-section">
                    <div className="project-section__box">
                        <a href="/projects/resource" className="project-section__box-item">
                            <div className="project-section__box-item-span">Cкладской комплекс</div>
                            <div className="project-section__box-item-title">РЕСУРС</div>
                        </a>
                        <a href="/projects/energy" className="project-section__box-item">
                            <div className="project-section__box-item-span">Производственный комплекс</div>
                            <div className="project-section__box-item-title">ЭНЕРГО­РЕСУРС</div>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Dom
