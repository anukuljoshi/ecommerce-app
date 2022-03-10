import axios from "axios";

import { BASE_API_URL } from "../constants/api";

const axiosInstance = axios.create({
	baseURL: `${BASE_API_URL}`,
	headers: {
		"Content-Type": "application/json",
		Authorization: `Token ${localStorage.getItem("auth-token")}`,
	},
});

axiosInstance.interceptors.request.use((req) => {
	let token = localStorage.getItem("auth-token");

	if (!token) {
		localStorage.removeItem("auth-user");
		localStorage.removeItem("auth-token");
		return req;
	}
	req.headers!.Authorization = `Token ${token}`;
	return req;
});

export default axiosInstance;
