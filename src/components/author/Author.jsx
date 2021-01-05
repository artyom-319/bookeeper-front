import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
};

const mapStateToProps = (state, props) => ({
    name: state.authors.authors[props.id].name,
    country: state.authors.authors[props.id].country,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorComponent);
