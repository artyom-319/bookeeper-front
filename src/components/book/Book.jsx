import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../../styles/base.css';

class BookComponent extends React.Component {
    render() {
        let genre = null;
        if (this.props.genre) {
            genre =
                <Link className="text-secondary pre-small"
                   to={ `/genres/${ this.props.genre }/books` }
                >
                    { this.props.genre }
                </Link>;
        }
        return (
            <div>
                <div className="row">
                    <Link className="pre-large col-8 text-decoration-none text-dark"
                       to={ `/books/${ this.props.id }` }>
                        { this.props.title }
                    </Link>
                    <Link className="book-author col-4 text-decoration-none"
                       to={ `/authors/${ this.props.author.id }` }>
                        { this.props.author.name }
                    </Link>
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

export default connect(mapStateToProps)(BookComponent);
