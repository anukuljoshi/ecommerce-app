import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
	Box,
	Button,
	Card,
	CircularProgress,
	Grid,
	Typography,
} from "@mui/material";
import { AddRounded } from "@mui/icons-material";

import UserDetail from "../../../components/users/profile/detail";
import AddressList from "../../../components/users/address/list";
import AddressCreateModal from "../../../components/users/address/modal";

import { IStoreState, useAppDispatch } from "../../../redux/store";
import {
	getUserAddressAction,
	getUserDetailAction,
} from "../../../redux/actions/users";

const UserProfilePage = () => {
	const dispatch = useAppDispatch();
	const { loading, error, user } = useSelector(
		(state: IStoreState) => state.users.detail
	);
	const { list } = useSelector((state: IStoreState) => state.users.address);

	const [modalOpen, setModalOpen] = useState<boolean>(false);

	useEffect(() => {
		dispatch(getUserDetailAction());
	}, [dispatch]);

	useEffect(() => {
		if (user) {
			dispatch(getUserAddressAction());
		}
	}, [dispatch, user]);

	const handleOpen = () => {
		setModalOpen(true);
	};

	const handleClose = () => {
		setModalOpen(false);
	};

	if (error) {
		return (
			<Box textAlign={"center"}>
				<Typography variant={"h3"}>Error</Typography>
			</Box>
		);
	}

	if (loading) {
		return (
			<Box textAlign={"center"}>
				<CircularProgress color="inherit" />
			</Box>
		);
	}

	return (
		<>
			<Grid container justifyContent={"center"}>
				<Grid item xs={12} sm={10} md={8} lg={8}>
					{user && <UserDetail user={user} />}
					<Card sx={{ px: 3, py: 2, my: 2 }}>
						<Typography variant={"h6"}>My addresses</Typography>
						{list && list.length > 0 ? (
							<AddressList addresses={list} />
						) : (
							<Typography variant={"body1"}>
								No address
							</Typography>
						)}
						<Box sx={{ mt: 1 }}>
							<Button
								variant={"text"}
								size={"small"}
								onClick={handleOpen}
								startIcon={<AddRounded />}
							>
								Add New Address
							</Button>
						</Box>
						<AddressCreateModal
							open={modalOpen}
							handleOpen={handleOpen}
							handleClose={handleClose}
						/>
					</Card>
				</Grid>
			</Grid>
		</>
	);
};

export default UserProfilePage;
