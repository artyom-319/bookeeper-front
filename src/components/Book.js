import React from 'react';
import PropTypes from 'prop-types';

class BookComponent extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <div>{ this.props.id }</div>
                <div>{ this.props.title }</div>
                <div>{ this.props.author }</div>
                <div>{ this.props.genre }</div>
                <br/>
                <hr/>
            </div>
        );
    }
}

BookComponent.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    genre: PropTypes.string,
}

export default BookComponent;
