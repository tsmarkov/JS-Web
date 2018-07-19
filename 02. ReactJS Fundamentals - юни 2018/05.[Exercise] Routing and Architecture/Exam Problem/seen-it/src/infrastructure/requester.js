import $ from 'jquery'

const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_S19CbdAof';
const APP_SECRET = '4969946ece674d15988df891112c29d8';

function makeAuth(auth) {
    if (auth === 'basic') {
        return `Basic ${btoa(APP_KEY + ":" + APP_SECRET)}`;
    } else {
        return `Kinvey ${sessionStorage.getItem('authtoken')}`
    }
}

// request method (GET, POST, PUT)
// kinvey module (user/appdata)
// url endpoint
// auth
function makeRequest(method, module, endpoint, auth) {
    return {
        url: BASE_URL + module + '/' + APP_KEY + '/' + endpoint,
        method: method,
        headers: {
            'Authorization': makeAuth(auth)
        }
    }
}

function get(module, endpoint, auth) {
    return $.ajax(makeRequest('GET', module, endpoint, auth));
}

function post(module, endpoint, auth, data) {
    let obj = makeRequest('POST', module, endpoint, auth);
    if (data) {
        obj.data = data;
    }
    return $.ajax(obj);
}

function update(module, endpoint, auth, data) {
    let obj = makeRequest('PUT', module, endpoint, auth);
    obj.data = data;
    return $.ajax(obj);
}

function remove(module, endpoint, auth) {
    return $.ajax(makeRequest('DELETE', module, endpoint, auth));
}

export default {
    get,
    post,
    update,
    remove
}