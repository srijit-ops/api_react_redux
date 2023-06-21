import initialState from "./initialState"
import {fetching_users_request,fetch_success,fetch_failure} from './actionTypes'
const reducer=(action,state=initialState)=>{
    {console.log(action)}
    switch (action.type){
        case fetching_users_request :{
            console.log("fetching users")
            return {
                ...state,
            }
        }
        case fetch_success:{
           return {
            ...state,
            loading:"false",
            users:action.payload
           } 
        }
        case fetch_failure:{
            return {
                ...state,
                loading:"false",
                error:action.payload
               } 
        }
        default:
            return initialState
    }
}
export default reducer