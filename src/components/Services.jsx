import React from 'react'
import { Header } from './index'
import { arrowdown } from './img'

function Company() {
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
    function li4 () {
        const li4 = document.querySelector('.li4');
        li4.classList.toggle('show');
    }
    function li5 () {
        const li5 = document.querySelector('.li5');
        li5.classList.toggle('show');
    }

    return (
        <div className="page__company company-page services nav__services">
            <div className="company-page__bg"></div>
            <div className="company-page__content company-content">
                <Header />
                <div className="company-content__maintitle">CONSULTING & DEVELOPMENT</div>
                <section className="company-content__section container">
                    <p className="company-content__subtitle">Знание рынка коммерческой недвижимости, темпов и трендов его развития — основа нашего успеха. Команда профессионалов c 10ти летним опытом оценки рисков, разработки концепции развития объектов недвижимости, финансового моделирования и стратегического планирования, станет Вашим надежным партнером для реализации любых проектов в Свердловской области.</p>
                </section>
                <section className="company-content__section container">
                    <h5 className="company-content__title">Услуги</h5>
                    <p className="company-content__text">Мы предлагаем полный спектр услуг в области коммерческой недвижимости для собственников, девелоперов и инвесторов</p>
                    <div className="company-content__services services-content">
                        <div className="services-content__item li1">
                            <div className="services-content__item-title">ФИНАНСОВОЕ МОДЕЛИРОВАНИЕ, ПРИВЛЕЧЕНИЕ ФИНАНСИРОВАНИЯ В ПРОЕКТЫ</div>
                            <button className="services-content__item-btn" onClick={li1}><img src={arrowdown} alt=""/></button>
                            <span className="services-content__item-desc">Оптимизация затрат — залог стабильной доходности объекта недвижимости. Поиск партнеров для реализации проектов — наша базовая компетенция.</span>
                        </div>
                        <div className="services-content__item li2">
                            <div className="services-content__item-title">ПОДБОР ОБЪЕКТА ДЛЯ РЕАЛИЗАЦИИ ВАШЕГО ПРОЕКТА</div>
                            <button className="services-content__item-btn" onClick={li2}><img src={arrowdown} alt=""/></button>
                            <span className="services-content__item-desc">Мы умеем не только слушать, но и слышать клиента. Мы знаем все или почти все об объектах недвижимости в регионе и в кратчайшие сроки подберем для Вас оптимальный вариант.</span>
                        </div>
                        <div className="services-content__item li3">
                            <div className="services-content__item-title">АУДИТ И РИСК-МЕНЕДЖМЕНТ</div>
                            <button className="services-content__item-btn" onClick={li3}><img src={arrowdown} alt=""/></button>
                            <span className="services-content__item-desc">Правильно выбранная стратегия развития — как тактика бега. Важно «не загнать» проект на ранних стадиях, чтобы он смог задышать полной грудью на финише. Многоступенчатая система аудита на всех стадиях реализации проекта, оперативный кризис-менеджмент — залог успешности Вашего дела.</span>
                        </div>
                        <div className="services-content__item li4">
                            <div className="services-content__item-title">КОМПЛЕКСНОЕ СОПРОВОЖДЕНИЕ СДЕЛКИ</div>
                            <button className="services-content__item-btn" onClick={li4}><img src={arrowdown} alt=""/></button>
                            <span className="services-content__item-desc">Широкий спектр услуг по сопровождению сделок с недвижимостью. Проверка «юридической чистоты» сделки, изменение категории земель, аудит всех систем коммерческих объектов и др.</span>
                        </div>
                        <div className="services-content__item li5">
                            <div className="services-content__item-title">УПРАВЛЕНИЕ ПРОЕКТОМ НА ВСЕХ ЕГО СТАДИЯХ</div>
                            <button className="services-content__item-btn" onClick={li5}><img src={arrowdown} alt=""/></button>
                            <span className="services-content__item-desc">Мы раскроем потенциал Вашего объекта. Мы имеем опыт в проектировании, строительстве и управлении объектами недвижимости и готовы поделиться с Вами своими знаниями и опытом.</span>
                        </div>
                    </div>
                </section>
                <section className="company-content__section">
                    <h5 className="company-content__title container">ИНВЕСТИЦИОННЫЕ ПРОЕКТЫ</h5>
                    <p className="company-content__text container">Наше кредо - создание уникальных предложений на конкурентных рынках. Высокая загруженность активов в нашем управлении говорит о верно выбранной стратегии развития. И мы не останавливаемся на достигнутом.</p>
                    <div className="company-content__inner services-inner">
                        <div className="company-content__inner-wrap container">
                            <div className="company-content__inner-box">
                                <div className="company-content__inner-info">Индустриальный парк</div>
                                <div className="company-content__inner-title">CRAFT</div>
                            </div>
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

export default Company;
