import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from "react-bootstrap";

import Genre from "./Genre";

class GenreListComponent extends React.Component {
    render() {
        const genres = this.props.genreList.map(
            genre =>
                <ListGroup.Item>
                    <Genre key={ genre.title } title={ genre.title } />
                </ListGroup.Item>
        );
        return (
            <div className="b-genre-list-container">
                { this.props.isLoading ? <div>Загрузка....</div> : <ListGroup>{ genres }</ListGroup> }
            </div>
        );
    }
}

GenreListComponent.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    genreList: PropTypes.arrayOf(PropTypes.shape(Genre.propTypes)),
};

export default GenreListComponent;
