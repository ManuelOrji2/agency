import styles from "./Nav.module.scss";
import { Link, useLocation } from "react-router-dom";

import { ThemeContext } from "../../contexts/Theme";
import { useContext, useRef } from "react";

import { navLinks } from "../../utils/navLinks";

import mailIcon from "../../images/icons8-mail-50.png";
import lightNdarkModeIcon from "../../images/icons8-dark-mode-50.png";
import hamburgerIcon from "../../images/icons8-hamburger.svg";
import Logo from "../../images/plogo.png";

import hamburgerCloseIcon from "../../images/X HamburgerMenu.png";

const Nav = () => {
	const [{ isDark }, toggleTheme] = useContext(ThemeContext);
	const location = useLocation();

	const openIcon: any = useRef();

	const navContents: any = useRef();

	const navModal: any = useRef();

	const [{ theme }] = useContext(ThemeContext);

	const closeIcon: any = useRef();

	function open() {
		navModal.current.style.display = "flex";
		navContents.current.style.display = "none";
	}

	function close() {
		navModal.current.style.display = "none";
		navContents.current.style.display = "flex";
	}

	return (
		<div>
			<nav className={styles.nav}>
				<div
					ref={navContents}
					className="flex items-center justify-between w-1/3 box-border "
				>
					<Link
						to="/"
						className=" cursor-pointer"
					>
						<img
							src={Logo}
							alt=""
							width={30}
							height={30}
						/>
					</Link>
					<div
						className={`flex gap-1 items-center font-semibold cursor-pointer ${styles.mailLink}`}
					>
						<img
							src={mailIcon}
							alt=""
							width={20}
							height={20}
						/>
						<a
							href="mailto:nuelorji98@gmail.com"
							rel="noopener noreferrer"
							target="_blank"
						>
							nuelorji98@gmail.com
						</a>
					</div>
					<div
						className="cursor-pointer"
						onClick={toggleTheme}
						title={isDark ? "Switch to Light" : "Switch to Dark"}
					>
						<img
							src={lightNdarkModeIcon}
							alt=""
							width={25}
							height={25}
						/>
					</div>
					<div
						className={styles.hamburgerIcon}
						ref={openIcon}
						onClick={() => open()}
					>
						<img
							src={hamburgerIcon}
							alt=""
						/>
					</div>
				</div>

				<div className="w-1/3 flex justify-evenly">
					{navLinks.map((navLink, i) => (
						<Link
							key={i}
							target={navLink.target}
							to={navLink.path}
							className={
								location.pathname === navLink.path
									? `flex gap-1 underline items-center cursor-pointer flex-1 ${styles.navlink}`
									: `flex gap-1 items-center cursor-pointer flex-1 ${styles.navlink}`
							}
						>
							<img
								src={navLink.imgSrc}
								alt=""
								width={20}
								height={20}
							/>
							<span>{navLink.name}</span>
						</Link>
					))}
				</div>
			</nav>
			<div
				className={styles.navModal}
				ref={navModal}
				style={{ background: theme.backgroundColor }}
			>
				<div className="absolute top-[20%] left-[50%]  right-[50%] flex flex-col gap-8 items-center text-center font-semibold">
					<Link to={"/"}>Home</Link>
					{navLinks.map((navLink, i) => (
						<Link
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
		</div>
	);
};

export default Nav;
