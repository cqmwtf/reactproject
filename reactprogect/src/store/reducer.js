let reducer =(state,action)=>{
    let {type,payload}=action;
    switch(type){
        case 'VIEW_LOADING':
            return Object.assign({},state,{bLoading: payload });
        case 'UPDATE_HOME' :
            return Object.assign({},state,{home: payload });
        case 'UPDATE_RECOMMD' :
            return Object.assign({},state,{recommd:payload});
        case 'UPDATA_SORT' :
            return Object.assign({},state,{sort:payload});
        case 'UPDATA_DETAILS' :
            return Object.assign({},state,{details:payload});
        case 'UPDATA_BANNER' :
            return Object.assign({},state,{banner:payload});
        case 'UPDATE_USER':
            return Object.assign({},state,{user:payload})
        case 'UPDATE_REG':
            return Object.assign({},state,{reg:payload})
        default:return state
    }
}
export default reducer;