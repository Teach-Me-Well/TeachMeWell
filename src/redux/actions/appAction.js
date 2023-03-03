export const Actions = {
    GET_ACCESS_TOKEN : "GET_ACCESS_TOKEN"        //created type
}

export const getAccessToken = (data,productData,props) => {
return{
    type : Actions.GET_ACCESS_TOKEN,
    payload : data,productData,props
}
}