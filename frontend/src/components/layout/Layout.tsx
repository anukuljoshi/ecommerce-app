import { Container, Toolbar } from "@mui/material";

import Navbar from "./Navbar";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Navbar />
			<Toolbar />
            <br />
			<Container>{children}</Container>
		</>
	);
};

export default Layout;
