import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID XEEhlJTrjfL5S4-Fqzg-5cInLq9gJ3MDOX0u4xnfSos'
    }
});