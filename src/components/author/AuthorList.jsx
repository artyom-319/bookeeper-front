import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ListGroup, Spinner } from 'react-bootstrap';

import Author from './Author';
import { loadAuthors } from '../../actions/authors';
import urls from '../../constants/urls';

class AuthorListComponent extends React.Component {
    componentDidMount() {
        this.props.loadAuthors(urls.authors);
    }

    render() {
        if (this.props.isLoading) {
            return ( <div><Spinner animation="border" /></div> );
        }
        if (this.props.errorOccurred) {
            return ( <div><h3>{ this.props.errorMessage }</h3></div> );
        }
        const authors = this.props.objectIds.map(
            authorId =>
                <ListGroup.Item key={ `item_${ authorId }` }>
                    <Author id={ authorId } />
                </ListGroup.Item>
        );
        return (
            <div className="b-author-list-container">
                <ListGroup>{ authors }</ListGroup>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    objectIds: state.author.list.objectIds,
    isLoading: state.author.list.isLoading,
    errorOccurred: state.author.errors.plain.occurred,
    errorMessage: state.author.errors.plain.message,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ loadAuthors }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorListComponent);
