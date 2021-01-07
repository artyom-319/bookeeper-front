import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import selectPage from '../../actions/routing';
import { BOOK_DETAILS_PAGE, AUTHOR_DETAILS_PAGE } from '../../constants/pages';
import '../../styles/base.css';

class BookComponent extends React.Component {

    onBookSelect = () => {
        this.props.selectPage(BOOK_DETAILS_PAGE, this.props.id);
    };

    onAuthorSelect = () => {
        this.props.selectPage(AUTHOR_DETAILS_PAGE, this.props.author.id);
    };

    render() {
        let genre = null;
        if (this.props.genre) {
            genre =
                <a className="text-secondary pre-small"
                   href={ `/genres/${ this.props.genre }/books`}>
                    { this.props.genre }
                </a>;
        }
        return (
            <div>
                <div className="row">
                    <a className="pre-large col-8 text-decoration-none text-dark"
                       // href={ `/books/${ this.props.id }` }
                       onSelect={ this.onBookSelect }
                       onClick={ this.onBookSelect }>
                        { this.props.title }
                    </a>
                    <a className="book-author col-4 text-decoration-none"
                       // href={ `/authors/${ this.props.author.id }` }
                       onClick={ this.onAuthorSelect }
                       onSelect={ this.onAuthorSelect }>
                        { this.props.author.name }
                    </a>
                    <br/>
                </div>
                { genre }
            </div>
        );
    }
}

BookComponent.propTypes = {
    id: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => ({
    title: state.book.list.objects[props.id].title,
    author: state.book.list.objects[props.id].author,
    genre: state.book.list.objects[props.id].genre,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ selectPage }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookComponent);
