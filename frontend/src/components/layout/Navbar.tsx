import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
	AppBar,
	Container,
	IconButton,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";

import { IStoreState, useAppDispatch } from "../../redux/store";
import { logoutUserAction } from "../../redux/actions/auth";
import { setThemeAction } from "../../redux/actions/theme";

import { URLRoutes } from "../../constants/URLRoutes";

const Navbar = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((state: IStoreState) => state.auth);
	const { theme } = useSelector((state: IStoreState) => state.theme);

	const handleLogout = () => {
		dispatch(logoutUserAction());
		navigate(`/${URLRoutes.LOGIN}`);
	};

	const handleChangeTheme = () => {
		dispatch(setThemeAction());
	};

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
						<Link to={`${URLRoutes.HOME}`}>
							<Typography variant={"h6"}>Shop</Typography>
						</Link>
					</Stack>
					<Stack
						direction={"row"}
						justifyContent={"end"}
						alignItems={"center"}
						spacing={2}
					>
						{theme === "dark" ? (
							<IconButton
								size={"small"}
								onClick={handleChangeTheme}
							>
								<LightModeRounded />
							</IconButton>
						) : (
							<IconButton
								size={"small"}
								onClick={handleChangeTheme}
							>
								<DarkModeRounded />
							</IconButton>
						)}
						{user ? (
							<>
								<Link
									to={`/${URLRoutes.USER}/${URLRoutes.CART}`}
								>
									Cart
								</Link>

								<Link
									to={`/${URLRoutes.USER}/${URLRoutes.ORDERS}`}
								>
									Orders
								</Link>
								<span
									className="cursor-pointer"
									onClick={handleLogout}
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
