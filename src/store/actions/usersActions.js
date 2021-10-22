import { SET_USERS_LIST, SET_USER_PROFILE, DATA_REQUESTED, DATA_LOADED, SET_CURRENT_PAGE } from '../../constants';

export const dataRequested = () => ({
    type: DATA_REQUESTED,
});

export const dataLoaded = () => ({
    type: DATA_LOADED,
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
