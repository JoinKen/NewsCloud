import * as Types from "../Constant/ActionType";
var initialState = [];

const user = (state = initialState, action) => {
    let json;
    switch (action.type) {
        case Types.LOGIN:
            json = {
                code: 200,
                data: action.data
            }
            state = json;
            return state;
        case Types.LOGIN_ERR:
            json = {
                code: 204,
                data: action.message
            }
            state = json;
            return state;
        default :
        return state;

    }
}
export default user;