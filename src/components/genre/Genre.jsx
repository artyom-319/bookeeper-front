import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class GenreComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <Link className="pre-large col-8 text-decoration-none text-dark"
                       to={ `/genres/${ this.props.title }/books` }>
                        { this.props.title }
                    </Link>
                </div>
            </div>
        );
    }
}

GenreComponent.propTypes = {
    title: PropTypes.string.isRequired,
};

export default GenreComponent;
