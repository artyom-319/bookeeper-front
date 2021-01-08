import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';

class BookDetailsComponent extends React.Component {

    render() {
        return (
            <Card body className="col-md-12">
                <Row className="row">
                    <Col className="col-9">
                        <b>{ this.props.title }</b>
                    </Col>
                    <Col className="col-1">
                        <a className="text-decoration-none" href="#">edit</a>
                    </Col>
                    <Col className="col-2">
                        <a onSelect={ this.props.onDelete } onClick={ this.props.onDelete } className="text-danger" href="#">delete</a>
                    </Col>
                </Row>
                <Row className="row">
                    <Col>
                        <a className="text-secondary text-decoration-none">{ this.props.author.name }</a>
                    </Col>
                </Row>
                <br/>
                <Row className="row">
                    <Col>
                        <small className="text-primary">[{ this.props.genre }]</small>
                        <br/>
                    </Col>
                </Row>
            </Card>
        );
    }
}

BookDetailsComponent.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),
    genre: PropTypes.string,
    onDelete: PropTypes.func,
};

export default BookDetailsComponent;
