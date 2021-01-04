export const SELECT_PAGE = 'SELECT_PAGE';

export default function selectPage(activePage) {
    return {
        type: SELECT_PAGE,
        activePage,
    }
}
