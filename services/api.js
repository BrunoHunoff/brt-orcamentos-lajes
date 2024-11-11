import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const apiLajes = axios.create({
    baseURL: 'http://localhost:5261',
    withCredentials: true
});

export const useApiLajes = () => {
    const navigate = useNavigate();
    const [refreshed, setRefreshed] = useState(false)

    useEffect(() => {
        const interceptor = apiLajes.interceptors.response.use(
            response => response,
            async (error) => {

                if (error.code === "ERR_NETWORK") {
                    navigate("/error");
                    return Promise.reject(error);
                }

                if (error.response && error.response.status === 500) {
                    navigate("/error");
                    return Promise.reject(error);
                }

                if (error.response && error.response.status === 401 && !refreshed) {
                    setRefreshed(true);
                    try {
                        const refreshResponse = await apiLajes.post('/refresh');
                            if (refreshResponse !== 200) {
                                setRefreshed(false)
                                navigate("/login");
                                return;
                            }
                            setRefreshed(false)
                            return apiLajes.request(error.config);
                        
                    } catch (refreshError) {
                        setRefreshed(false)
                        navigate("/login");
                    }
                }
                return Promise.reject(error);
            }
        );

        // Remove o interceptor ao desmontar o componente
        return () => {
            apiLajes.interceptors.response.eject(interceptor);
        };
    }, [navigate, refreshed]);

    return apiLajes;
};

export default apiLajes;
