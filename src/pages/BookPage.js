import React from 'react';

import BookForm from "../components/BookForm";
import BookList from "../components/BookList";

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

class BookPageComponent extends React.Component {
    state = {
        bookList: [],
        isLoading: false,
        lastId: 0,
    };

    onBookCreate = book => {
        console.log(book);
        this.setState({
            bookList: [ book, ...this.state.bookList ]
        })
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        window.setTimeout(
            () => this.setState({ bookList: BOOK_LIST, isLoading: false }),
            2000
        );
    }

    render() {
        return (
            <div className="b-book-container">
                <div>СПИСОК КНИЖОК!111</div>
                <hr/>
                <BookForm onCreate={ this.onBookCreate }/>
                <hr/>
                <BookList isLoading={ this.state.isLoading } bookList={ this.state.bookList }/>
            </div>
        )
    }
}

export default BookPageComponent;
