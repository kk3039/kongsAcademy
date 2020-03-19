import React from 'react'

export default class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <img src="../public/img/join-pic2.jpg"></img>
                    <strong> About us </strong>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <h2
                                    className="display-8"
                                    style={{ color: 'Gray' }}
                                >
                                    {' '}
                                    Networking · Adventures · Lifestyle{' '}
                                </h2>
                                <p
                                    className="display-9"
                                    style={{ textAlign: 'justify' }}
                                >
                                    We aim to focus on building connection and
                                    friendship via shared adventures with{' '}
                                    <strong>
                                        <i>real people</i>
                                    </strong>
                                    . We focus on{' '}
                                    <strong>
                                        <i>WHY</i>
                                    </strong>{' '}
                                    we do this instead of what we do. Anybody
                                    can go on a trip and do what we do, but only
                                    us who can tell you more about it. We are
                                    here to rebuild a connection, and we build
                                    it into our lifestyle.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Icons Grid */}
                    <section className="features-icons bg-light text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                        <div className="features-icons-icon d-flex">
                                            <i className="icon-people m-auto text-primary" />
                                        </div>
                                        <h2>Connections</h2>
                                        <p className="lead_1 mb-0">
                                            {' '}
                                            Making new friends via shared
                                            vacations
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                        <div className="features-icons-icon d-flex">
                                            <i className="icon-plane m-auto text-primary" />
                                        </div>
                                        <h2>Vacations</h2>
                                        <p className="lead_1 mb-0">
                                            {' '}
                                            Less-crowded secret destinations!
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                        <div className="features-icons-icon d-flex">
                                            <i className="icon-mustache m-auto text-primary" />
                                        </div>
                                        <h2>Experience</h2>
                                        <p className="lead_1 mb-0">
                                            {' '}
                                            Learn a new sport and enjoy a new
                                            lifestyle{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                                <h2
                                    className="display-8"
                                    style={{ color: 'Gray' }}
                                >
                                    {' '}
                                    Our Team · Diversity · Experience{' '}
                                </h2>
                                <p
                                    className="display-9"
                                    style={{ textAlign: 'justify' }}
                                >
                                    We are true mountain lovers, but we are also
                                    something else in the city. Meet our team
                                    leaders and adventurers, from High-Energy
                                    Nuclear Physicist to Software Engineer, from
                                    Financial traders to Mechanical Engineer,
                                    from Biologist to Geologist, and people from
                                    many different fields. We have people going
                                    to the Ivy-league schools as well as people
                                    living in a Van. We are learning from each
                                    other about everything.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Image Showcases */}
                    <section className="showcase">
                        <div className="container-fluid p-0">
                            <div className="row no-gutters">
                                <div
                                    className="col-lg-6 order-lg-2 text-white showcase-img"
                                    style={{
                                        backgroundImage:
                                            'url("img/kong-pic2.jpg")',
                                    }}
                                />
                                <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                    <h2>Kong</h2>
                                    <p className="lead mb-0">
                                        {' '}
                                        Kong is an{' '}
                                        <strong>
                                            {' '}
                                            experimental nuclear and particle
                                            physicist
                                        </strong>
                                        , working on experiments using high
                                        energy particle colliders. Kong is
                                        interested in not only what the origin
                                        of the universe is, but also the detail
                                        mechanism of how protons and neutrons
                                        bound together and form atom, and how
                                        quarks and gluons form nucleon. Other
                                        than being a physicist, he has founded
                                        the <strong> Kong's Academy</strong> to
                                        bring his friends together and aim to
                                        inspire people to connect to each other
                                        based on shared experience. Nevertheless
                                        he likes to share stories and adventures
                                        with friends.{' '}
                                    </p>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div
                                    className="col-lg-6 text-white showcase-img"
                                    style={{
                                        backgroundImage:
                                            'url("img/estella-pic5.jpg")',
                                    }}
                                />
                                <div className="col-lg-6 my-auto showcase-text">
                                    <h2>Estella</h2>
                                    <p className="lead mb-0">
                                        {' '}
                                        Estella goes to Princeton University for
                                        a Ph.D in{' '}
                                        <strong>
                                            Mechanical and Aerospace Engineering
                                        </strong>
                                        , specializing in fluid mechanics. She
                                        is an expert for using bubbles to
                                        separate "particles" (very different
                                        meaning of particle comparing to Kong's
                                        particle!) in different sizes, ranging
                                        from a few microns to hundreds of
                                        microns. Skiing for Estella is like a
                                        practice of applying fluid mechanics on
                                        every turn!
                                    </p>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div
                                    className="col-lg-6 order-lg-2 text-white showcase-img"
                                    style={{
                                        backgroundImage:
                                            'url("img/raven-pic1.jpg")',
                                    }}
                                />
                                <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                    <h2> Raven </h2>
                                    <p className="lead mb-0">
                                        {' '}
                                        Raven goes to Columbia University for a
                                        Master degree in{' '}
                                        <strong> civil engineering</strong>,
                                        specializing in Bridges! She focuses on
                                        structural analysis, mostly bridge
                                        health monitoring and related methods
                                        such as finite element modeling. Also
                                        Raven likes to read, go skiing with
                                        friends, and go to museums in Manhattan.
                                        She learned how to ski a black diamond
                                        only in 7 days with zero experience, and
                                        she inspired so many people around her
                                        to do things that are not in their
                                        comfort zones.
                                    </p>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div
                                    className="col-lg-6 text-white showcase-img"
                                    style={{
                                        backgroundImage:
                                            'url("img/yingshi-pic1.jpg")',
                                    }}
                                />
                                <div className="col-lg-6 my-auto showcase-text">
                                    <h2>Yingshi</h2>
                                    <p className="lead mb-0">
                                        {' '}
                                        Yingshi is currently a graduate student
                                        in the{' '}
                                        <strong>molecular biology</strong>{' '}
                                        department at Princeton University. He
                                        is interested in understanding how the
                                        translation of messenger RNAs is
                                        controlled during animal development by
                                        combining classical biochemistry,
                                        genetics, and high-throughput sequencing
                                        approaches, using the fruit fly
                                        Drosophila melanogaster as a model. He's
                                        been practicing piano for 20 years, and
                                        Beethoven is his favorite composer.
                                        Yingshi plays a lot of sports too,
                                        including skiing, rock climbing, and
                                        table tennis.{' '}
                                        <strong>
                                            He is also a sub-3:30 marathon
                                            runner!
                                        </strong>
                                    </p>
                                </div>
                            </div>
                            <div className="row no-gutters">
                                <div
                                    className="col-lg-6 order-lg-2 text-white showcase-img"
                                    style={{
                                        backgroundImage:
                                            'url("img/randy-pic1.jpg")',
                                    }}
                                />
                                <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                    <h2> Randy </h2>
                                    <p className="lead mb-0">
                                        {' '}
                                        Randy works at Google as a software
                                        engineer, and he likes to play
                                        basketball, ride motorcycle, and
                                        snowboard. One day he decided to live in
                                        a van for a while, so he bought a van
                                        and rebuilt it. Now he lives in the van
                                        without having an apartment. He brings
                                        his van with him whenever he travels in
                                        the US, never needs to pack...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10 mx-auto ">
                                    <h2
                                        className="display-8_3"
                                        style={{ color: 'Gray' }}
                                    >
                                        {' '}
                                        What people are saying...{' '}
                                    </h2>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* About */}
                    <section id="about">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="timeline">
                                        <li>
                                            <div className="timeline-image">
                                                <img
                                                    className="rounded-circle img-fluid"
                                                    src="img/jay-pic3.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4>Jay</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p className="text-muted">
                                                        {' '}
                                                        Kong and I used to hoop
                                                        a lot at the Rice gym.
                                                        Being his teammate is
                                                        comfortable because he
                                                        likes to control the
                                                        pace and is always
                                                        looking to make the
                                                        optimal decision,
                                                        whether passing or
                                                        scoring. Not
                                                        surprisingly, skiing
                                                        with him and others
                                                        feels similar. I first
                                                        skied with Kong in 2017
                                                        at Snowbird in Utah.
                                                        Kong and Estella were
                                                        super helpful and
                                                        patient in teaching the
                                                        basics. A lot of
                                                        encouragement on the
                                                        slopes and they would
                                                        throw just the right
                                                        amount of challenges at
                                                        you so you can progress.
                                                        Last Christmas - New
                                                        Year, we went on a ski
                                                        trip in Breckenridge and
                                                        I was able to see my
                                                        improvement from the
                                                        previous year. After
                                                        each day of skiing, we
                                                        could mark down the
                                                        toughest slope that we
                                                        conquered without a fall
                                                        and it made the trip
                                                        just a little bit more
                                                        competitive and fun.
                                                        Counting the days for
                                                        the trip this year.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted">
                                            <div className="timeline-image">
                                                <img
                                                    className="rounded-circle img-fluid"
                                                    src="img/TD2.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4>TD and Chelsey</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p className="text-muted">
                                                        Chelsey and I first
                                                        started to ski with Kong
                                                        and Estella in Utah
                                                        during winter 2017,
                                                        where we were inspired
                                                        by their patience, their
                                                        attitude towards
                                                        mountains, and how to
                                                        enjoy the nature. I went
                                                        on another ski trip with
                                                        Kong again in 2018 to
                                                        Colorado. A group of us
                                                        shared a rental home for
                                                        a few days as always,
                                                        where I had the
                                                        opportunity to meet some
                                                        new people and bound
                                                        with old friends. Can't
                                                        think of any better way
                                                        of spending my New
                                                        Years. Looking forward
                                                        to 2019 ski trip!
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-image">
                                                <img
                                                    className="rounded-circle img-fluid"
                                                    src="img/ben-profile-2.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4>Ben Tran</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p className="text-muted">
                                                        I met Kong my first year
                                                        out of university at
                                                        work, the first year as
                                                        a real adult. I was
                                                        trying to figure out how
                                                        to spend all of my newly
                                                        found free time when
                                                        Kong offered to teach me
                                                        how to rock climb. He
                                                        distilled all of the
                                                        knowledge he gained over
                                                        the years in a way that
                                                        I, a complete beginner,
                                                        could understand and
                                                        follow. It didn’t take
                                                        long for me to climb
                                                        like a pro. Then, as
                                                        winter approached, he
                                                        invited me to go skiing
                                                        at Snowbird. Once again,
                                                        he patiently taught me
                                                        the basics and after
                                                        three days I was able to
                                                        make my way down the
                                                        blue slopes. My job took
                                                        me to Switzerland for
                                                        half a year and I was
                                                        able to catch the ski
                                                        season. Due to the great
                                                        instruction from Kong, I
                                                        was able to enjoy myself
                                                        in Chamonix, further
                                                        improving my skills and
                                                        skiing some of the best
                                                        the Alps had to offer!
                                                        Now I look forward each
                                                        year to our ski trip
                                                        during Christmas and the
                                                        delicious food Kong and
                                                        Estella prepare. But,
                                                        until then you can find
                                                        me at the crag!
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted">
                                            <div className="timeline-image">
                                                <img
                                                    className="rounded-circle img-fluid"
                                                    src="img/alun-pic1.jpg"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="timeline-panel">
                                                <div className="timeline-heading">
                                                    <h4>Alun</h4>
                                                </div>
                                                <div className="timeline-body">
                                                    <p className="text-muted">
                                                        {' '}
                                                        Kong and Estella showed
                                                        me how to ski from the
                                                        Green to the Black, and
                                                        after the first season I
                                                        could laugh at Estella
                                                        being stuck from the
                                                        bottom of the Double
                                                        Black:-) It is also
                                                        really nice to spend the
                                                        night eating hot pot and
                                                        drinking (eating lettuce
                                                        for Kong) together after
                                                        spending the day on the
                                                        slope
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted">
                                            <div className="timeline-image">
                                                <h4>
                                                    Be Part
                                                    <br />
                                                    Of Our
                                                    <br />
                                                    Story!
                                                </h4>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </React.Fragment>
        )
    }
}
