import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import selectPage from '../../actions/routing';
import { GENRE_BOOKS_PAGE } from '../../constants/pages';


class GenreComponent extends React.Component {
    onSelect = () => {
        this.props.selectPage(GENRE_BOOKS_PAGE, this.props.title);
    };

    render() {
        return (
            <div>
                <div className="row">
                    <a className="pre-large col-8 text-decoration-none text-dark"
                       href='#'
                       onClick={ this.onSelect }>
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

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ selectPage }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreComponent);
