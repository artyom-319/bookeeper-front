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
        if (this.props.isLoading) {
            return ( <div><Spinner animation="border" /></div> );
        }
        if (this.props.errorOccurred) {
            return ( <div><h3>{ this.props.errorMessage }</h3></div> );
        }
        const genres = this.props.genreTitles.map(
            genreTitle =>
                <ListGroup.Item key={ `item_${ genreTitle }` }>
                    <Genre title={ genreTitle } />
                </ListGroup.Item>
        );
        return (
            <div className="b-genre-list-container">
                <ListGroup>{ genres }</ListGroup>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    genreTitles: state.genre.list.genreTitles,
    isLoading: state.genre.list.isLoading,
    errorOccurred: state.genre.errors.plain.occurred,
    errorMessage: state.genre.errors.plain.message,
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({ loadGenres }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreListComponent);
