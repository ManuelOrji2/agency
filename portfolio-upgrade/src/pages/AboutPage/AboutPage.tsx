import Nav from "../../components/Nav/Nav";
import About from "../../components/About/About";

import styles from "../AboutPage/AboutPage.module.scss";

import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";

const AboutPage = () => {
	const [{ theme }] = useContext(ThemeContext);

	return (
		<main
			className={styles.AboutPage}
			style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
		>
			<Nav />
			<About />
		</main>
	);
};

export default AboutPage;
