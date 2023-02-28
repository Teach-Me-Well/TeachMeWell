export const Actions = {
    GET_ACCESS_TOKEN : "GET_ACCESS_TOKEN"        //created type
}

export const getAccessToken = (data) => {
return{
    type : Actions.GET_ACCESS_TOKEN,
    payload : data
}
}