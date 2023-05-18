

const baseURL = 'https://api.themoviedb.org/3';
const posterURL = 'https://image.tmdb.org/t/p/original';
const tokenAccess = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWI3ZjQ1MGNmNDljNTZkZTc4ZDRhYmZkNTc1NmMzNyIsInN1YiI6IjY0NTdmMmM0NzdkMjNiMDBlMmY0Y2ZjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yiMp2h6uyfQW8_ayuIk-PeLw4itRCg0oeFjRsJV1twk'


const urls = {
    movie:'./movie',
    discover_movie:'/discover/movie',
    genre: 'genre/movie/list',
    movie_popular:'/movie/popular',
    movie_top_rated:'/movie/top_rated',
    search_movie:'/search/movie',
    movie_now_playing:'/movie/now_playing',
    account:'/account',
}

export {
    baseURL,
    posterURL,
    tokenAccess,
    urls
}