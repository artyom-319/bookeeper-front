import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Spinner } from 'react-bootstrap';

import Comment from './Comment';

class CommentListComponent extends React.Component {
    render() {
        const comments = this.props.commentIds.map(
            commentId =>
                <ListGroup.Item key={ `item_${ commentId }` }>
                    <Comment id={ commentId } />
                </ListGroup.Item>
        );
        return (
            <div className="col-md-12 b-author-list-container">
                <h5>Comments</h5>
                { this.props.isLoading ? <Spinner animation="border" /> : <ListGroup>{ comments }</ListGroup> }
            </div>
        );
    }
}

CommentListComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    commentIds: PropTypes.arrayOf(PropTypes.string),
};

export default CommentListComponent;
