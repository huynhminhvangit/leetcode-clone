import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {

    const token = JSON.parse(localStorage.getItem("access-token") + "");
    if (token) {
      // Configure this as per your backend requirements
      config.headers!["Authorization"] = token;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosClient