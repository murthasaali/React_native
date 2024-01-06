const config=require("../../package.json")
const TMDB_BASE_URL="https://api.themoviedb.org/3"
const TMDB_IMG_BASE_URL="https://image.tmdb.org/t/p"

const API_KEY=config.projectConfig.apiKey
const YOU_TUBE="https://www.youtube.com/watch"

const ENDPOINTS={
    NOW_PLAYING:"/movie/now_playing",
    UPCOMING_PLAYING:"/movie/upcoming",
    SEARCH: "/search/movie",
    MOVIE:"/movie"

}
const APPEND_YO_RESPONSE={
    VEDIO:"videos"
}

export {TMDB_BASE_URL,TMDB_IMG_BASE_URL,API_KEY,ENDPOINTS,APPEND_YO_RESPONSE,YOU_TUBE}