import React from 'react'
export default class UpcomingTrips extends React.Component {
    render() {
        return (
            <div>
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center text-center">
                            <div className="col-lg-10 align-self-end">
                                <h1 className="text-uppercase text-white font-weight-bold">
                                    {' '}
                                    Ready for your new adventure?
                                </h1>
                                <hr className="divider my-4" />
                            </div>
                            <div className="col-lg-8 align-self-baseline">
                                <p className="text-white-75 font-weight-light mb-5">
                                    You are only 30 seconds away from your next
                                    adventure at one of the best ski resorts in
                                    the world this coming winter holiday.{' '}
                                </p>
                                <a
                                    className="btn btn-primary btn-xl js-scroll-trigger"
                                    href="contact.html"
                                >
                                    Sign up now
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Services Section */}
                <section className="page-section" id="services">
                    <div className="container">
                        <h2 className="text-center mt-0">
                            What you need to know{' '}
                        </h2>
                        <hr className="divider my-4" />
                        <div className="row">
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-mountain text-primary mb-4" />
                                    <h3 className="h4 mb-2">Colorado U.S</h3>
                                    <p className="text-muted mb-0">
                                        {' '}
                                        <strong>
                                            {' '}
                                            2019 Dec 27 - 2020 Jan 1.{' '}
                                        </strong>
                                    </p>
                                    <p className="text-muted mb-0">
                                        {' '}
                                        Ikon resorts: Winter park, Copper
                                        Mountain, and more
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-calendar-alt text-primary mb-4" />
                                    <h3 className="h4 mb-2">
                                        No need of planning
                                    </h3>
                                    <p className="text-muted mb-0">
                                        Airport to airport service. We plan, you
                                        come! 30 seconds sign-up
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-school text-primary mb-4" />
                                    <h3 className="h4 mb-2">Experience</h3>
                                    <p className="text-muted mb-0">
                                        {' '}
                                        Ski with experienced skier from
                                        different backgrounds. You may learn
                                        more than just skiing!
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <i className="fas fa-4x fa-heart text-primary mb-4" />
                                    <h3 className="h4 mb-2">Gifts</h3>
                                    <p className="text-muted mb-0">
                                        <strong>
                                            Free skis for the first 10 sign-ups
                                        </strong>{' '}
                                        and a free half-day lesson from
                                        professional ski instructors
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Portfolio Section */}
                <section id="portfolio">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                            <div className="col-lg-4 col-sm-6">
                                <a
                                    className="portfolio-box"
                                    href="img/portfolio/fullsize/1.jpg"
                                >
                                    <img
                                        className="img-fluid"
                                        src="img/portfolio/thumbnails/1.jpg"
                                        alt=""
                                    />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Kong's Academy
                                        </div>
                                        <div className="project-name">
                                            Okemo, VT
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a
                                    className="portfolio-box"
                                    href="img/portfolio/fullsize/2.jpg"
                                >
                                    <img
                                        className="img-fluid"
                                        src="img/portfolio/thumbnails/2.jpg"
                                        alt=""
                                    />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Kong's Academy
                                        </div>
                                        <div className="project-name">
                                            Keystone, CO
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a
                                    className="portfolio-box"
                                    href="img/portfolio/fullsize/3.jpg"
                                >
                                    <img
                                        className="img-fluid"
                                        src="img/portfolio/thumbnails/3.jpg"
                                        alt=""
                                    />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Kong's Academy
                                        </div>
                                        <div className="project-name">
                                            Vail, CO
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a
                                    className="portfolio-box"
                                    href="img/portfolio/fullsize/4.jpg"
                                >
                                    <img
                                        className="img-fluid"
                                        src="img/portfolio/thumbnails/4.jpg"
                                        alt=""
                                    />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Kong's Academy
                                        </div>
                                        <div className="project-name">
                                            Snowbird, UT
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a
                                    className="portfolio-box"
                                    href="img/portfolio/fullsize/5.jpg"
                                >
                                    <img
                                        className="img-fluid"
                                        src="img/portfolio/thumbnails/5.jpg"
                                        alt=""
                                    />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">
                                            Kong's Academy
                                        </div>
                                        <div className="project-name">
                                            Lake Tahoe, CA
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a
                                    className="portfolio-box"
                                    href="img/portfolio/fullsize/6.jpg"
                                >
                                    <img
                                        className="img-fluid"
                                        src="img/portfolio/thumbnails/6.jpg"
                                        alt=""
                                    />
                                    <div className="portfolio-box-caption p-3">
                                        <div className="project-category text-white-50">
                                            Kong's Academy
                                        </div>
                                        <div className="project-name">
                                            Zermatt, Swiss
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
