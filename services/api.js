import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const apiLajes = axios.create({
    baseURL: 'http://localhost:5261',
    withCredentials: true
});

export const useApiLajes = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const interceptor = apiLajes.interceptors.response.use(
            response => response,
            error => {
                if (error.response && error.response.status === 401) {
                    navigate("/login");
                }
                return Promise.reject(error);
            }
        );

        return () => {
            apiLajes.interceptors.response.eject(interceptor);
        };
    }, [navigate]);

    return apiLajes;
};

export default apiLajes;
