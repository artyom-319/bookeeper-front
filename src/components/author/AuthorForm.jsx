import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

import { createAuthor } from '../../actions/authors';
import urls from '../../constants/urls';

const initialState = {
    name: '',
    country: '',
};

class AuthorFormComponent extends React.Component {
    state = initialState;

    onCreate = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.createAuthor(urls.authors, JSON.stringify(this.state));
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

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ createAuthor }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorFormComponent);
