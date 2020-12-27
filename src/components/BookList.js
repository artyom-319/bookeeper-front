import React from 'react';
import PropTypes from 'prop-types';

import Book from "./Book";

class BookListComponent extends React.Component {

    render() {
        const books = this.props.bookList.map(
            book => <Book key={ book.id } id={ book.id } title={ book.title } author={ book.author } genre={ book.genre } />);
        return (
            <div className="b-book-list-container">
                { this.props.isLoading ? <div>Загрузка....</div> : books }
            </div>
        )
    }
}

BookListComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    bookList: PropTypes.arrayOf(PropTypes.shape(Book.propTypes)),
};

export default BookListComponent;
