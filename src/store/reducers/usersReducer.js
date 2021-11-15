import { TOGGLE_LOADED, SET_CURRENT_PAGE, SET_USER_PROFILE, SET_USERS_LIST } from 'store/constants';

const initialState = {
    list: [],
    profile: {},
    currentPage: 1,
    isLoaded: false,
};

const usersReducer = (state = initialState, { type, payload = {} }) => {
    switch (type) {
        case TOGGLE_LOADED:
            return {
                ...state,
                isLoaded: payload.isLoaded,
            };
        case SET_USERS_LIST:
            return {
                ...state,
                list: payload.users,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: payload.user,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: payload.page,
            };
        default:
            return state;
    }
};

export default usersReducer;
