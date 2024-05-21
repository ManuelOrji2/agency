import { createContext, useState } from "react";

const themes = {
	dark: {
		backgroundColor: "#070813",
		color: "#8a8e9b",
	},
	light: {
		backgroundColor: "whitesmoke",
		color: "#565758",
	},
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [isDark, setIsDark] = useState(true);
	const theme = isDark ? themes.dark : themes.light;
	const toggleTheme = () => {
		setIsDark(!isDark);
	};
	return (
		<ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
			{children}
		</ThemeContext.Provider>
	);
};
