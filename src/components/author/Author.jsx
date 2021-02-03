import React from "react";
import { Link } from 'react-router-dom';
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
                    <Link className="pre-large col-8 text-decoration-none text-dark"
                       to={ `/authors/${ this.props.id }` } >
                        { this.props.name }
                    </Link>
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
    name: state.author.list.objects[props.id].name,
    country: state.author.list.objects[props.id].country,
});

export default connect(mapStateToProps)(AuthorComponent);
