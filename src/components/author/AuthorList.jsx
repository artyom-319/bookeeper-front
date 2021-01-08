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
        const authors = this.props.objectIds.map(
            authorId =>
                <ListGroup.Item key={ `item_${ authorId }` }>
                    <Author id={ authorId } />
                </ListGroup.Item>
        );
        return (
            <div className="b-author-list-container">
                { this.props.isLoading ? <Spinner animation="border" /> : <ListGroup>{ authors }</ListGroup> }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    objectIds: state.author.list.objectIds,
    isLoading: state.author.list.isLoading,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ loadAuthors }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorListComponent);
