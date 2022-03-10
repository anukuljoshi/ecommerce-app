import { Modal, Stack, Typography } from "@mui/material";

import AddressCreateForm from "./create-form";

interface AddressCreateModalProps {
	open: boolean;
	handleOpen: () => void;
	handleClose: () => void;
}

const modalStyle = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "450px",
	bgcolor: "background.paper",
	overflow: "auto",
	height: "80%",
	px: 5,
	py: 2,
};

const AddressCreateModal = ({
	open,
	handleOpen,
	handleClose,
}: AddressCreateModalProps) => {
	return (
		<Modal open={open} onClose={handleClose}>
			<Stack sx={modalStyle} spacing={2}>
				<Typography variant={"h5"} textAlign={"center"}>
					{"Add a new address"}
				</Typography>
				<div>
					<AddressCreateForm handleClose={handleClose} />
				</div>
			</Stack>
		</Modal>
	);
};

export default AddressCreateModal;
