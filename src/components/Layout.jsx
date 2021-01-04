import React from "react";
import PropTypes from 'prop-types';
import { Nav, Navbar } from "react-bootstrap";

class LayoutComponent extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Bookeeper</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link onClick={ () => this.props.onSelect("books") }>Books</Nav.Link>
                        <Nav.Link onClick={ () => this.props.onSelect("authors") }>Authors</Nav.Link>
                        <Nav.Link onClick={ () => this.props.onSelect("genres") }>Genres</Nav.Link>
                    </Nav>
                </Navbar>
                <br/>
                <div className="b-content">
                    { this.props.children }
                </div>
            </div>
        );
    }
}

LayoutComponent.propTypes = {
    onSelect: PropTypes.func.isRequired,
};

export default LayoutComponent;
