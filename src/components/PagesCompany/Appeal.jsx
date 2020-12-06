import React from 'react'
import { CompanyNav, Header } from '../index'

function Appeal() {
    return (
        <div className="page__company company-page appeal">
            <div className="company-page__bg"></div>
            <div className="company-page__content company-content">
                <Header />
                <div className="company-content__maintitle">PROPOSITION</div>
                <CompanyNav />

                <section className="company-content__section">
                    <h5 className="company-content__title container">УВАЖАЕМЫЕ КЛИЕНТЫ, ПАРТНЕРЫ И КОЛЛЕГИ,</h5>
                    <p className="company-content__text container">От лица группы компании «Progroup» я благодарю вас за неоценимый вклад каждого из вас в ее развитие и за плодотворное сотрудничество.</p>
                    <div className="company-content__desc container">Мы — команда опытных профессионалов, которые осуществляют проектный консалтинг девелоперских проектов, основным принципом нашей деятельности является индивидуальный подход к каждому клиенту. Наша компания последовательно расширяет сферу своей деятельности, масштабы ведения бизнеса и географию присутствия.</div>
                    <div className="company-content__desc container">Наше кредо: максимальная отдача оптимальными ресурсами.</div>
                </section>

            </div>
        </div>
    )
}

export default Appeal
