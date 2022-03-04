import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:8000/api",
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
