import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormModal from '../FormModal';
import BookList from '../book/BookList';
import BookForm from '../book/BookForm';
import PropTypes from 'prop-types';
import Book from '../book/Book';

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
            () => this.setState({ bookList: this.props.bookList, isLoading: false }),
            500
        );
    }

    render() {
        return (
            <div className="b-book-container">
                <div className="row g-2">
                    <span className="large col-11" >Book Collection</span>
                    <a href="#" onClick={ this.onClick } >new</a>
                </div>
                <br/>
                <BookList
                    isLoading={ this.state.isLoading }
                    bookList={ this.state.bookList }
                />
                <FormModal title="New Book" show={ this.state.isModalOpen } handleClose={ this.onModalClose }>
                    <BookForm onCreate={ this.onBookCreate }/>
                </FormModal>
            </div>
        );
    }
}

BookPageComponent.propTypes = {
    bookList: PropTypes.arrayOf(PropTypes.shape(Book.propTypes)).isRequired,
};

export default BookPageComponent;
