import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

class AuthorDetailsComponent extends React.Component {
    render() {
        return (
            <Card body className="col-md-12">
                <Row className="row">
                    <Col className="col-8">
                        <b>{ this.props.name }</b>
                    </Col>
                    <Col className="col-2">
                        <a onClick={ this.props.onEdit } className="text-decoration-none" href="#">edit</a>
                    </Col>
                    <Col className="col-2">
                        <a onSelect={ this.props.onDelete } onClick={ this.props.onDelete } className="text-danger" href="#">delete</a>
                    </Col>
                </Row>
                <br/>
                <Row className="row">
                    <Col>
                        <a className="text-secondary text-decoration-none">{ this.props.country }</a>
                    </Col>
                </Row>
            </Card>
        );
    }
}

AuthorDetailsComponent.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
};

export default AuthorDetailsComponent;
