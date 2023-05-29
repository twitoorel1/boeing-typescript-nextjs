// import { api } from "@/utils/api";
import { getCookie } from "@/utils/cookies";
import { authKeyCookieName } from "@/config";
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/auth/",
    headers: { "Content-Type": "application/json" },
})


export async function register(formValue: object) {
    try {
        const { data } = await api.post("register", formValue);
        // console.log("Data Registered: ", data);
        return data;
    } catch (error: any) {
        console.log("Error: Service => Register");
        return Promise.reject(error.response?.data?.message);
    }
}

export async function login(formValue: object) {
    // console.log(formValue)
    try {
        const { data } = await api.post("login", formValue);
        // console.log("Data Login: ", data);
        return data;
    } catch (error: any) {
        console.log("Error: Service => Login");
        return Promise.reject(error.response?.data?.message || error.message || "Server Error");
    }
}

export async function isLogin() {
    try {
        const token = await getCookie("ac-token");
        if (!token) Promise.reject();

        const response = await api.post("isLogin", { token });
        // console.log("Data isLogin: ", response.data);
        return response.data;
    } catch (error: any) {
        console.log("Error: Service => isLogin");
        return Promise.reject(error.response?.data?.message || error.message || "Server Error");
    }
}

export async function logout(userId: string) {
    try {
        const token = await getCookie("ac-token");
        if (!token) Promise.reject();
        const { data } = await api.post(`logout/${userId}`, { token });
        // console.log("Data Logout: ", data);
        return data;
    } catch (error: any) {
        console.log("Error: Service => logout");
        return Promise.reject(error.response?.data?.message || error.message || "Server Error");
    }
}