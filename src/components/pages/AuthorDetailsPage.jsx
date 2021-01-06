import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Spinner } from 'react-bootstrap';

import AuthorDetails from '../author/AuthorDetails';
import { loadAuthorDetails } from '../../actions/authors';
import urls from '../../constants/urls';

class AuthorDetailsPageComponent extends React.Component {
    componentDidMount() {
        const url = `${ urls.authors }/${ this.props.id }`;
        this.props.loadAuthorDetails(url);
    }

    render() {
        return (
            <Container>
                <Row>
                    { this.props.isLoading
                        ? <Spinner animation="border" />
                        : <AuthorDetails { ...this.props.author } /> }
                </Row>
                <br/>
                <Row>
                    {/* todo: book list */}
                </Row>
            </Container>
        );
    }
}

AuthorDetailsPageComponent.propTypes = {
    id: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    isLoading: state.author.details.isLoading,
    author: state.author.details.instance,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ loadAuthorDetails }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorDetailsPageComponent);
