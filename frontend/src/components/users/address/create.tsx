import { Modal, Stack, Typography } from "@mui/material";

import AddressCreateForm from "./create-form";

interface AddressCreateProps {
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
};

const AddressCreate = ({
	open,
	handleOpen,
	handleClose,
}: AddressCreateProps) => {
	return (
		<Modal open={open} onClose={handleClose}>
			<Stack sx={modalStyle}>
				<div className="py-3 mb text-center bg-slate-800">
					<Typography variant={"h5"}>
						{"Add a new address"}
					</Typography>
				</div>
				<div className="px-10 py-5">
					<AddressCreateForm handleClose={handleClose} />
				</div>
			</Stack>
		</Modal>
	);
};

export default AddressCreate;
