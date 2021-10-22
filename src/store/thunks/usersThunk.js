import { BASE_URL, ITEMS_PER_PAGE } from '../../constants';
import { makeCallApi } from '../../utils';
import { dataLoaded, dataRequested, setUserProfile, setUsersList } from '../actions';

export const getUsers =
    (perPage = ITEMS_PER_PAGE, since = 0) =>
    async (dispatch) => {
        dispatch(dataRequested());

        const data = await makeCallApi(`${BASE_URL}?per_page=${perPage}&since=${since}`);

        dispatch(setUsersList(data));
        dispatch(dataLoaded());
    };

export const getUserProfile = (username) => async (dispatch) => {
    dispatch(dataRequested());

    const data = await makeCallApi(`${BASE_URL}/${username}`);

    dispatch(setUserProfile(data));
    dispatch(dataLoaded());
};
