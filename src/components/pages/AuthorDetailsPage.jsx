import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Row, Spinner } from 'react-bootstrap';

import AuthorDetails from '../author/AuthorDetails';
import { loadAuthorDetails, deleteAuthor } from '../../actions/authors';
import urls from '../../constants/urls';
import BookList from '../book/BookList';

class AuthorDetailsPageComponent extends React.Component {
    deleteAuthor = () => {
        const url = `${ urls.authors }/${ this.props.id }`;
        this.props.deleteAuthor(url, this.props.id);
    };

    componentDidMount() {
        const url = `${ urls.authors }/${ this.props.id }`;
        this.props.loadAuthorDetails(url);
    }

    render() {
        const booksUrl = `${ urls.authors }/${ this.props.id }/books`;
        return (
            this.props.isLoading || !this.props.author ? <Spinner animation="border" /> : (
            <Container>
                <Row>
                    <AuthorDetails { ...this.props.author } onDelete={ this.deleteAuthor } />
                </Row>
                <br/>
                <Container>
                    <h4>Books of { this.props.author.name }</h4>
                    <BookList booksFetchUrl={ booksUrl }/>
                </Container>
            </Container>
            )
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
    ...bindActionCreators({ loadAuthorDetails, deleteAuthor }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorDetailsPageComponent);
