import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MainPageComponent extends React.Component {
    render() {
        return (
            <Jumbotron>
                <h2>Welcome to Bookeeper!</h2>
                <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p>Very soon we are expecting our start page to be more thoughtful and have more interesting interactions so that you could plunge into
                pleasant book choice bustles losing your time sense and mind...</p>
                <p>But so far there are a few of views and you are welcome
                    to check out the <a onClick={ this.props.onClick } href="#">books</a> we have on our portal</p>
            </Jumbotron>
        );
    }
}

export default MainPageComponent;
