import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';

class BookDetailsComponent extends React.Component {
    render() {
        let genreRow = null;
        if (this.props.genre) {
            genreRow =
                <Row className="row">
                    <Col>
                        <Link to={ `/genres/${ this.props.genre }/books` }>
                            <small className="text-primary">
                                [{ this.props.genre }]
                            </small>
                        </Link>
                        <br/>
                    </Col>
                </Row>;
        }
        return (
            <Card body className="col-md-12">
                <Row className="row">
                    <Col className="col-9">
                        <b>{ this.props.title }</b>
                    </Col>
                    <Col className="col-1">
                        <a onClick={ this.props.onEdit } className="text-decoration-none" href="#">edit</a>
                    </Col>
                    <Col className="col-2">
                        <a onSelect={ this.props.onDelete } onClick={ this.props.onDelete } className="text-danger" href="#">delete</a>
                    </Col>
                </Row>
                <Row className="row">
                    <Col>
                        <Link className="text-secondary text-decoration-none" to={ `/authors/${ this.props.author.id }` }>
                            { this.props.author.name }
                        </Link>
                    </Col>
                </Row>
                <br/>
                { genreRow }
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
    onEdit: PropTypes.func,
};

export default BookDetailsComponent;
