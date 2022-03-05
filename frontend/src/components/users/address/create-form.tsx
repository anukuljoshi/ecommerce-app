import * as yup from "yup";
import { Formik } from "formik";

import { Box, Button, FormControl, Stack, TextField } from "@mui/material";

import { useAppDispatch } from "../../../redux/store";
import { createUserAddressAction } from "../../../redux/actions/users";

interface AddressCreateFormProps {
	handleClose: () => void;
}

const AddressCreateForm = ({ handleClose }: AddressCreateFormProps) => {
	const dispatch = useAppDispatch();
	return (
		<Formik
			initialValues={{
				location1: "",
				location2: "",
				location3: "",
				city: "",
				country: "",
			}}
			validationSchema={yup.object({
				location1: yup.string().required("Required"),
				city: yup.string().required("Required"),
				country: yup.string().required("Required"),
			})}
			onSubmit={(values, { setSubmitting, resetForm }) => {
				console.log(values);
				setSubmitting(false);
				dispatch(createUserAddressAction(values))
					.then((data) => {
						resetForm();
						setSubmitting(true);
						handleClose();
					})
					.catch((error) => {
						console.log(error);
						resetForm();
						setSubmitting(true);
						handleClose();
					});
			}}
		>
			{(props) => (
				<form onSubmit={props.handleSubmit}>
					<Stack spacing={2}>
						<FormControl fullWidth>
							<TextField
								id={"location1"}
								name={"location1"}
								label={"Location Line 1"}
								value={props.values.location1}
								onChange={props.handleChange}
								onBlur={props.handleBlur}
								error={
									!!props.touched.location1 &&
									!!props.errors.location1
								}
								helperText={
									!!props.touched.location1 &&
									!!props.errors.location1 &&
									props.errors.location1
								}
							/>
						</FormControl>
						<FormControl fullWidth>
							<TextField
								id={"location2"}
								name={"location2"}
								label={"Location Line 2"}
								value={props.values.location2}
								onChange={props.handleChange}
								onBlur={props.handleBlur}
								error={
									!!props.touched.location2 &&
									!!props.errors.location2
								}
								helperText={
									!!props.touched.location2 &&
									!!props.errors.location2 &&
									props.errors.location2
								}
							/>
						</FormControl>
						<FormControl fullWidth>
							<TextField
								id={"location3"}
								name={"location3"}
								label={"Location Line 3"}
								value={props.values.location3}
								onChange={props.handleChange}
								onBlur={props.handleBlur}
								error={
									!!props.touched.location3 &&
									!!props.errors.location3
								}
								helperText={
									!!props.touched.location3 &&
									!!props.errors.location3 &&
									props.errors.location3
								}
							/>
						</FormControl>
						<FormControl fullWidth>
							<TextField
								id={"city"}
								name={"city"}
								label={"City"}
								value={props.values.city}
								onChange={props.handleChange}
								onBlur={props.handleBlur}
								error={
									!!props.touched.city && !!props.errors.city
								}
								helperText={
									!!props.touched.city &&
									!!props.errors.city &&
									props.errors.city
								}
							/>
						</FormControl>
						<FormControl fullWidth>
							<TextField
								id={"country"}
								name={"country"}
								label={"Country"}
								value={props.values.country}
								onChange={props.handleChange}
								onBlur={props.handleBlur}
								error={
									!!props.touched.country &&
									!!props.errors.country
								}
								helperText={
									!!props.touched.country &&
									!!props.errors.country &&
									props.errors.country
								}
							/>
						</FormControl>
						<Box textAlign={"center"}>
							<Button type={"submit"} variant={"contained"}>
								Add Address
							</Button>
						</Box>
					</Stack>
				</form>
			)}
		</Formik>
	);
};

export default AddressCreateForm;
