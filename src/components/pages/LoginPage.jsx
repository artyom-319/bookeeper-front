import React from 'react';
import { Button, Form } from 'react-bootstrap';

const initialState = {
    username: '',
    password: '',
};

class LoginPageComponent extends React.Component {
    state = initialState;

    onCreate = e => {
        e.preventDefault();
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
                        className="b-username-form-field"
                        value={ this.state.username }
                        type="text"
                        name="username"
                        placeholder="Your name"
                        onChange={ this.onChange }
                    />
                </Form.Group>
                <Form.Group className="b-form-field-wrapper">
                    <Form.Control
                        as="textarea"
                        className="b-password-form-field"
                        value={ this.state.password }
                        type="text"
                        name="password"
                        placeholder="Password"
                        onChange={ this.onChange }
                    />
                </Form.Group>
                <Button className="btn btn-primary mb-3" onClick={ this.onCreate }>Log In</Button>
            </Form>
        );
    }
}

export default LoginPageComponent;
