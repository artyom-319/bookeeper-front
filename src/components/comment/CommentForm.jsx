import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

import { createComment } from '../../actions/books';
import urls from '../../constants/urls';

const initialState = {
    text: '',
    commenter: '',
};

class CommentFormComponent extends React.Component {
    state = initialState;

    onCreate = e => {
        e.preventDefault();
        const { ...data } = { ...this.state };
        data.bookId = this.props.bookId;
        const url = `${ urls.books }/${ data.bookId }/comments`;
        this.props.createComment(url, JSON.stringify(data));
        this.setState(initialState);
    };

    onChange = e => {
        this.setState({
            [ e.target.name ]: e.target.value,
        });
    };

    render() {
        return (
            <Form>
                <Form.Group className="b-form-field-wrapper">
                    <Form.Control
                        className="b-commenter-form-field"
                        value={ this.state.commenter }
                        type="text"
                        name="commenter"
                        placeholder="Your name"
                        onChange={ this.onChange }
                    />
                </Form.Group>
                <Form.Group className="b-form-field-wrapper">
                    <Form.Control as="textarea"
                        className="b-comment-text-form-field"
                        value={ this.state.text }
                        type="text"
                        name="text"
                        placeholder="Express your opinion"
                        onChange={ this.onChange }
                    />
                </Form.Group>
                <Button className="btn btn-primary mb-3" onClick={ this.onCreate }>Создать</Button>
            </Form>
        );
    }
}

CommentFormComponent.propTypes = {
    bookId: PropTypes.string,
};

const mapStateToProps = (state, props) => (props.bookId ? {} : {
    bookId: state.book.instance.id,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ createComment }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentFormComponent);
