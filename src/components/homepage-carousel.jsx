import React from 'react';
import Carousel from 'react-material-ui-carousel';
import '../css/carousel.scss';

export default class HomepageCarousel extends React.Component {
    render() {
        return (
            <Carousel
                className="carousel"
                slidesPerScroll={1}
                slidesPerPage={1}
                infinite
                arrows
            >
                <div
                    className="carousel-item"
                    style={{ backgroundImage: 'url("img/home-pic7.jpg")' }}
                />
                <div
                    className="carousel-item"
                    style={{ backgroundImage: 'url("img/home-pic8.jpg")' }}
                />
                <div
                    className="carousel-item"
                    style={{ backgroundImage: 'url("img/post-cover.jpg")' }}
                />
                <div
                    className="carousel-item"
                    style={{ backgroundImage: 'url("img/home-pic13.jpg")' }}
                />
            </Carousel>
        );
    }
}
