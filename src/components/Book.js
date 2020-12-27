import React from 'react';

class BookComponent extends React.Component {
    state = {
    };

    render() {
        return (
            <div>
                <div>{ this.props.title }</div>
                <div>{ this.props.author }</div>
                <div>{ this.props.genre }</div>
            </div>
        );
    }
}

export default BookComponent;
