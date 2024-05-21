import HeroImg from "../../images/orji.png";
import letChatsIcon from "../../images/let'schat.png";

import { contactDetails } from "../../App";

import styles from "../Hero/Hero.module.scss";

const Hero = () => {
	return (
		<main
			className={`${styles.hero} relative flex justify-around items-center w-full h-[80%] px-12 text-lg text-gray-600`}
		>
			<div className="relative">
				<h1 className="text-5xl font-semibold mb-2">
					Orji
					<br className={styles.br} />
					<span> </span>Emmanuel .I
				</h1>
				<span className="font-semibold text-2xl">FRONT-END DEVELOPER</span>
				<br />
				<p className="w-[370px] mt-4">
					I'm an adept front-end developer with great experience in building
					amazing websites/applications with modern technologies.
				</p>
				<br />
				<div className={`${styles.heroBtn}`}>
					<a
						href="https://www.linkedin.com/in/emmanuel-orji-497365212/"
						rel="noopener noreferrer"
						target="_blank"
					>
						<img
							className={`${styles.letsChat}  cursor-pointer`}
							src={letChatsIcon}
							alt=""
							width={80}
						/>
					</a>
				</div>
			</div>
			<div className={styles.heroImg}>
				<img
					className="rounded-full"
					src={HeroImg}
					alt=""
					width={350}
				/>
			</div>
			<div className={styles.contactLinks}>
				{contactDetails.map((detail, i) => (
					<a
						href={detail.contactLink}
						key={i}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={detail.imgSrc}
							alt=""
							width={25}
							className="cursor-pointer"
							title={detail.content}
						/>
					</a>
				))}
			</div>
		</main>
	);
};

export default Hero;
