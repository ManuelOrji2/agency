import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";

import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";

import styles from "./HomePage.module.scss";

const HomePage = () => {
	const [{ theme }] = useContext(ThemeContext);
	return (
		<main
			className={styles.homePage}
			style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
		>
			<Nav />
			<Hero />
		</main>
	);
};

export default HomePage;
