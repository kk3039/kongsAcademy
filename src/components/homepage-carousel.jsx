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
                    style={{
                        backgroundImage:
                            'url("https://www.dropbox.com/s/4gpxi082kkgo3ht/home-pic7.jpg?dl=0&raw=1")',
                    }}
                />
                <div
                    className="carousel-item"
                    style={{
                        backgroundImage:
                            'url("https://www.dropbox.com/s/6uowpzhmpuxz52k/home-pic8.jpg?dl=0&raw=1")',
                    }}
                />
                <div
                    className="carousel-item"
                    style={{
                        backgroundImage:
                            'url("https://www.dropbox.com/s/zsjdtetnt8no19o/post-cover.jpg?dl=0&raw=1")',
                    }}
                />
                <div
                    className="carousel-item"
                    style={{
                        backgroundImage:
                            'url("https://www.dropbox.com/s/e5g3hfilno49ksa/home-pic13.jpg?dl=0&raw=1")',
                    }}
                />
            </Carousel>
        );
    }
}
