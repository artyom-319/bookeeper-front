import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ListGroup, Spinner } from "react-bootstrap";

import Author from "./Author";
import { loadAuthors, loadAuthorsSuccess } from '../../actions/authors';

const AUTHOR_LIST = {
    1: {
        id: 1,
        name: 'Author 1',
        country: 'Country 1',
    },
    2: {
        id: 2,
        name: 'Author 2',
        country: 'Country 2',
    },
    3: {
        id: 3,
        name: 'Author 3',
        country: 'Country 3',
    }
};

const apiResponse = {
    authorList: [2, 3],
    authors: AUTHOR_LIST,
};

class AuthorListComponent extends React.Component {
    componentDidMount() {
        this.props.loadAuthors();
        // this.setState({ isLoading: true });
        window.setTimeout(
            () => this.props.loadAuthorsSuccess(apiResponse),
            500
        );
    }

    render() {
        const authors = this.props.authorList.map(
            authorId =>
                <ListGroup.Item>
                    <Author key={ authorId } id={ authorId } />
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
    authorList: state.authors.authorList,
    isLoading: state.authors.isLoading,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ loadAuthors, loadAuthorsSuccess }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorListComponent);
