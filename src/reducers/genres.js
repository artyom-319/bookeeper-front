import update from 'react-addons-update';

import { LOAD_GENRES, LOAD_GENRES_ERROR, LOAD_GENRES_SUCCESS } from '../actions/genres';

const initialState = {
    genreTitles: [],
    genres: {},
    isLoading: false,
};

export default function genreReducer(store = initialState, action) {
    switch (action.type) {
        case LOAD_GENRES:
            return update(store, { isLoading: { $set: true } });
        case LOAD_GENRES_SUCCESS:
            const genreTitles = action.payload.map(e => e.title);
            const genres = action.payload.reduce((a, e) => ({...a, [e.title]: e}), {});
            return update(store, {
                isLoading: { $set: false },
                genreTitles: { $set: genreTitles },
                genres: {
                    $merge: genres,
                },
            });
        case LOAD_GENRES_ERROR:
            // todo: обработка
            return update(store, { isLoading: { $set: false } });
        default:
            return store;
    }
}
