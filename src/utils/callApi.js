import axios from 'axios';

const makeCallApi = async (url) => {
    try {
        const response = await axios(url);
        return response.data;
    } catch (err) {
        throw new Error(err);
    }
};

export default makeCallApi;
