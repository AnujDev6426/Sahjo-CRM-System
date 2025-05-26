import axios from 'axios';
import { useEffect, useState, useMemo } from 'react';
import { REACT_APP_API_BASE } from './api.config';

const axiosInstance = () => {
    const [adminToken, setAdminToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        const handleStorageChange = () => {
            setAdminToken(localStorage.getItem('token'))
        };

        window.addEventListener("storage", handleStorageChange);
        
        return () => {
            window.removeEventListener("storage", handleStorageChange)
        };

    }, []);

    const axiosInstance = useMemo(() => {
        const instance = axios.create({
            baseURL: REACT_APP_API_BASE,
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
                Authorization: adminToken ? `Bearer ${adminToken}` : '',
                device_type: 'web'
            },
        });
   
        instance.interceptors.response.use(
            (response) => response,
            (error) => {
                if (error.response?.status === 401) {
                    console.warn('Unauthorized! Logging out...');
                    localStorage.removeItem('token')
                    setAdminToken(null)
                }
                return Promise.reject(error);
            }
        );

        const formDataInstance = axios.create({
            baseURL: REACT_APP_API_BASE,
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data",
                Authorization: adminToken ? `Bearer ${adminToken}` : "",
                device_type: "web",
            },


    })
    
        return { axios: instance, axiosFormData: formDataInstance };
    }, [adminToken]);

    return axiosInstance;
     
    
}

export default axiosInstance;
