import React from 'react'
import { Link } from 'react-router-dom';

import { Header, ProjectsNav  } from './index'



function Projects() {


    return (
        <div className="page__company company-page projects nav__projects">
            <div className="company-page__bg"></div>
            <div className="company-page__content company-content">
                <Header />
                <div className="company-content__maintitle">PROJECTS &PROPERTY</div>
                <ProjectsNav />

                <section className="company-content__section">
                    <h5 className="company-content__title container">ИНВЕСТИЦИОННЫЕ ПРОЕКТЫ</h5>
                    <p className="company-content__text container">Разрабатываем и реализуем собственные проекты в области коммерческой недвижимости — от стратегии до бюджетирования и девелопмента. Поддерживаем высокую инвестиционную привлекательность этих проектов и привлекаем дополнительное финансирование</p>
                    <a href="/projects/craft">
                        <div className="company-content__inner services-inner">
                            <div className="company-content__inner-wrap container">
                                <div className="company-content__inner-box">
                                    <div className="company-content__inner-info">Индустриальный парк</div>
                                    <div className="company-content__inner-title">CRAFT</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </section>

                <section className="company-content__section management">
                    <h5 className="company-content__title">АКТИВЫ</h5>
                    <p className="company-content__text container">Наши активы насчитывают более 52 тысяч квадратных метров коммерческой недвижимости, управляя которыми мы накопили значительный опыт в данной отрасли</p>
                    <div className="company-content__inner services-inner">
                        <div className="company-content__inner-wrap">
                            <a href="/projects/resource" className="company-content__inner-box">
                                <div className="company-content__inner-info">Cкладской комплекс</div>
                                <div className="company-content__inner-title">РЕСУРС</div>
                            </a>
                            <a href="/projects/dom" className="company-content__inner-box">
                                <div className="company-content__inner-info">Торговый центр</div>
                                <div className="company-content__inner-title">DOM</div>
                            </a>
                            <a href="/projects/energy" className="company-content__inner-box">
                                <div className="company-content__inner-info">Производственный комплекс</div>
                                <div className="company-content__inner-title">ЭНЕРГО­РЕСУРС</div>
                            </a>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Projects;
