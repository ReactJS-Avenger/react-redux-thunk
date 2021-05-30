import { FETCH_GITHUB_DATA } from "./type";
import axios from 'axios'

const apiUrl = 'https://api.github.com/users/KrunalLathiya';

export const fetchData = (data) =>{
    return {
        type: FETCH_GITHUB_DATA,
        data
    }
}

export const fetchGithubData= () =>{
    return (dispatch) =>{
        return axios.get(apiUrl)
        .then((response)=>{
            dispatch(fetchData(response))
        })
        .catch(error =>{
            throw(error)
        })
    }
}