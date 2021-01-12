import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Spinner } from 'react-bootstrap';

import Book from './Book';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadBooks } from '../../actions/books';

class BookListComponent extends React.Component {
    componentDidMount() {
        this.props.loadBooks(this.props.booksFetchUrl);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.booksFetchUrl !== this.props.booksFetchUrl) {
            this.props.loadBooks(this.props.booksFetchUrl);
        }
    }

    render() {
        if (this.props.isLoading) {
            return ( <div><Spinner animation="border" /></div> );
        }
        if (this.props.errorOccurred) {
            return ( <div><h3>{ this.props.errorMessage }</h3></div> );
        }
        const books = this.props.objectIds.map(
            bookId =>
                <ListGroup.Item key={ `item_${ bookId }` }>
                    <Book id={ bookId }/>
                </ListGroup.Item>
        );
        return (
            <div className="b-book-list-container">
                <ListGroup>{ books }</ListGroup>
            </div>
        );
    }
}

BookListComponent.propTypes = {
    booksFetchUrl: PropTypes.string,
};


const mapStateToProps = state => ({
    isLoading: state.book.list.isLoading,
    objectIds: state.book.list.objectIds,
    errorOccurred: state.book.list.errorOccurred,
    errorMessage: state.book.list.errorMessage,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ loadBooks }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookListComponent);
