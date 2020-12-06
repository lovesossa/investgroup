import React from 'react'
import { Header } from './index'

function Agency() {

    return (
        <div className="page__company company-page services agency nav__agency">
            <div className="company-page__bg"></div>
            <div className="company-page__content company-content">
                <Header />
                <div className="company-content__maintitle">EFFICIENT PARTNERSHIP</div>
                <section className="company-content__section container">
                    <p className="company-content__subtitle">Планируете развитие в Екатеринбурге или Свердловской области? Ищете офис, складское или производственное помещение, а может быть решились на строительство объекта? ProGroup станет Вашим надежным партнером в поиске решений для Ваших задач: от поиска объекта размещения и разработки концепции до внедрения систем администрирования, найма и обучения персонала.</p>
                </section>
                <section className="company-content__section container">
                    <h5 className="company-content__title">ПРЕИМУЩЕСТВА</h5>
                    <p className="company-content__text">Пять причин работать с нами</p>
                    <div className="company-content__box">
                        <div className="company-content__column">
                            <div className="company-content__column-item">
                                <div className="company-content__column-title">ВАША БЕЗОПАСНОСТЬ - НАШ ПРИОРИТЕТ</div>
                                <div className="company-content__column-text">Комплексный технический аудит любых объектов, оценки потенциала и затрат на строительство или реновацию</div>
                            </div>
                            <div className="company-content__column-item">
                                <div className="company-content__column-title">КАДРЫ РЕШАЮТ ВСЕ</div>
                                <div className="company-content__column-text">Подбор высококвалифицированного персонала — наш конек. Мы понимаем, как важно работать с теми, кто разделяет Ваши ценности</div>
                            </div>
                            <div className="company-content__column-item">
                                <div className="company-content__column-title">СИСТЕМА «ЕДИНОГО ОКНА»</div>
                                <div className="company-content__column-text">упрощение всех бизнес-процессов</div>
                            </div>
                        </div>
                        <div className="company-content__column">
                            <div className="company-content__column-item">
                                <div className="company-content__column-title">ЗНАНИЕ ВНУТРЕННЕГО РЫНКА</div>
                                <div className="company-content__column-text">К вашим услугам только проверенные поставщики и подрядчики с опытом работы от 10 лет</div>
                            </div>
                            <div className="company-content__column-item">
                                <div className="company-content__column-title">КОМПЛЕКСНАЯ ФИНАНСОВО-ЮРИДИЧЕСКАЯ ПОДДЕРЖКА</div>
                                <div className="company-content__column-text">Оценка рисков, ведение договорной и претензионной работы, разработка бизнес-планов и стратегий развития</div>
                            </div>
                        </div>
                    </div>
                    <div className="company-content__quote">МЫ НЕ ЗНАЕМ, ПОЧЕМУ НЕ ПАДАЮТ САМОЛЕТЫ, МЫ НЕ РАССКАЖЕМ ВАМ О ЛУННЫХ ЦИКЛАХ, НО МЫ ТОЧНО ЗНАЕМ НАИЛУЧШИЙ ПУТЬ РАЗВИТИЯ ВАШЕГО БИЗНЕСА В СВЕРДЛОВСКОЙ ОБЛАСТИ. ВАШИ ЦЕННОСТИ — НАШИ ПРИОРИТЕТЫ.</div>
                    <span className="company-content__quote-author">Генеральный директор</span>
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

export default Agency;
