import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import '../../styles/base.css';


class CommentComponent extends React.Component {
    render() {
        return (
            <div className="comment-body">
                <Row>
                    <Col>
                        <span>{ this.props.commenter }</span>
                        <span className="text-secondary">&nbsp;left a comment:</span>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col>
                        <p className="comment-text">{ this.props.text }</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

CommentComponent.propTypes = {
    id: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => ({
    text: state.book.details.commentObjects[props.id].text,
    commenter: state.book.details.commentObjects[props.id].commenter,
});

export default connect(mapStateToProps)(CommentComponent);
