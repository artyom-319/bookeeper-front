import React from 'react';
import PropTypes from 'prop-types';

import '../../styles/base.css';

class BookComponent extends React.Component {
    render() {
        let genre = null;
        if (this.props.genre) {
            genre = <a className="text-secondary pre-small" href={ `/genres/${ this.props.genre }/books`}>{ this.props.genre }</a>
        }
        return (
            <div>
                <div className="row">
                    <a className="book-title pre-large col-8 text-decoration-none text-dark"
                       href={ `/books/${ this.props.id }` }>
                        { this.props.title }
                    </a>
                    <a className="book-author col-4 text-decoration-none"
                       href={ `/authors/${ this.props.author.id }` }>
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
};

export default BookComponent;
