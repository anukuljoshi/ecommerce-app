import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {
	AppBar,
	Box,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";
import { DarkModeRounded, LightModeRounded } from "@mui/icons-material";

import { IStoreState, useAppDispatch } from "../../redux/store";
import { logoutUserAction } from "../../redux/actions/auth";
import { setThemeAction } from "../../redux/actions/theme";

import { URLRoutes } from "../../constants/URLRoutes";
import React, { useState } from "react";

const Navbar = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((state: IStoreState) => state.auth);
	const { theme } = useSelector((state: IStoreState) => state.theme);

	const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);

	const handleLogout = () => {
		dispatch(logoutUserAction());
		navigate(`/${URLRoutes.LOGIN}`);
	};

	const handleChangeTheme = () => {
		dispatch(setThemeAction());
	};

	const handleOpenUserMenu = (e: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(e.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
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
							<Box>
								<span
									onClick={handleOpenUserMenu}
									className={"cursor-pointer"}
								>
									{user.username}
								</span>
								<Menu
									id={"user-menu-appbar"}
									anchorEl={anchorElUser}
									anchorOrigin={{
										vertical: "bottom",
										horizontal: "right",
									}}
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									keepMounted
									open={Boolean(anchorElUser)}
									onClose={handleCloseUserMenu}
								>
									<Link to={`/${URLRoutes.USER}`}>
										<MenuItem onClick={handleCloseUserMenu}>
											<Typography>{"Profile"}</Typography>
										</MenuItem>
									</Link>
									<Link
										to={`/${URLRoutes.USER}/${URLRoutes.CART}`}
									>
										<MenuItem onClick={handleCloseUserMenu}>
											<Typography>{"Cart"}</Typography>
										</MenuItem>
									</Link>
									<Link
										to={`/${URLRoutes.USER}/${URLRoutes.ORDERS}`}
									>
										<MenuItem onClick={handleCloseUserMenu}>
											<Typography>{"Orders"}</Typography>
										</MenuItem>
									</Link>
									<MenuItem
										onClick={() => {
											handleLogout();
											handleCloseUserMenu();
										}}
									>
										<Typography>{"Log Out"}</Typography>
									</MenuItem>
								</Menu>
							</Box>
						) : (
							// <>
							// 	<Link
							// 		to={`/${URLRoutes.USER}/${URLRoutes.CART}`}
							// 	>
							// 		Cart
							// 	</Link>

							// 	<Link
							// 		to={`/${URLRoutes.USER}/${URLRoutes.ORDERS}`}
							// 	>
							// 		Orders
							// 	</Link>
							// 	<span
							// 		className="cursor-pointer"
							// 		onClick={handleLogout}
							// 	>
							// 		Log Out
							// 	</span>
							// </>
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
