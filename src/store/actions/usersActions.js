import { SET_USERS_LIST, SET_USER_PROFILE, TOGGLE_LOADED, SET_CURRENT_PAGE } from 'store/constants';

export const setLoaded = (isLoaded) => ({
    type: TOGGLE_LOADED,
    payload: { isLoaded },
});

export const setUsersList = (users) => ({
    type: SET_USERS_LIST,
    payload: { users },
});

export const setUserProfile = (user) => ({
    type: SET_USER_PROFILE,
    payload: { user },
});

export const setCurrentPage = (page) => ({
    type: SET_CURRENT_PAGE,
    payload: { page },
});
