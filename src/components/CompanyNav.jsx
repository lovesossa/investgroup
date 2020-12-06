import React from 'react'
import { Link } from 'react-router-dom';

function CompanyNav() {
    return (
        <div className="company-nav">
            <ul className="company-nav__list container">
                <li className="company-nav__link"><Link to="/company/appeal">ОБРАЩЕНИЕ ГЕНЕРАЛЬНОГО ДИРЕКТОРА</Link></li>
                <li className="company-nav__link"><Link to="/company/team">КОМАНДА</Link></li>
                <li className="company-nav__link"><Link to="/company/charity">БЛАГОТВОРИТЕЛЬНОСТЬ</Link></li>
                <li className="company-nav__link"><Link to="/company/career">КАРЬЕРА</Link></li>
            </ul>
        </div>
    )
}

export default CompanyNav;
