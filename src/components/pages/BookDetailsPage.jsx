import React from 'react';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Container, Row, Spinner } from 'react-bootstrap';

import BookDetails from '../book/BookDetails';
import BookForm from '../book/BookForm';
import CommentForm from '../comment/CommentForm';
import CommentList from '../comment/CommentList';
import { loadBookDetails, deleteBook, openEditMode, closeEditMode, updateBook } from '../../actions/books';
import urls from '../../constants/urls';

class BookDetailsPageComponent extends React.Component {
    state = {
        redirect: false,
    };

    openEditMode = () => {
        this.props.openEditMode();
    };

    closeEditMode = () => {
        this.props.closeEditMode();
    };

    deleteBook = () => {
        const url = `${ urls.books }/${ this.props.id }`;
        this.props.deleteBook(url, this.props.id);
        this.setState({ redirect: true });
    };

    updateBook = data => {
        this.props.updateBook(urls.books, data);
    };

    componentDidMount() {
        const fetchBookUrl = `${ urls.books }/${ this.props.id }`;
        this.props.loadBookDetails(fetchBookUrl);
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/books"/>;
        }
        if (this.props.errorOccurred) {
            return ( <div><h3>{ this.props.errorMessage }</h3></div> );
        }
        if (this.props.isLoading || !this.props.book) {
            return <div><Spinner animation="border" /></div>;
        }
        return (
            <Container>
                <Row>
                    { this.props.editModeEnabled ? (
                        <Card.Body>
                            <BookForm { ...this.props.book } onSubmit={ this.updateBook } onCancel={ this.closeEditMode } />
                        </Card.Body>) :
                    <BookDetails { ...this.props.book } onEdit={ this.openEditMode } onDelete={ this.deleteBook } /> }
                </Row>
                <br/>
                <Row>
                    <CommentList isLoading={ this.props.isLoading } commentIds={ this.props.commentIds }/>
                </Row>
                <br/>
                <Card>
                    <Card.Header>Leave a comment:</Card.Header>
                    <Card.Body>
                        <CommentForm bookId={ this.props.id }/>
                    </Card.Body>
                </Card>
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
    commentIds: state.book.details.commentIds,
    editModeEnabled: state.book.details.editModeEnabled,
    errorOccurred: state.book.errors.plain.occurred,
    errorMessage: state.book.errors.plain.message,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        loadBookDetails, updateBook, deleteBook, openEditMode, closeEditMode,
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPageComponent);
