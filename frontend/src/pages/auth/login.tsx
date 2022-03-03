import { Grid } from "@mui/material";

import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
	return (
		<Grid container justifyContent={"center"}>
			<Grid item xs={12} md={6} lg={4}>
				<LoginForm />
			</Grid>
		</Grid>
	);
};

export default LoginPage;
