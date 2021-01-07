import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Spinner } from 'react-bootstrap';

import Book from './Book';

class BookListComponent extends React.Component {

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
    isLoading: PropTypes.bool.isRequired,
    objectIds: PropTypes.arrayOf(PropTypes.string),
};

export default BookListComponent;
