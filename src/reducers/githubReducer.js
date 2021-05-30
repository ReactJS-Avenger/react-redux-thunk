import { FETCH_GITHUB_DATA } from "../actions/type";

const githubReducer= (state=[], action)=>{
    switch (action.type){
        case FETCH_GITHUB_DATA :
            return action.data 
        default:
            return state
    }
}
export default githubReducer