import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/base.css';

class BookComponent extends React.Component {

    onBookSelect = () => {
        this.props.onBookDetailsOpen(this.props.id);
    };

    onAuthorSelect = () => {
        this.props.onAuthorDetailsOpen(this.props.author.id);
    };

    render() {
        let genre = null;
        if (this.props.genre) {
            genre = <a className="text-secondary pre-small" href={ `/genres/${ this.props.genre }/books`}>{ this.props.genre }</a>
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
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }),
    genre: PropTypes.string,
    onBookDetailsOpen: PropTypes.func.isRequired,
    onAuthorDetailsOpen: PropTypes.func.isRequired,
};

export default BookComponent;
