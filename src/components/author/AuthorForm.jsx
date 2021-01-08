import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

const initialState = {
    name: '',
    country: '',
};

class AuthorFormComponent extends React.Component {
    state = initialState;

    constructor(props) {
        super(props);
        if (props.name) {
            this.state = {
                id: props.id,
                name: props.name,
                country: props.country,
            };
        }
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.onSubmit(JSON.stringify(this.state));
        this.setState(initialState);
    };

    onChange = e => {
        this.setState({
            [ e.target.name ]: e.target.value,
        });
    };

    render() {
        const cancelButton = this.props.onCancel
            ? <Button className="btn btn-primary mb-3" variant='light' onClick={ this.props.onCancel }>Cancel</Button>
            : null;
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
                <Button className="btn btn-primary mb-3" onClick={ this.onSubmit }>Save</Button>
                { cancelButton }
            </Form>
        );
    }
}

AuthorFormComponent.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    country: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
};

export default AuthorFormComponent;
