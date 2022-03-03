import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

import { getAuthUserAction } from "../../redux/actions/auth";
import { IStoreState } from "../../redux/store";

const UnAuthRoute = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state: IStoreState) => state.auth);

	const token = localStorage.getItem("auth-token");

	useEffect(() => {
		if (!user || !user.pk) {
			dispatch(getAuthUserAction());
		}
	}, [dispatch, user]);

	return Boolean(token) ? <Navigate to={`/`} /> : <Outlet />;
};

export default UnAuthRoute;
