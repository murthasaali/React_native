 const axios=require("axios").default
import languages from "../constants/languages";
import { API_KEY,TMDB_BASE_URL,ENDPOINTS,TMDB_IMG_BASE_URL } from "../constants/urls";

const TMDB_HTTP_REQUEST=axios.create({
    baseURL:TMDB_BASE_URL,
    params:{
        api_key:API_KEY
    }
})

const getNowPlaying=()=>TMDB_HTTP_REQUEST.get(ENDPOINTS.NOW_PLAYING)

const getPoster=(path)=>`${TMDB_IMG_BASE_URL}/original${path}`

const getLanguage=(language_iso)=>languages.find((language)=>language.iso_639_1===language_iso)
export {getNowPlaying,getPoster,getLanguage}