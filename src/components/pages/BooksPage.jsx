import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormModal from '../FormModal';
import BookList from '../book/BookList';
import BookForm from '../book/BookForm';
import PropTypes from 'prop-types';
import { openModal, closeModal } from '../../actions/books';

class BooksPageComponent extends React.Component {
    render() {
        return (
            <div className="b-book-container">
                <div className="row g-2">
                    <span className="large col-11" >
                        { this.props.pageTitle ? this.props.pageTitle : "Book Collection" }
                    </span>
                    <a href="#" onClick={ this.props.openModal } >new</a>
                </div>
                <br/>
                <BookList
                    booksFetchUrl={ this.props.booksFetchUrl }
                />
                <FormModal title="New Book" show={ this.props.isModalOpen } onClose={ this.props.closeModal }>
                    <BookForm/>
                </FormModal>
            </div>
        );
    }
}

BooksPageComponent.propTypes = {
    pageTitle: PropTypes.string,
    booksFetchUrl: PropTypes.string,
};

const mapStateToProps = state => ({
    isModalOpen: state.book.list.isModalOpen,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ openModal, closeModal }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksPageComponent);
