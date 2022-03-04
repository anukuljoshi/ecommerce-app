import React from "react";

import { Alert, Snackbar } from "@mui/material";

interface PopNotificationProps {
	open: boolean;
	message: string;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopNotification = ({ open, message, setOpen }: PopNotificationProps) => {
	const handleClose = (event: React.SyntheticEvent | Event) => {
		setOpen(false);
	};

	return (
		<Snackbar
			open={open}
			autoHideDuration={1500}
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			onClose={handleClose}
		>
			<Alert
				onClose={handleClose}
				severity={"success"}
				sx={{ width: "100%" }}
			>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default PopNotification;
