import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

import { loadAuthors } from '../../actions/authors';
import { createBook } from '../../actions/books';
import urls from '../../constants/urls';


const initialState = {
    title: '',
    genreTitle: '',
    authorId: '',
};

class BookFormComponent extends React.Component {
    state = initialState;

    constructor(props) {
        super(props);
        if (props.id) {
            this.state = {
                id: props.id,
                title: props.title,
                genreTitle: props.genre,
                authorId: props.author ? props.author.id : '',
            };
        }
    }

    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.onSubmit(JSON.stringify(this.state));
    };

    onChange = e => {
        this.setState({
            [ e.target.name ]: e.target.value,
        });
    };

    componentDidMount() {
        this.props.loadAuthors(urls.authors);
    }

    prepareOptions = () => {
        const authorArray = Object.values(this.props.authors);
        return authorArray.map(this.mapAuthorToOption);
    };

    mapAuthorToOption = author => (
        <option key={ author.id }
                value={ author.id }
                selected={ author.id === this.state.authorId }
        >{ author.name }</option>
    );

    render() {
        const cancelButton = this.props.onCancel
            ? <Button className="btn btn-primary mb-3" variant='light' onClick={ this.props.onCancel }>Cancel</Button>
            : null;
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
                    <Form.Group>
                        <Form.Control
                            as="select" custom
                            name="authorId"
                            value={ this.state.authorId }
                            onChange={ this.onChange }
                        >
                            <option style={{ display: 'none' }}>Author</option>
                            { this.prepareOptions() }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="b-form-field-wrapper">
                        <Form.Control
                            className="b-book-genre-form-field"
                            value={ this.state.genreTitle }
                            type="text"
                            name="genreTitle"
                            placeholder="Genre"
                            onChange={ this.onChange }
                        />
                    </Form.Group>
                    <Button className="btn btn-primary mb-3" onClick={ this.onSubmit }>Save</Button>
                    { cancelButton }
                    { this.props.errorOccurred ? <div className="alert-danger" >{ this.props.errorMessage }</div> : null }
                </Form>
            </div>
        );
    }
}

BookFormComponent.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    genreTitle: PropTypes.string,
    authorId: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
};

const mapStateToProps = state => ({
    authors: state.author.list.objects,
    errorOccurred: state.book.errors.form.occurred,
    errorMessage: state.book.errors.form.message,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ loadAuthors, createBook }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookFormComponent);
