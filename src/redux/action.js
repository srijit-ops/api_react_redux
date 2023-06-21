import {fetching_users_request,fetch_success,fetch_failure} from "./actionTypes"
import axios from 'axios'
const fetch_users_request=()=>{
    type:fetching_users_request
}
const fetch_successful=(users)=>{
    return {
    type:fetch_success,
    payload:users
}
}
const fetch_error=(error)=>{
    return {
        type:fetch_failure,
        payload:error
    }
}
const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetch_users_request())
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(
                response=>{
                    const users= response.data.map((user)=>{
                        return {id:user.id,name: user.name, email:user.email}
                    })
                    dispatch(fetch_successful(users))
                }
            )
            .catch(
                error=>{
                    dispatch(fetch_error(error.message))
                }
            )
    }
}

export default {fetch_users_request,fetch_successful,fetch_error,fetchUsers}