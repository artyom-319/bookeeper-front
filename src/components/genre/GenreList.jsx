import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ListGroup, Spinner } from 'react-bootstrap';

import Genre from './Genre';
import { loadGenres } from '../../actions/genres';
import urls from '../../constants/urls';

class GenreListComponent extends React.Component {
    componentDidMount() {
        this.props.loadGenres(urls.genres);
    }

    render() {
        const genres = this.props.genreTitles.map(
            genreTitle =>
                <ListGroup.Item>
                    <Genre key={ genreTitle } title={ genreTitle } />
                </ListGroup.Item>
        );
        return (
            <div className="b-genre-list-container">
                { this.props.isLoading ? <Spinner animation="border" /> : <ListGroup>{ genres }</ListGroup> }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    genreTitles: state.genres.genreTitles,
    isLoading: state.genres.isLoading,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ loadGenres }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreListComponent);
