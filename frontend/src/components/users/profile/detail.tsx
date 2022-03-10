import { Card, Typography } from "@mui/material";

interface UserDetailProps {
	user: IUser;
}

const UserDetail = ({ user }: UserDetailProps) => {
	return (
		<Card sx={{ px: 3, py: 2 }}>
			<Typography variant="body1">{`Username: ${user.username}`}</Typography>
			<Typography variant="body1">{`Email: ${user.email}`}</Typography>
		</Card>
	);
};

export default UserDetail;
