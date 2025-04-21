import axios from "axios"
import { useDispatch, useSelector } from "react-redux"; 

const api = axios.create({
  baseURL: 'https://dashecom.barid.ma/backend/api',
});

api.interceptors.request.use(config =>{

    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default api;