import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AppBar, Container, Stack, Toolbar } from "@mui/material";

import { logoutUserAction } from "../../redux/actions/auth";
import { IStoreState } from "../../redux/store";

import { URLRoutes } from "../../constants/URLRoutes";

const Navbar = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state: IStoreState) => state.auth);

	return (
		<AppBar>
			<Toolbar>
				<Stack
					component={Container}
					direction={"row"}
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					<Stack direction={"row"} justifyContent={"start"}>
						<Link to={`${URLRoutes.HOME}`}>Shop</Link>
					</Stack>
					<Stack
						direction={"row"}
						justifyContent={"end"}
						alignItems={"center"}
						spacing={2}
					>
						{user ? (
							<>
								<Link
									to={`/${URLRoutes.USER}/${URLRoutes.CART}`}
								>
									Cart
								</Link>
								<span
									className="cursor-pointer"
									onClick={() => dispatch(logoutUserAction())}
								>
									Log Out
								</span>
							</>
						) : (
							<>
								<Link to={`${URLRoutes.LOGIN}`}>Log in</Link>
								<Link to={`${URLRoutes.SIGNUP}`}>Sign up</Link>
							</>
						)}
					</Stack>
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
