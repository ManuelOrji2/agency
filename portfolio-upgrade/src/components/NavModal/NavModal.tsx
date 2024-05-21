import { navLinks } from "../../utils/navLinks";
import hamburgerCloseIcon from "../../images/X HamburgerMenu.png";
import { Link } from "react-router-dom";
import styles from "./NavModal.module.scss";
import { ThemeContext } from "../../contexts/Theme";
import { useContext, useRef } from "react";

const NavModal = () => {
	const navModal: any = useRef();

	const [{ theme }] = useContext(ThemeContext);

	const closeIcon: any = useRef();

	function open() {
		navModal.current.style.display = "block";
	}

	function close() {
		navModal.current.style.display = "none";
		closeIcon.current.style.display = "none";
	}

	return (
		<div
			className={styles.NavModal}
			style={{ background: theme.backgroundColor, display: "flex" }}
			ref={navModal}
		>
			<div className="absolute top-[20%] left-[50%] right-[50%] flex flex-col gap-8 items-center text-center">
				{navLinks.map((navLink, i) => (
					<Link
						className="w-[180px] text-center font-semibold"
						key={i}
						to={navLink.path}
					>
						{navLink.name}
					</Link>
				))}
			</div>
			<div
				onClick={() => close()}
				className="absolute top-12 left-8 cursor-pointer"
				ref={closeIcon}
			>
				<img
					src={hamburgerCloseIcon}
					alt=""
					width={15}
					height={15}
				/>
			</div>
		</div>
	);
};

export default NavModal;
