import {ADD_ARTICLE, initialState} from '../constants/index.js'

export const rootReducer = (state = initialState, action) => {
    if(action.type === ADD_ARTICLE) {
        return Object.assign( {},
            state,
            {
                articles: state.articles.concat(action.payload)
            })
    }
    return state
}

export default rootReducer
