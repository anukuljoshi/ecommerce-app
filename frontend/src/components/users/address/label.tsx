interface AddressLabelProps {
	address: IUserAddress;
}

const AddressLabel = ({ address }: AddressLabelProps) => {
	return (
		<div>
			<div>{`${address.location1} ${
				address.location2 ? address.location2 : ""
			} ${address.location3 ? address.location3 : ""}`}</div>
			<div>{`${address.city}, ${address.country}`}</div>
		</div>
	);
};

export default AddressLabel;
