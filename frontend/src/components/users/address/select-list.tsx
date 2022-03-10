import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
} from "@mui/material";

import AddressLabel from "./label";

interface AddressSelectListProps {
	list: IUserAddress[];
	selectedAddress: string | number;
	setSelectedAddress: React.Dispatch<React.SetStateAction<string | number>>;
}

const AddressSelectList = ({
	list,
	selectedAddress,
	setSelectedAddress,
}: AddressSelectListProps) => {
	return (
		<FormControl>
			<FormLabel sx={{ mb: 1 }}>Select Address</FormLabel>
			<RadioGroup
				value={selectedAddress}
				onChange={(e) => setSelectedAddress(e.target.value)}
			>
				{list.map((address, index) => (
					<FormControlLabel
						label={<AddressLabel address={address} />}
						value={address.pk}
						control={<Radio />}
						key={index}
						sx={{ mb: 1 }}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
};

export default AddressSelectList;
