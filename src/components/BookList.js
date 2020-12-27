import React from 'react';
import Book from "./Book";

const BOOK_LIST = [
    {
        id: 1,
        title: 'TITLE 1',
        author: 'AUTHOR',
        genre: 'GENRE',
    },
    {
        id: 2,
        title: 'TITLE 2',
        author: 'AUTHOR',
        genre: 'GENRE',
    }
];

class BookListComponent extends React.Component {
    state = {
        isLoading: false,
    };

    render() {
        const books = BOOK_LIST.map(
            book => <Book key={ book.id } title={ book.title } author={ book.author } genre={ book.genre } />);
        return (
            <div className="b-book-container">
                { books }
            </div>
        )
    }
}

export default BookListComponent;
