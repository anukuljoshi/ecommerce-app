import { Outlet, Navigate } from "react-router-dom";

const UnAuthRoute = () => {
	const user = localStorage.getItem("auth-user");

	return Boolean(user) ? <Navigate to={`/`} /> : <Outlet />;
};

export default UnAuthRoute;
