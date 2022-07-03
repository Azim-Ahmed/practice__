import * as actionTypes from "../actions/actionTypes";

const initState = {
    token: localStorage.getItem("token"),
    isAuth: null,
    showAuthModal: false,

    isLoading: false,
    user: null,
    isLogin: true,
};

export default function (state = initState, action) {
    switch (action.type) {
        case actionTypes.USER_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.TOGGLE_AUTH_MODAL:
            return {
                ...state,
                showAuthModal: !state.showAuthModal,
            };
        case actionTypes.USER_LOADED:
            return {
                ...state,
                isLoading: false,
                isAuth: true,
                user: action.payload,
            };

        case actionTypes.LOGIN_SUCCESS:
        case actionTypes.REGISTER_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuth: true,
                isLoading: false,
                showAuthModal: false,
            };
        case actionTypes.AUTH_ERROR:
        case actionTypes.LOGIN_FAIL:
        case actionTypes.LOGOUT_SUCCESS:
        case actionTypes.REGISTER_FAIL:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                user: null,
                isAuth: null,
                isLoading: false,
            };
        case actionTypes.CHANGE_AUTH_MODE:
            return {
                ...state,
                isLogin: !state.isLogin,
            };
        default:
            return state;
    }
}
