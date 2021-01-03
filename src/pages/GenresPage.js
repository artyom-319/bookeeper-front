import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import GenreList from "../components/genre/GenreList";

const GENRE_LIST = [
    {
        title: 'Genre 1',
    },
    {
        title: 'Genre 2',
    },
    {
        title: 'Genre 3',
    },
];

class GenresPageComponent extends React.Component {
    state = {
        genreList: [],
        isLoading: false,
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        window.setTimeout(
            () => this.setState({ genreList: GENRE_LIST, isLoading: false }),
            500
        );
    }

    render() {
        return (
            <div className="b-genre-container">
                <div className="row g-2">
                    <span className="large col-10" >Genres</span>
                </div>
                <br/>
                <GenreList isLoading={ this.state.isLoading } genreList={ this.state.genreList }/>
            </div>
        );
    }
}

export default GenresPageComponent;
