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
        const books = this.props.objectIds.map(
            bookId =>
                <ListGroup.Item key={ `item_${ bookId }` }>
                    <Book id={ bookId }/>
                </ListGroup.Item>
        );
        return (
            <div className="b-book-list-container">
                { this.props.isLoading ? <Spinner animation="border" /> : <ListGroup>{ books }</ListGroup> }
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
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ loadBooks }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookListComponent);
