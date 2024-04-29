import { LOGIN_STATUS, LOGOUT_STATUS, STATE } from "../types/type.app"

const initialState = {
    isLogin: STATE.PENDING,
    userInfo: null,
    subNav: null,
    error: false,
}

export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_STATUS.LOGIN_START: {
            let stateLoginSuccess = { ...state };
            stateLoginSuccess.userInfo = action.payload;
            return stateLoginSuccess;
        }

        case LOGIN_STATUS.LOGIN_SUCCESS: {
            let stateLoginSuccess = { ...state };
            stateLoginSuccess.isLogin = STATE.RESOLVE;
            stateLoginSuccess.userInfo = action.payload;
            return stateLoginSuccess;
        }

        case LOGIN_STATUS.LOGIN_FAIL: {
            let stateLoginFail = { ...state };
            stateLoginFail.isLogin = STATE.REJECT;
            return stateLoginFail;
        }

        case LOGOUT_STATUS.LOGOUT_SUCCESS: {
            const resetState = {
                isLogin: STATE.PENDING,
                userInfo: null,
                subNav: null,
                error: false,
            }
            return resetState;
        }
        case LOGOUT_STATUS.LOGOUT_FAIL: {
            let stateLogoutSuccess = { ...state };
            return stateLogoutSuccess;
        }
        default:
            return state
    }
}