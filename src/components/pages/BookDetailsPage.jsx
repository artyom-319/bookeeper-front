import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from "react-bootstrap";

import Book from "../book/Book";
import BookDetails from "../book/BookDetails";
import CommentList from '../comment/CommentList';

class BookDetailsPageComponent extends React.Component {
    state = {
        commentList: [],
        isLoading: false,
        isModalOpen: false,
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        window.setTimeout(
            () => this.setState({ commentList: this.props.book.comments, isLoading: false }),
            500
        );
    }

    render() {
        return (
            <Container>
                <Row>
                    <BookDetails { ...this.props.book } />
                </Row>
                <br/>
                <Row>
                    <CommentList isLoading={ this.state.isLoading } commentList={ this.props.book.comments }/>
                </Row>
            </Container>
        );
    }
}

BookDetailsPageComponent.propTypes = {
    book: PropTypes.shape(Book.propTypes).isRequired,
    // onDetailsOpen: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
};

export default BookDetailsPageComponent;
