import React from 'react'
import { CompanyNav, Header } from '../index'
import { team1, team2 } from '../img'

function Team() {
    return (
        <div className="page__company company-page team">
            <div className="company-page__bg"></div>
            <div className="company-page__content company-content">
                <Header />
                <div className="company-content__maintitle">TEAM</div>
                <CompanyNav />
                <section className="company-content__section team-director container">
                    <div className="team-director__title">ГЕНЕРАЛЬНЫЙ ДИРЕКТОР</div>
                    <a href="tel:73432870000" className="team-director__number">+7 (343) 28 70 000</a>
                    <a href="mail:corp@investgroup.pro" className="team-director__email">corp@investgroup.pro</a>
                    
                </section> 
                <section className="company-content__section container">
                    <h5 className="company-content__title">СОТРУДНИКИ</h5>
                    <div className="team-workers">
                        <div className="team-workers__card">
                            <img src={team1} alt=""/>
                            <div className="team-workers__title">НАЧАЛЬНИК ЮР. ДЕПАРТАМЕНТА</div>
                            <a href="tel:79221650304" className="team-workers__card-text">+7 (922) 165 03 04</a>
                            <a href="tel:73432870000" className="team-workers__card-text">+7 (343) 28 70 000</a>
                            <a href="mail:urist@investgroup.pro" className="team-workers__card-text">urist@investgroup.pro</a>
                        </div>
                        <div className="team-workers__card">
                            <img src={team2} alt=""/>
                            <div className="team-workers__title">ГЛАВНЫЙ ИНЖЕНЕР</div>
                            <a href="tel:79126430996" className="team-workers__card-text">+7 (912) 643 09 96</a>
                            <a href="tel:73433840088" className="team-workers__card-text">+7 (343) 384 00 88</a>
                            <a href="mail:glteh@investgroup.pro" className="team-workers__card-text">glteh@investgroup.pro</a>
                        </div>
                        
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Team
