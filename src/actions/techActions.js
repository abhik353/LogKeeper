import { GET_LOGS, GET_TECHS, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, CLEAR_LOGS, SET_LOADING, LOGS_ERROR, SEARCH_LOGS, ADD_TECH, DELETE_TECH, TECHS_ERROR } from "./Types"

// get techs
export const getTechs = () => async dispatch =>  {
    try{
        setLoading()

        const res = await fetch('/techs')
        const data = await res.json()

        dispatch({
            type: GET_TECHS,
            payload: data
        })
    
    }
    catch(err){
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
       
}
// add techs
export const addTechs = (tech) => async dispatch =>  {
    try{
        setLoading()

        const res = await fetch('/techs',{
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            } 
        })

        const data = await res.json()

        dispatch({
            type: ADD_TECH,
            payload: data
        })
    
    }
    catch(err){
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
       
}

//delete tech
export const deleteTechs = (id) => async dispatch =>  {
    try{
        setLoading()

        await fetch(`/techs/${id}`,{
            method: 'DELETE'
        })

        dispatch({
            type: DELETE_TECH,
            payload: id
        })
    
    }
    catch(err){
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
       
}

// set loading


export const setLoading = () =>{
    return{
        type: SET_LOADING   
    }
}