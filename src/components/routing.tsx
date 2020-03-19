import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './home';
import About from './about';
import ContactUs from './contact-us';
import JoinUs from './join-us';
import RecentTrips from './recent-trips';
import UpcomingTrips from './upcoming-trips';
import { Button, Container } from '@material-ui/core';
import '../css/navigation.scss';

export default function Routing() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <Router>
            <div className="navigation-root">
                <Button className="navigation-item navigation-item-head">
                    <Link to="/">Kong's Academy</Link>
                </Button>
                <Button className="navigation-item">
                    <Link to="/">Home</Link>
                </Button>

                <Button className="navigation-item">
                    <Link to="/about">About</Link>
                </Button>

                <Button className="navigation-item">
                    <Link to="/recent-trips">Recent trips</Link>
                </Button>

                <Button className="navigation-item">
                    <Link to="/upcoming-trips">Upcoming trips</Link>
                </Button>

                <Button className="navigation-item">
                    <Link to="/join-us">Join</Link>
                </Button>

                <Button className="navigation-item">
                    <Link to="/contact-us">Contact</Link>
                </Button>
            </div>

            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/recent-trips">
                    <RecentTrips />
                </Route>
                <Route path="/upcoming-trips">
                    <UpcomingTrips />
                </Route>
                <Route path="/join-us">
                    <JoinUs />
                </Route>
                <Route path="/contact-us">
                    <ContactUs />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
