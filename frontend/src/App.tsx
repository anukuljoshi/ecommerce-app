import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { useMemo } from "react";

import Layout from "./components/layout/Layout";

import MainRoutes from "./routes";

const App = () => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? "dark" : "light",
				},
			}),
		[prefersDarkMode]
	);

	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<MainRoutes />
			</Layout>
		</ThemeProvider>
	);
};

export default App;
