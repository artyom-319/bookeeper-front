import React from "react";
import PropTypes from 'prop-types';
import { Row, Col } from "react-bootstrap";

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
    text: PropTypes.string.isRequired,
    commenter: PropTypes.string.isRequired,
};

export default CommentComponent;
