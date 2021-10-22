import { DATA_LOADED, DATA_REQUESTED, SET_CURRENT_PAGE, SET_USER_PROFILE, SET_USERS_LIST } from '../../constants';

const initialState = {
    usersList: [],
    userProfile: {},
    currentPage: 1,
    isLoaded: false,
};

const usersReducer = (state = initialState, { type, payload = {} }) => {
    switch (type) {
        case DATA_REQUESTED:
            return {
                ...state,
                isLoaded: false,
            };
        case DATA_LOADED:
            return {
                ...state,
                isRequested: false,
                isLoaded: true,
            };
        case SET_USERS_LIST:
            return {
                ...state,
                usersList: payload.users,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: payload.user,
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
