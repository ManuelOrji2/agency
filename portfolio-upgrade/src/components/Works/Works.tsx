import styles from "./Works.module.scss";
import agencyProjectIcon from "../../images/agency.jpg";
import calcProjecticon from "../../images/calculator.4acb2cf3533331ba63f3.png";
import yummyPizProjectIcon from "../../images/yummypiz.861ca067444e1faa4d0d.png";
import jokeTellerProjectIcon from "../../images/joke teller.860049b4c0f7ad758764.png";
import videoPlayerProjectIcon from "../../images/video player.4a8defc9a8332e571258.png";
import musicPlayerProjectIcon from "../../images/music player.42f238e59176f592335f.png";
import dragNDropProjectIcon from "../../images/dnd.733462f3088581dd712b.png";
import countdownTimerProjectIcon from "../../images/custom countdown timer.9bd98a80f20dfca2d96a.png";
import quoteGeneratorProjectIcon from "../../images/quote gen.f6254c309c612bce7c93.png";
import infinteScrollProjectIcon from "../../images/infinite scroll image.965291218776d1831684.png";

type worksDetail = {
	imgSrc: string;
	text: string;
	url: string;
};

const worksDetails: worksDetail[] = [
	{
		imgSrc: agencyProjectIcon,
		text: "Agency",
		url: "https://agency.vercel.app/",
	},
	{
		imgSrc: calcProjecticon,
		text: "Calculator",
		url: "https://manuelorji-calc.netlify.app/",
	},
	{
		imgSrc: yummyPizProjectIcon,
		text: "YummyPiz",
		url: "https://yummypiz.vercel.app/",
	},
	{
		imgSrc: jokeTellerProjectIcon,
		text: "Joke Teller",
		url: "https://manuelorji.github.io/Joke-Teller-Project/",
	},
	{
		imgSrc: countdownTimerProjectIcon,
		text: "Countdown Timer",
		url: "https://manuelorji.github.io/Joke-Teller-Project/",
	},
	{
		imgSrc: infinteScrollProjectIcon,
		text: "Infinite Scroll",
		url: "https://manuelorji.github.io/Joke-Teller-Project/",
	},
	{
		imgSrc: videoPlayerProjectIcon,
		text: "Video player",
		url: "https://manuelorji.github.io/Joke-Teller-Project/",
	},
	{
		imgSrc: musicPlayerProjectIcon,
		text: "Music Player",
		url: "https://manuelorji.github.io/Joke-Teller-Project/",
	},
	{
		imgSrc: quoteGeneratorProjectIcon,
		text: "Quote Generator",
		url: "https://manuelorji.github.io/Joke-Teller-Project/",
	},
	{
		imgSrc: dragNDropProjectIcon,
		text: "Drag and Drop",
		url: "https://manuelorji.github.io/Joke-Teller-Project/",
	},
];

const Works = () => {
	return (
		<main className={styles.works}>
			<div className={styles.projects}>
				{worksDetails.map((detail, i) => (
					<a
						href={detail.url}
						target="_blank"
						rel="noopener noreferrer"
						key={i}
						className={styles.project}
					>
						<img
							src={detail.imgSrc}
							alt=""
							className="h-3/4 w-full rounded-md"
						/>
						<span>{detail.text}</span>
					</a>
				))}
			</div>
		</main>
	);
};

export default Works;
