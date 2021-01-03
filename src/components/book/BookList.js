import React from 'react';
import PropTypes from 'prop-types';

import Book from "./Book";
import { ListGroup } from "react-bootstrap";

class BookListComponent extends React.Component {

    render() {
        const books = this.props.bookList.map(
            book =>
                <ListGroup.Item>
                    <Book key={ book.id } id={ book.id } title={ book.title } author={ book.author } genre={ book.genre } />
                </ListGroup.Item>
        );
        return (
            <div className="b-book-list-container">
                { this.props.isLoading ? <div>Загрузка....</div> : <ListGroup>{ books }</ListGroup> }
            </div>
        );
    }
}

BookListComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    bookList: PropTypes.arrayOf(PropTypes.shape(Book.propTypes)),
};

export default BookListComponent;
