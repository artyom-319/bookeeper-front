import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from "react-bootstrap";

class AuthorFormComponent extends React.Component {

    state = {
        name: '',
        country: '',
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
            <Form>
                <Form.Group className="b-form-field-wrapper">
                    <Form.Control
                        className="b-author-name-form-field"
                        value={ this.state.name }
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={ this.onChange }
                    />
                </Form.Group>
                <Form.Group className="b-form-field-wrapper">
                    <Form.Control
                        className="b-author-country-form-field"
                        value={ this.state.country }
                        type="text"
                        name="country"
                        placeholder="Country"
                        onChange={ this.onChange }
                    />
                </Form.Group>
                <Button className="btn btn-primary mb-3" onClick={ this.onCreate }>Создать</Button>
            </Form>
        );
    }
}

AuthorFormComponent.propTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default AuthorFormComponent;
