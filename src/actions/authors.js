export const LOAD_AUTHORS = 'LOAD_AUTHORS';
export const LOAD_AUTHORS_SUCCESS = 'LOAD_AUTHORS_SUCCESS';
export const LOAD_AUTHORS_ERROR = 'LOAD_AUTHORS_ERROR';

export function loadAuthors() {
    return {
        type: LOAD_AUTHORS,
    };
}

export function loadAuthorsSuccess(apiResponse) {
    return {
        type: LOAD_AUTHORS_SUCCESS,
        apiResponse,
    };
}

export function loadAuthorsError() {
    return {
        type: LOAD_AUTHORS_ERROR,
    };
}
