import { Grid } from "@mui/material";

import SignupForm from "../../components/auth/SignupForm";

const SignupPage = () => {
	return (
		<Grid container justifyContent={"center"}>
			<Grid item xs={12} md={6} lg={4}>
				<SignupForm />
			</Grid>
		</Grid>
	);
};

export default SignupPage;
