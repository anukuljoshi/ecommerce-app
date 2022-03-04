import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";

import { logoutUserAction } from "../../redux/actions/auth";
import { IStoreState } from "../../redux/store";

import { URLRoutes } from "../../constants/URLRoutes";
import { COLORS } from "../../constants/colors";

const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((state: IStoreState) => state.auth);

	const handleLogout = () => {
		dispatch(logoutUserAction());
		navigate(`/${URLRoutes.LOGIN}`);
	};

	return (
		<AppBar sx={{ zIndex: 2000, background: `${COLORS.PRIMARY}` }}>
			<Toolbar>
				<Stack
					component={Container}
					direction={"row"}
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					<Stack direction={"row"} justifyContent={"start"}>
						<Link to={`${URLRoutes.HOME}`}>
                            <Typography variant={"h6"}>
                                Shop
                            </Typography>
                        </Link>
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
