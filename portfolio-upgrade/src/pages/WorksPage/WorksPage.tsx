import Nav from "../../components/Nav/Nav";
import Works from "../../components/Works/Works";

import styles from "../WorksPage/WorksPage.module.scss";

import { ThemeContext } from "../../contexts/Theme";
import { useContext } from "react";

const WorksPage = () => {
	const [{ theme }] = useContext(ThemeContext);

	return (
		<main
			className={styles.worksPage}
			style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
		>
			<Nav />
			<Works />
		</main>
	);
};

export default WorksPage;
