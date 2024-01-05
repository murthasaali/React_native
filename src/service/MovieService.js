 const axios=require("axios").default
import languages from "../constants/languages";
import { API_KEY,TMDB_BASE_URL,ENDPOINTS,TMDB_IMG_BASE_URL } from "../constants/urls";

const TMDB_HTTP_REQUEST=axios.create({
    baseURL:TMDB_BASE_URL,
    params:{
        api_key:API_KEY
    }
})
const getSearchData = async (query) => {
    try {
      const response = await TMDB_HTTP_REQUEST.get(ENDPOINTS.SEARCH, {
        params: {
          api_key: API_KEY,
          query: query,
        },
      });
  
      return response.data.results; // Assuming the results are in the `results` property
    } catch (error) {
      console.error("Error fetching search data:", error);
      throw error; // Re-throw the error for potential handling elsewhere
    }
  };
const getNowPlaying=()=>TMDB_HTTP_REQUEST.get(ENDPOINTS.NOW_PLAYING)

const getPoster=(path)=>`${TMDB_IMG_BASE_URL}/original${path}`
const getUpcoming=()=>TMDB_HTTP_REQUEST.get(ENDPOINTS.UPCOMING_PLAYING)
const getLanguage=(language_iso)=>languages.find((language)=>language.iso_639_1===language_iso)
export {getNowPlaying,getPoster,getLanguage,getUpcoming,getSearchData}