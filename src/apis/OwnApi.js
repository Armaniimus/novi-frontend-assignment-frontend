import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
});