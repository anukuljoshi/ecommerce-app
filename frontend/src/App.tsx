import { useMemo } from "react";
import { useSelector } from "react-redux";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import MainRoutes from "./routes";
import Layout from "./components/layout/Layout";

import { IStoreState } from "./redux/store";

const App = () => {
	const { theme: themeMode } = useSelector(
		(state: IStoreState) => state.theme
	);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: themeMode,
				},
			}),
		[themeMode]
	);

	return (
		<ThemeProvider theme={theme}>
            <CssBaseline />
			<Layout>
				<MainRoutes />
			</Layout>
		</ThemeProvider>
	);
};

export default App;
