import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Card, Container, Row, Spinner } from 'react-bootstrap';

import AuthorDetails from '../author/AuthorDetails';
import { loadAuthorDetails, deleteAuthor, updateAuthor, openEditMode, closeEditMode } from '../../actions/authors';
import urls from '../../constants/urls';
import BookList from '../book/BookList';
import AuthorForm from '../author/AuthorForm';

class AuthorDetailsPageComponent extends React.Component {
    openEditMode = () => {
        this.props.openEditMode();
    };

    closeEditMode = () => {
        this.props.closeEditMode();
    };

    deleteAuthor = () => {
        const url = `${ urls.authors }/${ this.props.id }`;
        this.props.deleteAuthor(url, this.props.id);
    };

    updateAuthor = data => {
        this.props.updateAuthor(urls.authors, data);
    };

    componentDidMount() {
        const url = `${ urls.authors }/${ this.props.id }`;
        this.props.loadAuthorDetails(url);
    }

    render() {
        if (this.props.errorOccurred) {
            return ( <div><h3>{ this.props.errorMessage }</h3></div> );
        }
        if (this.props.isLoading || !this.props.author) {
            return <div><Spinner animation="border" /></div>;
        }
        const booksUrl = `${ urls.authors }/${ this.props.id }/books`;
        return (
            <Container>
                <Row>
                    { this.props.editModeEnabled
                        ? (<Card.Body>
                            <AuthorForm { ...this.props.author } onSubmit={ this.updateAuthor } onCancel={ this.closeEditMode } />
                        </Card.Body>)
                        : <AuthorDetails { ...this.props.author } onEdit={ this.openEditMode } onDelete={ this.deleteAuthor } />
                    }
                </Row>
                <br/>
                <Container>
                    <h4>Books of { this.props.author.name }</h4>
                    <BookList booksFetchUrl={ booksUrl }/>
                </Container>
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
    editModeEnabled: state.author.details.editModeEnabled,
    errorOccurred: state.author.errors.plain.occurred,
    errorMessage: state.author.errors.plain.message,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        loadAuthorDetails, deleteAuthor, openEditMode, closeEditMode, updateAuthor,
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorDetailsPageComponent);
