import React from 'react'
import { Header } from '../components';
import { Link } from 'react-router-dom';
import { slide1, slide2, slide3, slide4, slide5, slide6, slide7, gallery2, gallery3 } from '../components/img'



function Home(zoom) {
    function zoom () {
        var slideIndex = 1;
        showSlides(slideIndex);

        let position = 0;
        const slidesToShow = 1;
        const slidesToScroll = 1;
        const container = document.querySelector('.slider-container');
        const track = document.querySelector('.slider-track');
        const btnPrev = document.querySelector('.slider-btn-prev');
        const btnNext = document.querySelector('.slider-btn-next');
        const items = document.querySelectorAll('.slider-item');
        const sitem1 = document.querySelector('.home-page__slide-first');
        const sitem2 = document.querySelector('.home-page__slide-second');
        const sitem3 = document.querySelector('.home-page__slide-third');
        const sitem4 = document.querySelector('.home-page__slide-fourth');
        const sitem5 = document.querySelector('.home-page__slide-fiveth');

        const itemsCount = items.length;
        const itemHeight = container.clientHeight / 2;
        console.log(itemHeight);
        const movePosition = slidesToScroll * itemHeight;
        
        const setPosition = () => {
            track.style.transform = `translateY(${position}px)`;
        };
    
        const checkBtns = () => {
            btnPrev.disabled = position === 0;
            btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemHeight;

            if (btnPrev.disabled) {
                btnPrev.classList.add('disabled');
            }else {btnPrev.classList.remove('disabled')};
            if (btnNext.disabled) {
                btnNext.classList.add('disabled');
            }else {btnNext.classList.remove('disabled')};
        };

        items.forEach((item) => {
            item.style.minHeight = `${itemHeight}px`;
        });

        function plusSlides(n) {
            showSlides(slideIndex += n);
        };
        function currentSlide(n){
            showSlides(slideIndex = n);
        };
        function showSlides(n){
            var i;
            var slides = document.getElementsByClassName("slider-item");
            var dots = document.getElementsByClassName("slider-dot");
            if (n > slides.length) {
                slideIndex = 1
            }
            if (n < 1) {
                slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++){
                slides[i].className = slides[i].className.replace("active", "");
            }
            slides[slideIndex-1].className += " active";
        };

        btnNext.addEventListener('click', () => {
            const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemHeight) / itemHeight;
            const animstop = document.querySelector('.animstop');
            position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemHeight;
            sitem1.classList.add('anim');
            sitem2.classList.add('anim');
            sitem3.classList.add('anim');
            sitem4.classList.add('anim');
            sitem5.classList.add('anim');
            if (animstop != null) {
                animstop.classList.remove('animstop');
            }
            plusSlides(1);
            setPosition();
            checkBtns();
        });
    
        btnPrev.addEventListener('click', () => {
            const itemsLeft = Math.abs(position) / itemHeight;
            position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemHeight;
            sitem1.classList.add('anim');
            sitem2.classList.add('anim');
            sitem3.classList.add('anim');
            sitem4.classList.add('anim');
            sitem5.classList.add('anim');
            plusSlides(-1);
            setPosition();
            checkBtns();
        });
        
        checkBtns();

    }
    setTimeout(zoom, 0);


    return (
        <main className="page__home home-page" id="wheel">
            <Header />
            <div className="slider-container">
                <div className="slider-track">
                    <div className="slider-item home-page__slide animstop home-page__slide-first">
                        <img src={slide1} alt=""/>
                        <div className="home-page__slide-content slide-content">
                            <h1 className="slide-content__title">INVESTGROUP</h1>
                            <p className="slide-content__text">Девелопмент, консалтинг, управление комерческой недвижимостью. Опыт профессионалов в решении ваших задач.</p>
                            <Link to="/company" className="slide-content__link">О компании</Link>
                        </div>
                    </div>
                    <div className="slider-item home-page__slide home-page__slide-second">
                        <img src={slide2} alt=""/>
                        <div className="home-page__slide-content slide-content">
                            <h1 className="slide-content__title">PROJECT</h1>
                            <p className="slide-content__text">Разрабатываем и реализуем собственные проекты в сфере коммерческой недвижимости. Поддерживаем высокую инвестиционную привлекательность объектов и привлекаем дополнительное финансирование.</p>
                            <Link to="/projects/craft" className="slide-content__link">CRAFT</Link>
                        </div>
                    </div>
                    <div className="slider-item home-page__slide home-page__slide-third">
                        <img className="home-page__slide-third-main" src={slide3} alt="" />
                        <img className="home-page__slide-third-top" src={gallery2} alt=""/>
                        <img className="home-page__slide-third-bot" src={gallery3} alt=""/>
                        <div className="home-page__slide-content slide-content">
                            <h1 className="slide-content__title">PROFESSIONALISM</h1>
                            <p className="slide-content__text">Более 15-ти лет успешного управления коммерческой, складской и производственной недвижимостью. Общая площадь активов под управлением - более 52 тыс. м.кв. Сильные бренды, комфортные условия для арендаторов - лидеров рынка, надежные партнеры, широкие возможности развития. </p>
                            <Link to="/services" className="slide-content__link slide-content__link-one">Инвестиционные услуги</Link>
                            <Link to="/management" className="slide-content__link slide-content__link-two">Управление недвижимостью</Link>
                            <Link to="/agency" className="slide-content__link slide-content__link-three">Услуги представительства</Link>
                        </div>
                    </div>
                    <div className="slider-item home-page__slide home-page__slide-fourth">
                        <Link to="/projects/resource" className="home-page__slide-fourth-left"><img src={slide4} alt=""/></Link>
                        <Link to="/projects/dom" className="home-page__slide-fourth-center"><img src={slide5} alt=""/></Link>
                        <Link to="/projects/energy" className="home-page__slide-fourth-right"><img src={slide6} alt=""/></Link>
                        <div className="home-page__slide-content slide-content">
                            <h1 className="slide-content__title">PROPERTY</h1>
                            <p className="slide-content__text">Наши активы насчитывают более 52 тысяч квадратных метров коммерческой недвижимости, управляя которыми мы накопили значительный опыт в данной отрасли</p>
                        </div>
                    </div>
                    <div className="slider-item home-page__slide home-page__slide-fiveth">
                        <img src={slide7} alt=""/>
                        <div className="home-page__slide-content slide-content">
                            <h1 className="slide-content__title">PROFIT</h1>
                            <p className="slide-content__text">Разрабатываем и реализуем собственные проекты в области коммерческой недвижимости — от стратегии до бюджетирования и девелопмента. Поддерживаем высокую инвестиционную привлекательность этих проектов и привлекаем дополнительное финансирование</p>
                            <Link to="/projects" className="slide-content__link">start</Link>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="slider-buttons">
                <button className="slider-btn-prev"></button>    
                <button className="slider-btn-next"></button>    
            </div>    
        </main>
    )
}

export default Home;
