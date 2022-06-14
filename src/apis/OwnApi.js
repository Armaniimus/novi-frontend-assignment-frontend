import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8000/api',
    // baseURL: 'https://novi-api.armaniimus-webdevelopment.nl/public/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
});
