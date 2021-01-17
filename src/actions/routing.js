export const SELECT_PAGE = 'SELECT_PAGE';

export default function selectPage(activePage, entityId=null) {
    return {
        type: SELECT_PAGE,
        activePage,
        entityId,
    };
}
