import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Col, Row } from 'react-bootstrap';

import selectPage from '../../actions/routing';
import { AUTHOR_DETAILS_PAGE, GENRE_BOOKS_PAGE } from '../../constants/pages';

class BookDetailsComponent extends React.Component {
    onAuthorSelect = () => {
        this.props.selectPage(AUTHOR_DETAILS_PAGE, this.props.author.id);
    };

    onGenreSelect = () => {
        this.props.selectPage(GENRE_BOOKS_PAGE, this.props.genre);
    };

    render() {
        let genreRow = null;
        if (this.props.genre) {
            genreRow =
                <Row className="row">
                    <Col>
                        <small className="text-primary" onClick={ this.onGenreSelect }>
                            [{ this.props.genre }]
                        </small>
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
                        <a className="text-secondary text-decoration-none" onClick={ this.onAuthorSelect }>
                            { this.props.author.name }
                        </a>
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

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ selectPage }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsComponent);
