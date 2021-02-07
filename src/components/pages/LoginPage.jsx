import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';
import { login } from '../../actions/auth';

const initialState = {
    username: '',
    password: '',
};

class LoginPageComponent extends React.Component {
    state = initialState;

    onCreate = e => {
        e.preventDefault();
        let { username, password } = this.state;
        this.props.login(username, password);
    };

    onChange = e => {
        this.setState({
            [ e.target.name ]: e.target.value,
        });
    };

    render() {
        if (this.props.authenticated) {
            return <Redirect to="/books"/>;
        }
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
                        className="b-password-form-field"
                        value={ this.state.password }
                        type="password"
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

const mapStateToProps = state => ({
    authenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ login }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageComponent);
