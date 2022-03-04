import { Routes, Route } from "react-router-dom";

import AuthRoute from "./components/auth/AuthRoute";
import UnAuthRoute from "./components/auth/UnAuthRoute";

import HomePage from "./pages";
import LoginPage from "./pages/auth/login";
import SignupPage from "./pages/auth/signup";

import { URLRoutes } from "./constants/URLRoutes";
import ProductListPage from "./pages/products/list";
import ProductDetailPage from "./pages/products/detail";

const MainRoutes = () => {
	return (
		<Routes>
			<Route path={""} element={<AuthRoute />}>
				<Route path={""} element={<HomePage />} />
				<Route path={"category"} element={<HomePage />} />
				<Route
					path={"category/:category"}
					element={<ProductListPage />}
				/>
				<Route
					path={"category/:category/products/:product"}
					element={<ProductDetailPage />}
				/>
			</Route>
			<Route path={`${URLRoutes.SIGNUP}`} element={<UnAuthRoute />}>
				<Route path={""} element={<SignupPage />} />
			</Route>
			<Route path={`${URLRoutes.LOGIN}`} element={<UnAuthRoute />}>
				<Route path={""} element={<LoginPage />} />
			</Route>
		</Routes>
	);
};

export default MainRoutes;
