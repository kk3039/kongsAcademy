import React from 'react'
export default class JoinUs extends React.Component {
    render() {
        return (
            <div>
                <header
                    className="masthead"
                    style={{ backgroundImage: 'url("img/join-pic6.jpg")' }}
                >
                    <div className="overlay" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <div className="carousel-caption d-none d-md-block">
                                    <h2 className="display-7">
                                        {' '}
                                        <strong> Join us </strong>{' '}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <h2
                                className="display-8_1"
                                style={{ color: 'Gray' }}
                            >
                                {' '}
                                Join · Enjoy · Together{' '}
                            </h2>
                            <p
                                className="display-9"
                                style={{ textAlign: 'justify' }}
                            >
                                <strong>
                                    It is not about a everything-must-see type
                                    of trip. It is about having fun and enjoy
                                    something you love.
                                </strong>{' '}
                                It can be a designated Christmas ski trip in the
                                Rockies, or a weekend outing near where you
                                live. It can be as easy as a <i>girlfriend </i>{' '}
                                hike around Jenny Lake in the Tetons or a
                                multi-day backpacking in Yosemite; it can be a
                                BBQ in a NY state park for a night or sports
                                climbing in the Red River Gorge. We just want to
                                go to the nature and enjoy what it gives us.
                            </p>
                        </div>
                    </div>
                </div>
                <section className="showcase">
                    <div className="container-fluid p-0">
                        <div className="row no-gutters">
                            <div
                                className="col-lg-6 order-lg-2 text-white showcase-img"
                                style={{
                                    backgroundImage: 'url("img/home-test.jpg")',
                                }}
                            />
                            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                <h2>Learn a new sport</h2>
                                <p className="lead mb-0">
                                    {' '}
                                    You will be surprised by how fast you can
                                    learn a sport, e.g., skiing. People usually
                                    tell us it seems impossible to be good at
                                    skiing if not already know how-to by
                                    adulthood, but you know what, a lot of our
                                    friends{' '}
                                    <strong>
                                        only spent a few days learning from us
                                        and started from a
                                        not-know-how-to-ski-at-all to a smooth
                                        comfortable black run.
                                    </strong>{' '}
                                    Learning something new with friends is
                                    extremely fun, so bring a friend or you will
                                    make a few here.{' '}
                                </p>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div
                                className="col-lg-6 text-white showcase-img"
                                style={{
                                    backgroundImage: 'url("img/join-pic3.jpg")',
                                }}
                            />
                            <div className="col-lg-6 my-auto showcase-text">
                                <h2>Weekend outings</h2>
                                <p className="lead mb-0">
                                    {' '}
                                    Getting tired of not knowing what to do over
                                    the weekend? Getting sick of waiting for an
                                    hour to get a table in the city just for a
                                    dinner? Feeling dizzy and tired all the time
                                    because of looking at your phones all the
                                    time? Spend a weekend with us and try
                                    something new.{' '}
                                    <strong>
                                        Only a couple of hours of driving on
                                        Friday night can get you to a beautiful
                                        mountain or a lake in a forest, enjoy
                                        the quiet and the local food with a few
                                        new friends!
                                    </strong>
                                </p>
                            </div>
                        </div>
                        <div className="row no-gutters">
                            <div
                                className="col-lg-6 order-lg-2 text-white showcase-img"
                                style={{
                                    backgroundImage: 'url("img/join-pic4.jpg")',
                                }}
                            />
                            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                <h2> Adventures </h2>
                                <p className="lead mb-0">
                                    {' '}
                                    Getting out of your office, your house, and
                                    your comfort zone, and come join us in an
                                    adventure.{' '}
                                    <strong>
                                        It is a well-organized week-long trip
                                        with one dedicated sport, e.g., a
                                        backpacking trip in the summer or a
                                        skiing trip in the winter.
                                    </strong>{' '}
                                    We will give you an experience that you
                                    never have before, e.g., enjoying the nature
                                    with nobody else but ourselves with beer and
                                    hot dogs!{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* This snippet uses Font Awesome 5 Free as a dependency. You can download it at fontawesome.io! */}
                <section className="pricing py-5 bg-light">
                    <div className="container">
                        <div className="row">
                            {/* Free Tier */}
                            <div className="col-lg-4">
                                <div className="card mb-5 mb-lg-0">
                                    <div className="card-body">
                                        <h5 className="card-title text-muted text-uppercase text-center">
                                            Learn
                                        </h5>
                                        <h6 className="card-price text-center">
                                            How to play
                                        </h6>
                                        <hr />
                                        <ul className="fa-ul">
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                <strong>Single User</strong>
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                <strong>Single day</strong>
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                Pick an activity{' '}
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                Half-day lesson{' '}
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                English/Chinese instructions
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                Safety lessons
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                Video/Picture in motion
                                            </li>
                                            <li className="text-muted">
                                                <span className="fa-li">
                                                    <i className="fas fa-times" />
                                                </span>
                                                Accommodation
                                            </li>
                                            <li className="text-muted">
                                                <span className="fa-li">
                                                    <i className="fas fa-times" />
                                                </span>
                                                Free gear
                                            </li>
                                        </ul>
                                        <a
                                            href="#more-info"
                                            className="btn btn-block btn-primary text-uppercase"
                                        >
                                            More info
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card mb-5 mb-lg-0">
                                    <div className="card-body">
                                        <h5 className="card-title text-muted text-uppercase text-center">
                                            Enjoy
                                        </h5>
                                        <h6 className="card-price text-center">
                                            Easy Weekend
                                        </h6>
                                        <hr />
                                        <ul className="fa-ul">
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                <strong>2-3 days</strong>
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                <strong>
                                                    Group of 2-4 persons
                                                </strong>
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                Pick an activity
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                One-day lesson
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                English/Chinese instructions
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                Safety lessons
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                Video/Picture in motion
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                Accommodation
                                            </li>
                                            <li className="text-muted">
                                                <span className="fa-li">
                                                    <i className="fas fa-times" />
                                                </span>
                                                Free gear
                                            </li>
                                        </ul>
                                        <a
                                            href="#more-info"
                                            className="btn btn-block btn-primary text-uppercase"
                                        >
                                            More info
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Plus Tier */}
                            {/* Pro Tier */}
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title text-muted text-uppercase text-center">
                                            Join
                                        </h5>
                                        <h6 className="card-price text-center">
                                            Adventure
                                        </h6>
                                        <hr />
                                        <ul className="fa-ul">
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                <strong>Multi-days</strong>
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                <strong>
                                                    Up to 10 persons
                                                </strong>
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                Dedicated trip
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                Unlimited lessons
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                English/Chinese instructions
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                Safety lessons
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                Video/Picture in motion
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                Accommodation
                                            </li>
                                            <li>
                                                <span className="fa-li">
                                                    <i className="fas fa-check" />
                                                </span>
                                                Free gear
                                            </li>
                                        </ul>
                                        <a
                                            href="future.html"
                                            className="btn btn-block btn-primary text-uppercase"
                                        >
                                            Check out what's coming
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
