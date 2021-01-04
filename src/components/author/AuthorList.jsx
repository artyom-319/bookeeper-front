import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from "react-bootstrap";

import Author from "./Author";

class AuthorListComponent extends React.Component {
    render() {
        const authors = this.props.authorList.map(
            author =>
                <ListGroup.Item>
                    <Author key={ author.id } id={ author.id } name={ author.name } country={ author.country } />
                </ListGroup.Item>
        );
        return (
            <div className="b-author-list-container">
                { this.props.isLoading ? <div>Загрузка....</div> : <ListGroup>{ authors }</ListGroup> }
            </div>
        );
    }
}

AuthorListComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    authorList: PropTypes.arrayOf(PropTypes.shape(Author.propTypes)),
};

export default AuthorListComponent;
