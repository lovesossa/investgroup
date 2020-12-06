import React from 'react'
import { Link } from 'react-router-dom';

function ProjectsNav() {
    return (
        <div className="company-nav">
            <ul className="company-nav__list container">
                <li className="company-nav__link"><Link to="/projects/resource">РЕСУРС</Link></li>
                <li className="company-nav__link"><Link to="/projects/craft">CRAFT</Link></li>
                <li className="company-nav__link"><Link to="/projects/dom">DOM</Link></li>
                <li className="company-nav__link"><Link to="/projects/energy">ЭНЕРГОРЕСУРС</Link></li>
            </ul>
        </div>
    )
}

export default ProjectsNav;
