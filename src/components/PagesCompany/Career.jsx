import React from 'react'
import { CompanyNav, Header } from '../index'


function Career() {
    return (
        <div className="page__company company-page career">
            <div className="company-page__bg"></div>
            <div className="company-page__content company-content">
                <Header />
                <div className="company-content__maintitle">PROGRESS</div>
                <CompanyNav />

                <section className="company-content__section">
                    <h5 className="company-content__title container">КАРЬЕРА</h5>
                    <p className="company-content__text container">
                        Вы имеете опыт продаж или управления недвижимостью? Вы полны энтузиазма и готовы предлагать и отстаивать смелые концепции?
                        Давайте работать вместе! Команда профессионалов ГК Investgroup всегда рада обсудить перспективы сотрудничества.</p>
                </section>

            </div>
        </div>
    )
}

export default Career
