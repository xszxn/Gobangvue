import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8080';
export const getAction = (url, paramters) => {
    return axios({
        url: url,
        method: 'get',
        params: paramters
    })
}

export const postAction = (url, paramters) => {
    return axios({
        url: url,
        method: 'post',
        params: paramters
    })
}

