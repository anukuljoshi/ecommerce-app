import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button, Stack } from "@mui/material";
import { AddRounded } from "@mui/icons-material";

import AddressSelectList from "../address/select-list";
import AddressCreateModal from "../address/modal";

import { IStoreState, useAppDispatch } from "../../../redux/store";
import {
	createUserOrderAction,
	getUserAddressAction,
} from "../../../redux/actions/users";

import { URLRoutes } from "../../../constants/URLRoutes";

const OrderCreate = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const { list } = useSelector((state: IStoreState) => state.users.address);

	const [selectedAddress, setSelectedAddress] = useState<string | number>("");
	const [open, setOpen] = useState<boolean>(false);

	useEffect(() => {
		dispatch(getUserAddressAction());
	}, [dispatch]);

	useEffect(() => {
		if (list.length > 0) {
			setSelectedAddress(list[0].pk);
		}
	}, [list]);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOrderCreate = () => {
		dispatch(createUserOrderAction(selectedAddress)).then((data) => {
			navigate(`/${URLRoutes.USER}/${URLRoutes.ORDERS}`);
		});
	};

	return (
		<Stack spacing={1}>
			{list && (
				<AddressSelectList
					list={list}
					selectedAddress={selectedAddress}
					setSelectedAddress={setSelectedAddress}
				/>
			)}
			<div>
				<Button
					variant={"text"}
					size={"small"}
					onClick={handleOpen}
					startIcon={<AddRounded />}
				>
					Add New Address
				</Button>
			</div>
			<div>
				<Button variant={"contained"} onClick={handleOrderCreate}>
					Create Order
				</Button>
			</div>
			<AddressCreateModal
				open={open}
				handleOpen={handleOpen}
				handleClose={handleClose}
			/>
		</Stack>
	);
};

export default OrderCreate;
