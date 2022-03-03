import axios from "axios";
import * as yup from "yup";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

import {
	Button,
	FormControl,
	Paper,
	Stack,
	TextField,
	Typography,
} from "@mui/material";

import { BASE_API_URL } from "../../constants/api";
import { URLRoutes } from "../../constants/URLRoutes";

const SignupForm = () => {
	const navigate = useNavigate();
	return (
		<Formik
			initialValues={{
				username: "",
				email: "",
				password: "",
			}}
			validationSchema={yup.object({
				username: yup.string().required("Required"),
				email: yup
					.string()
					.required("Required")
					.email("Email must be valid"),
				password: yup.string().required("Required"),
			})}
			onSubmit={(values, { setSubmitting, setStatus }) => {
				setSubmitting(false);
				axios
					.post(`${BASE_API_URL}/users/signup/`, values, {
						headers: {
							"Content-Type": "application/json",
						},
					})
					.then((res) => {
						if (res.status === 201) {
							setSubmitting(true);
							navigate(`/${URLRoutes.LOGIN}`);
						}
					})
					.catch((error) => {
						setSubmitting(true);
						console.log("signup error", error);
						if (error.response.status === 400) {
							setStatus(error.response.data);
						}
					});
				setSubmitting(true);
			}}
		>
			{(props) => (
				<form onSubmit={props.handleSubmit}>
					<Stack
						component={Paper}
						alignItems={"center"}
						spacing={2}
						sx={{ p: 3 }}
					>
						<Typography variant={"h4"} gutterBottom>
							Sign Up
						</Typography>
						<FormControl fullWidth>
							<TextField
								id={"username"}
								name={"username"}
								label={"Username"}
								type={"text"}
								value={props.values.username}
								onChange={props.handleChange}
								error={
									(!!props.touched.username &&
										!!props.errors.username) ||
									(!!props.status && !!props.status.username)
								}
								helperText={
									(!!props.touched.username &&
										!!props.errors.username &&
										props.errors.username) ||
									(!!props.status &&
										!!props.status.username &&
										props.status.username)
								}
							/>
						</FormControl>
						<FormControl fullWidth>
							<TextField
								id={"email"}
								name={"email"}
								label={"Email"}
								type={"text"}
								value={props.values.email}
								onChange={props.handleChange}
								error={
									(!!props.touched.email &&
										!!props.errors.email) ||
									(!!props.status && !!props.status.email)
								}
								helperText={
									(!!props.touched.email &&
										!!props.errors.email &&
										props.errors.email) ||
									(!!props.status &&
										!!props.status.email &&
										props.status.email)
								}
							/>
						</FormControl>
						<FormControl fullWidth>
							<TextField
								id={"password"}
								name={"password"}
								label={"Password"}
								type={"password"}
								value={props.values.password}
								onChange={props.handleChange}
								error={
									(!!props.touched.password &&
										!!props.errors.password) ||
									(!!props.status && !!props.status.password)
								}
								helperText={
									(!!props.touched.password &&
										!!props.errors.password &&
										props.errors.password) ||
									(!!props.status &&
										!!props.status.password &&
										props.status.password)
								}
							/>
						</FormControl>
						<Button variant={"contained"} type={"submit"}>
							Sign Up
						</Button>
					</Stack>
				</form>
			)}
		</Formik>
	);
};

export default SignupForm;
