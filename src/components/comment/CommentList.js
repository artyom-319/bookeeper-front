import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Spinner } from "react-bootstrap";

import Comment from "./Comment";

class CommentListComponent extends React.Component {
    render() {
        const comments = this.props.commentList.map(
            comment =>
                <ListGroup.Item>
                    <Comment key={ comment.id } id={ comment.id } text={ comment.text } commenter={ comment.commenter } />
                </ListGroup.Item>
        );
        return (
            <div className="col-md-12 b-author-list-container">
                { this.props.isLoading ? <Spinner animation="border" /> : <ListGroup>{ comments }</ListGroup> }
            </div>
        );
    }
}

CommentListComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    commentList: PropTypes.arrayOf(PropTypes.shape(Comment.propTypes)),
};

export default CommentListComponent;
