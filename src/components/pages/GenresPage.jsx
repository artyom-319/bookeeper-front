import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import GenreList from "../genre/GenreList";

class GenresPageComponent extends React.Component {
    render() {
        return (
            <div className="b-genre-container">
                <div className="row g-2">
                    <span className="large col-10" >Genres</span>
                </div>
                <br/>
                <GenreList/>
            </div>
        );
    }
}

export default GenresPageComponent;
