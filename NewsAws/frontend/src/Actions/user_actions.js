import callApi from "../until/callAPI";
import * as Types from '../Constant/ActionType';

export const getError = message => {
    return {
        type: Types.LOGIN_ERR,
        message
    }
}
export const getLogin = data => {
    return {
        type: Types.LOGIN,
        data
    }
}
export const LoginAct = () => {
    return (dispatch) => {
        return callApi("login", "POST").then(res => {
            console.log(res);
            if (res.data.length <= 0) {
                dispatch(getError(res.data))
            }
            else {
                console.log(res.data);
                dispatch(getLogin(res.data));
            }
        })
    }
}