import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormModal from '../FormModal';
import BookList from '../book/BookList';
import BookForm from '../book/BookForm';
import PropTypes from 'prop-types';
import { loadBooks } from '../../actions/books';

class BooksPageComponent extends React.Component {
    onClick = () => {
        console.log("'new' clicked");
        // this.setState({
        //     isModalOpen: true,
        // });
    };

    onBookCreate = book => {
        console.log(book);
        // this.setState({
        //     bookList: [ book, ...this.state.bookList ],
        //     isModalOpen: false,
        // });
    };

    onModalClose = () => {
        // this.setState({
        //     isModalOpen: false,
        // });
    };

    componentDidMount() {
        this.props.loadBooks(this.props.booksFetchUrl);
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
                    isLoading={ this.props.isLoading }
                    objectIds={ this.props.objectIds }
                />
                <FormModal title="New Book" show={ this.props.isModalOpen } handleClose={ this.onModalClose }>
                    <BookForm onCreate={ this.onBookCreate }/>
                </FormModal>
            </div>
        );
    }
}

BooksPageComponent.propTypes = {
    booksFetchUrl: PropTypes.string,
};

const mapStateToProps = state => ({
    isLoading: state.book.list.isLoading,
    isModalOpen: state.book.list.isModalOpen,
    objectIds: state.book.list.objectIds,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ loadBooks }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksPageComponent);
