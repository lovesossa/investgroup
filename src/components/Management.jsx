import React from 'react'
import { Header } from './index'
import { arrowdown } from './img'
import { Link } from 'react-router-dom';

function Management() {
    function li1 () {
        const li1 = document.querySelector('.li1');
        li1.classList.toggle('show');
    }
    function li2 () {
        const li2 = document.querySelector('.li2');
        li2.classList.toggle('show');
    }
    function li3 () {
        const li3 = document.querySelector('.li3');
        li3.classList.toggle('show');
    }

    return (
        <div className="page__company company-page services management nav__management">
            <div className="company-page__bg"></div>
            <div className="company-page__content company-content">
                <Header />
                <div className="company-content__maintitle">PROPERTY MANAGEMENT</div>
                <section className="company-content__section container">
                    <p className="company-content__subtitle">Недвижимость может быть как выгодным объектом вложения капитала, так и источником проблем для инвестора. Очень часто недвижимость, не использующаяся собственником в личных целях и не нашедшая спроса в аренде, становится неприятной статьей расходов в бюджете собственника. В такой ситуации имеет смысл обратиться в надежную управляющую компанию по недвижимости</p>
                </section>
                <section className="company-content__section container">
                    <h5 className="company-content__title">Услуги</h5>
                    <p className="company-content__text">Мы предлагаем содержание и развитие объекта недвижимости в соответствии с его назначением</p>
                    <div className="company-content__services services-content">
                        <div className="services-content__item li1">
                            <div className="services-content__item-title">КОНСАЛТИНГ</div>
                            <button className="services-content__item-btn" onClick={li1}><img src={arrowdown} alt=""/></button>
                            <ul className="services-content__item-desc">
                                <li className="services-content__item-li"><span>01</span>Консультирование по приобретению коммерческой недвижимости и полное сопровождение сделок: аудит объекта, оценка рисков и потенциала для реконцепции, полное юридическое сопровождение сделки</li>
                                <li className="services-content__item-li"><span>02</span>Комплексное управление объектами недвижимости: кризис-менеджмент, реконцепция, оперативный поиск арендаторов, технический аудит и реновация</li>
                                <li className="services-content__item-li"><span>03</span>PR, Marketing сопровождение проекта</li>
                                <li className="services-content__item-li"><span>04</span>Аудит операционных расходов, рекомендации по оптимизации затрат</li>
                                <li className="services-content__item-li"><span>05</span>GR-сопровождение проекта - взаимодействие с государственными органами и контролирующими инстанциями</li>
                            </ul>
                        </div>
                        <div className="services-content__item li2">
                            <div className="services-content__item-title">ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ И ЭКСПЛУАТАЦИЯ ОБЪЕКТА</div>
                            <button className="services-content__item-btn" onClick={li2}><img src={arrowdown} alt=""/></button>
                            <ul className="services-content__item-desc">
                                <li className="services-content__item-li"><span>01</span>Технический аудит, рекомендации по оптимизации расходов на эксплуатацию объекта</li>
                                <li className="services-content__item-li"><span>02</span>Разработка регламентов</li>
                                <li className="services-content__item-li"><span>03</span>Разработка и утверждение тарифной политики</li>
                                <li className="services-content__item-li"><span>04</span>Услуги эксплуатации инженерных сетей, мониторинга качества предоставляемых ресурсов</li>
                                <li className="services-content__item-li"><span>05</span>Клининг и благоустройство прилегающей территории</li>
                            </ul>
                        </div>
                        <div className="services-content__item li3">
                            <div className="services-content__item-title">БРОКЕРИДЖ</div>
                            <button className="services-content__item-btn" onClick={li3}><img src={arrowdown} alt=""/></button>
                            <ul className="services-content__item-desc">
                                <li className="services-content__item-li"><span>01</span>Переговоры, формирование пула ключевых арендаторов</li>
                                <li className="services-content__item-li"><span>02</span>Быстрая "загрузка" объекта в соответствии с концепцией</li>
                                <li className="services-content__item-li"><span>03</span>Разработка стратегии развития, формирование "листа ожидания"</li>
                                <li className="services-content__item-li"><span>04</span>Ведение договорной и претензионной работы</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="company-content__section">
                    <h5 className="company-content__title">ОБЪЕКТЫ</h5>
                    <p className="company-content__text container">Наши объекты являются наглядным подтверждением того, что мы идем в правильном направлении и умеем использовать имеющиеся ресурсы максимально результативно и плодотворно. Все объекты в своей конкурентной среде выглядит выигрышно и органично вписывается в конъюнктуру каждого конкретного рынка</p>
                    <div className="company-content__inner services-inner">
                        <div className="company-content__inner-wrap">
                            <Link to="/projects/resource" className="company-content__inner-box">
                                <div className="company-content__inner-info">Cкладской комплекс</div>
                                <div className="company-content__inner-title">РЕСУРС</div>
                            </Link>
                            <Link to="/projects/dom" className="company-content__inner-box">
                                <div className="company-content__inner-info">Торговый центр</div>
                                <div className="company-content__inner-title">DOM</div>
                            </Link>
                            <Link to="/projects/energy" className="company-content__inner-box">
                                <div className="company-content__inner-info">Производственный комплекс</div>
                                <div className="company-content__inner-title">ЭНЕРГО­РЕСУРС</div>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="company-content__section contact container">
                    <div className="contact-form__title">СВЯЗАТЬСЯ ПО УСЛУГЕ</div>
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

export default Management;
