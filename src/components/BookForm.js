import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from "react-bootstrap";

class BookFormComponent extends React.Component {

    state = {
        title: '',
        author: '',
        genre: '',
    };

    onCreate = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.onCreate(this.state);
    }

    onChange = e => {
        this.setState({
            [ e.target.name ]: e.target.value,
        })
    }

    render() {
        return (
            <div className="b-book-form-wrapper">
                <Form>
                    <Form.Group className="b-form-field-wrapper">
                        <Form.Control
                            className="b-book-title-form-field"
                            value={ this.state.title }
                            type="text"
                            name="title"
                            placeholder="Title"
                            onChange={ this.onChange }
                        />
                    </Form.Group>
                    <Form.Group className="b-form-field-wrapper">
                        <Form.Control
                            className="b-book-author-form-field"
                            value={ this.state.author }
                            type="text"
                            name="author"
                            placeholder="Author"
                            onChange={ this.onChange }
                        />
                    </Form.Group>
                    <Form.Group className="b-form-field-wrapper">
                        <Form.Control
                            className="b-book-genre-form-field"
                            value={ this.state.genre }
                            type="text"
                            name="genre"
                            placeholder="Genre"
                            onChange={ this.onChange }
                        />
                    </Form.Group>
                    <Button className="btn btn-primary mb-3" onClick={ this.onCreate }>Создать</Button>
                </Form>
            </div>
        );
    }
}

BookFormComponent.propTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default BookFormComponent;
