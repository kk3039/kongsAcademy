import React from 'react';
import Typography from '@material-ui/core/Typography';
import HomepageCarousel from './homepage-carousel';

export default class Home extends React.Component {
    render() {
        console.log(process.env.PUBLIC_URL);
        return (
            <React.Fragment>
                <HomepageCarousel />
                <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                >
                    Kong's Academy
                </Typography>
                <Typography variant="h4" color="inherit" gutterBottom>
                    We connect people. We connect people via shared adventures.
                </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                    "I was lucky to have made many good friends over the years,
                    from whom I learned the way I would like to live, the path I
                    would like to go down, and the adventure that I would like
                    to experience. So I decided to do something about it." -
                    Kong
                </Typography>

                <Typography variant="h5" color="inherit" paragraph>
                    Want to learn more about us? →
                </Typography>
            </React.Fragment>
        );
    }
}
