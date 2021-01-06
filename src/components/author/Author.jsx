import React from "react";
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import '../../styles/base.css';
import selectPage from '../../actions/routing';
import { AUTHOR_DETAILS_PAGE } from '../../constants/pages';

class AuthorComponent extends React.Component {
    onClick = () => {
        this.props.selectPage(AUTHOR_DETAILS_PAGE, this.props.id);
    };

    render() {
        let country = null;
        if (this.props.country) {
            country = <span className="text-secondary pre-small" >{ this.props.country }</span>
        }
        return (
            <div>
                <div className="row">
                    <a className="pre-large col-8 text-decoration-none text-dark"
                       onClick={ this.onClick }
                       href="#" >
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
    name: state.author.list.objects[props.id].name,
    country: state.author.list.objects[props.id].country,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ selectPage, }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorComponent);
