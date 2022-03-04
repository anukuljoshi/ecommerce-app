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

import { loginUserAction } from "../../redux/actions/auth";
import { useAppDispatch } from "../../redux/store";

import { BASE_API_URL } from "../../constants/api";

const LoginForm = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	return (
		<Formik
			initialValues={{
				username: "",
				password: "",
			}}
			validationSchema={yup.object({
				username: yup.string().required("Required"),
				password: yup.string().required("Required"),
			})}
			onSubmit={(values, { setSubmitting, setStatus }) => {
				setSubmitting(false);
				axios
					.post(`${BASE_API_URL}/users/login/`, values, {
						headers: {
							"Content-Type": "application/json",
						},
					})
					.then((res) => {
						if (res.status === 200) {
							setSubmitting(true);
							dispatch(loginUserAction(res.data));
							navigate(`/`);
						}
					})
					.catch((error) => {
						setSubmitting(true);
						console.log("login error", error);
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
							Log In
						</Typography>
						{!!props.status && !!props.status.message && (
							<div className="text-red-500 text-sm">
								{props.status.message}
							</div>
						)}
						<FormControl fullWidth>
							<TextField
								id={"username"}
								name={"username"}
								label={"Username"}
								type={"text"}
								value={props.values.username}
								onChange={props.handleChange}
								error={
									!!props.touched.username &&
									!!props.errors.username
								}
								helperText={
									!!props.touched.username &&
									!!props.errors.username &&
									props.errors.username
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
									!!props.touched.password &&
									!!props.errors.password
								}
								helperText={
									!!props.touched.password &&
									!!props.errors.password &&
									props.errors.password
								}
							/>
						</FormControl>
						<Button variant={"contained"} type={"submit"}>
							Log In
						</Button>
					</Stack>
				</form>
			)}
		</Formik>
	);
};

export default LoginForm;
