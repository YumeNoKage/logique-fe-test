import axios from 'axios';

export const getData = async (url, params) => {
    try {
        const data = await axios.get(url, {params: {...params}});
        return data
    } catch (error) { return error }
}