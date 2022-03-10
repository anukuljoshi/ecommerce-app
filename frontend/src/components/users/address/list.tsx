import {
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableRow,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

import AddressLabel from "./label";

import { useAppDispatch } from "../../../redux/store";
import { deleteUserAddressAction } from "../../../redux/actions/users";

interface AddressListProps {
	addresses: IUserAddress[];
}

const AddressList = ({ addresses }: AddressListProps) => {
	const dispatch = useAppDispatch();

	const handleAddressDelete = (addressPk: string | number) => {
		dispatch(deleteUserAddressAction(addressPk));
	};

	return (
		<Table>
			<TableBody>
				{addresses.map((address, index) => (
					<TableRow key={index}>
						<TableCell>
							<AddressLabel address={address} />
						</TableCell>
						<TableCell align="center" sx={{ maxWidth: "20px" }}>
							<IconButton
								onClick={() => handleAddressDelete(address.pk)}
							>
								<Delete color="error" />
							</IconButton>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default AddressList;
