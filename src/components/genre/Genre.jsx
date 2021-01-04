import React from 'react';
import PropTypes from 'prop-types';

class GenreComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <a className="pre-large col-8 text-decoration-none text-dark"
                       href={ `/genres/${ this.props.title }/books` }>
                        { this.props.title }
                    </a>
                </div>
            </div>
        );
    }
}

GenreComponent.propTypes = {
    title: PropTypes.string.isRequired,
};

export default GenreComponent;
