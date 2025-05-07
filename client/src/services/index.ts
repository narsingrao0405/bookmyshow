import axios from "axios";

const token = localStorage.getItem("token");


export const axiosInstance= axios.create({
    headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : "",
    },
    baseURL: "http://localhost:3000",
    //withCredentials: true,
    
});



