import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row, Spinner } from 'react-bootstrap';

import Book from '../book/Book';
import BookDetails from '../book/BookDetails';
import CommentList from '../comment/CommentList';
import { loadBookDetails, deleteBook } from '../../actions/books';
import urls from '../../constants/urls';

class BookDetailsPageComponent extends React.Component {

    deleteBook = () => {
        const url = `${ urls.books }/${ this.props.id }`;
        this.props.deleteBook(url, this.props.id);
    };

    componentDidMount() {
        const fetchBookUrl = `${ urls.books }/${ this.props.id }`;
        this.props.loadBookDetails(fetchBookUrl);
    }

    render() {
        return (
            <Container>
                <Row>
                    { this.props.isLoading || !this.props.book
                        ? <Spinner animation="border" />
                        : <BookDetails { ...this.props.book } onDelete={ this.deleteBook } /> }
                </Row>
                <br/>
                <Row>
                    {/* todo: loading уровнем ниже */}
                    {/*<CommentList isLoading={ this.state.isLoading } commentList={ this.props.book.comments }/>*/}
                </Row>
            </Container>
        );
    }
}

BookDetailsPageComponent.propTypes = {
    id: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    isLoading: state.book.details.isLoading,
    book: state.book.details.instance,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ loadBookDetails, deleteBook }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPageComponent);
