import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import WorksPage from "./pages/WorksPage/WorksPage";

import gitHubIcon from "./images/icons8-github-32.png";
import linkedInIcon from "./images/icons8-linkedin-30.png";
import xIcon from "./images/icons8-twitterx-50.png";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeContext } from "./contexts/Theme";
import { useContext } from "react";

type contactDetail = {
	imgSrc: string;
	content: string;
	contactLink: string;
};

export const contactDetails: contactDetail[] = [
	{
		imgSrc: gitHubIcon,
		content: "Github",
		contactLink: "https://www.github.com/ManuelOrji2",
	},
	{
		imgSrc: linkedInIcon,
		content: "LinkedIn",
		contactLink: "https://www.linkedin.com/in/emmanuel-orji-497365212/",
	},
	{
		imgSrc: xIcon,
		content: "X",
		contactLink: "https:www.twitter.com/_Manuel_Orji",
	},
];

function App() {
	const [{ theme }] = useContext(ThemeContext);

	return (
		<div
			style={{
				backgroundColor: theme.backgroundColor,
				color: theme.color,
			}}
		>
			<BrowserRouter>
				<div className="flex items-center justify-center h-screen">
					<Routes>
						<Route
							index
							element={<HomePage />}
						/>
						<Route
							path="works"
							element={<WorksPage />}
						/>
						<Route
							path="about"
							element={<AboutPage />}
						/>
					</Routes>
				</div>
				{/* <NavModal /> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
