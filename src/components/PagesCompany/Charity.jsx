import React from 'react'
import { CompanyNav, Header } from '../index'


function Charity() {
    return (
        <div className="page__company company-page charity">
            <div className="company-page__bg"></div>
            <div className="company-page__content company-content">
                <Header />
                <div className="company-content__maintitle">PROTECTION</div>
                <CompanyNav />

                <section className="company-content__section container">
                    <h5 className="company-content__title">О ФОНДЕ</h5>
                    <p className="company-content__text">Фонд создан для объединение ресурсов государственного, коммерческого и некоммерческого секторов Берёзовского городского округа в целях повышения эффективности решения социально значимых проблем и улучшения качества жизни населения.</p>
                    <div className="company-content__desc">До 2010 года основными направлениями деятельности фонда «Благо» были помощь детям-сиротам; помощь семьям, воспитывающим тяжелобольных детей и развитие волонтёрства в Берёзовском городском округе.</div>
                    <div className="company-content__desc">С 2010 года фонд работает по модели ФМС — фонда местного сообщества (community foundation). Главной целью такого фонда является привлечение средств и распределение их на конкурсной основе на поддержку общественно значимых инициатив граждан.</div>
                </section>
                <section className="company-content__section container">
                    <h5 className="company-content__title">ПРОЕКТЫ ФОНДА</h5>
                    <ul className="company-content__desc-list">
                        <li>— Досуг в поселках</li>
                        <li>— Киноклуб</li>
                        <li>— Конкурс грантов «Город своими руками»</li>
                        <li>— Теплый уголок</li>
                        <li>— Центр творчества «Смирнова, 1»</li>
                        <li>— «Экология»</li>
                    </ul>
                    <div className="company-content__desc">Сайт фонда: fond-blago.ru</div>
                </section>

            </div>
        </div>
    )
}

export default Charity
