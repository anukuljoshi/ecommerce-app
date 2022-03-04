import React from "react";
import { Link } from "react-router-dom";

import {
	Box,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Toolbar,
} from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";

import { URLRoutes } from "../../../constants/URLRoutes";

interface SubCategoryDrawerProps {
	categories: IProductCategory[];
	drawerState: boolean;
	setDrawerState: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubCategoryDrawer = ({
	categories,
	drawerState,
	setDrawerState,
}: SubCategoryDrawerProps) => {
	const anchor = "left";

	const toggleDrawer = () => {
		setDrawerState((prev) => !prev);
	};

	const list = () => (
		<Box sx={{ width: 280, p: 1 }}>
			<Toolbar />
			<Box textAlign={"right"}>
				<IconButton onClick={() => setDrawerState(false)}>
					<CloseOutlined />
				</IconButton>
			</Box>
			<List>
				{categories.map((category, index) => (
					<ListItem button key={index}>
						<Link to={`/${URLRoutes.CATEGORY}/${category.slug}`}>
							<ListItemText primary={category.name} />
						</Link>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<div>
			<React.Fragment key={anchor}>
				<Drawer
					anchor={anchor}
					open={drawerState}
					onClose={toggleDrawer}
				>
					{list()}
				</Drawer>
			</React.Fragment>
		</div>
	);
};

export default SubCategoryDrawer;
