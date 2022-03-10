import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import AddressLabel from "./label";

interface AddressListProps {
	addresses: IUserAddress[];
}

const AddressList = ({ addresses }: AddressListProps) => {
	return (
		<Table>
			<TableBody>
				{addresses.map((address, index) => (
					<TableRow key={index}>
						<TableCell>
							<AddressLabel address={address} />
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default AddressList;
