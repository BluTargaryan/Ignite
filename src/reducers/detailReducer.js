const initState = {
    game: { platforms: [] },
    screen: { results: [] },
    isLoading: true
};
//adding the values to the initstate seem to allow the game detail to render even tho detail is still empty

export const detailReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                game: action.payload.game,
                screen: action.payload.screen,
                isLoading: false
            }
        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading: true
            }
        default:
            return {
                ...state
            }
    }
}