import React from "react";
import PropTypes from 'prop-types';

import '../../styles/base.css';

class AuthorComponent extends React.Component {
    render() {
        let country = null;
        if (this.props.country) {
            country = <span className="text-secondary pre-small" >{ this.props.country }</span>
        }
        return (
            <div>
                <div className="row">
                    <a className="pre-large col-8 text-decoration-none text-dark"
                       href={ `/authors/${ this.props.id }` }>
                        { this.props.name }
                    </a>
                    <br/>
                </div>
                { country }
            </div>
        );
    }
}

AuthorComponent.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string,
}

export default AuthorComponent;
