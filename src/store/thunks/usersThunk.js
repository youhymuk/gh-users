import { BASE_URL, ITEMS_PER_PAGE } from 'constants/index';
import { makeCallApi } from 'utils';
import { setLoaded, dataRequested, setUserProfile, setUsersList } from 'store/actions';

export const getUsers =
    (perPage = ITEMS_PER_PAGE, since = 0) =>
    async (dispatch) => {
        dispatch(setLoaded(false));

        const data = await makeCallApi(`${BASE_URL}/users?per_page=${perPage}&since=${since}`);

        dispatch(setUsersList(data));
        dispatch(setLoaded(true));
    };

export const getUserProfile = (username) => async (dispatch) => {
    dispatch(setLoaded(false));

    const data = await makeCallApi(`${BASE_URL}/users/${username}`);

    dispatch(setUserProfile(data));
    dispatch(setLoaded(true));
};
