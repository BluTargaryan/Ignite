import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchedGameURL } from "../api";


//action creator
export const loadGames = () => async (dispatch) => {
    //fetch axios
    const popularData = await axios.get(popularGamesURL());
    const upcomingGamesData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingGamesData.data.results,
            newGames: newGamesData.data.results,
        }
    });
}

export const fetchSearched = (game_name) => async (dispatch) => {
    const searchedGames = await axios.get(searchedGameURL(game_name));
    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchedGames.data.results,
        }
    });
}

//