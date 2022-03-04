import { Outlet, Navigate } from "react-router-dom";

import { URLRoutes } from "../../constants/URLRoutes";

const AuthRoute = () => {
	const user = localStorage.getItem("auth-user");

	return Boolean(user) ? <Outlet /> : <Navigate to={`/${URLRoutes.LOGIN}`} />;
};

export default AuthRoute;
