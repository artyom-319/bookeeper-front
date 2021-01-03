import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import BookFormModal from "../components/BookFormModal";
import BookList from "../components/BookList";

const BOOK_LIST = [
    {
        id: 1,
        title: 'TITLE 1',
        author: {
            id: '1',
            name: 'AUTHOR',
        },
        genre: 'GENRE',
    },
    {
        id: 2,
        title: 'TITLE 2',
        author: {
            id: '1',
            name: 'AUTHOR',
        },
        genre: 'GENRE',
    }
];

class BookPageComponent extends React.Component {
    state = {
        bookList: [],
        isLoading: false,
        isModalOpen: false,
    };

    onClick = () => {
        console.log("'new' clicked");
        this.setState({
            isModalOpen: true,
        });
    };

    onBookCreate = book => {
        console.log(book);
        this.setState({
            bookList: [ book, ...this.state.bookList ],
            isModalOpen: false,
        });
    };

    onModalClose = () => {
        this.setState({
            isModalOpen: false,
        });
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        window.setTimeout(
            () => this.setState({ bookList: BOOK_LIST, isLoading: false }),
            500
        );
    }

    render() {

        return (
            <div className="b-book-container">
                <div className="row g-2">
                    <span className="large col-10" >Book Collection</span>
                    <a href="#" onClick={ this.onClick } >new</a>
                </div>
                <br/>
                <BookList isLoading={ this.state.isLoading } bookList={ this.state.bookList }/>
                <BookFormModal show={ this.state.isModalOpen } handleClose={ this.onModalClose } onCreate={ this.onBookCreate }/>
            </div>
        )
    }
}

export default BookPageComponent;
