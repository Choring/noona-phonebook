let intialState = {
    contactList: "",
    searchName: ""
};

function reducer(state= intialState, action) {
    const {type, payload} = action
    switch (type) {
        case "ADD_CONTACT":
            return{...state, contactList:[...state.contactList,{name: payload.name , phoneNumber:payload.phoneNumber}]};
        case "SEARCH_NAME":
            return{...state, searchName:[ payload.searchName]};
        default:
            return{...state};
    }
} 

export default reducer;