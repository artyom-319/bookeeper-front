const urlPrefix = 'http://localhost:8081';

const urls = {
    authors: `${ urlPrefix }/api/authors`,
    books: `${ urlPrefix }/api/books`,
    genres: `${ urlPrefix }/api/genres`,
    login: `${ urlPrefix }/login`,
    logout: `${ urlPrefix }/logout`,
}

export default urls;
