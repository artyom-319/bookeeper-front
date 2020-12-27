import React from 'react';
import PropTypes from 'prop-types';

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
                <h2>Форма добавления</h2>
                <form>
                    <div className="b-form-field-wrapper">
                        <input
                            className="b-book-title-form-field"
                            value={ this.state.title }
                            type="text"
                            name="title"
                            placeholder="Заголовок книги"
                            onChange={ this.onChange }
                        />
                    </div>
                    <div className="b-form-field-wrapper">
                        <input
                            className="b-book-author-form-field"
                            value={ this.state.author }
                            type="text"
                            name="author"
                            placeholder="Автор книги"
                            onChange={ this.onChange }
                        />
                    </div>
                    <div className="b-form-field-wrapper">
                        <input
                            className="b-book-genre-form-field"
                            value={ this.state.genre }
                            type="text"
                            name="genre"
                            placeholder="Жанр книги"
                            onChange={ this.onChange }
                        />
                    </div>
                    <div className="b-form-field-wrapper">
                        <button onClick={ this.onCreate }>Создать</button>
                    </div>
                </form>
            </div>
        );
    }
}

BookFormComponent.propTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default BookFormComponent;
