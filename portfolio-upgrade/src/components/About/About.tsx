import htmlIcon from "../../images/htmlIcon.svg";
import cssIcon from "../../images/cssIcon.svg";
import scssIcon from "../../images/scss.36794a5c6ae023d462dd42371652f3d9.svg";
import reactNativeIcon from "../../images/react.4a6a8eddc67552babf7475946fbb1975.svg";
import reactJsIcon from "../../images/react.4a6a8eddc67552babf7475946fbb1975.svg";
import javaScriptIcon from "../../images/javascript.b4bd9f55e7a5e07fef75c3ec6c6113b7.svg";
import corelIcon from "../../images/corel.dba8753774927cb5a6c20e71fbac319c.svg";
import tailwindCssIcon from "../../images/tailwind-css.d84a6f369e7170891c4a19587ccf78e1.svg";
import mongoDbIcon from "../../images/mongodb.ec5b2fbd7dbe9cce6b93be1b3ad2ea6c.svg";
import gitIcon from "../../images/git.9e5efe4a58d251d445603088a1667119.svg";
import nextJsIcon from "../../images/next-js.43e649734b4f278577629a3488272d9f.svg";
import nodeJsIcon from "../../images/nodejs.dbfe5f95c0bc757a67be277698b93cce.svg";
import typeScriptIcon from "../../images/icons8-typescript-24.png";
import photoshopIcon from "../../images/icons8-photoshop-48.png";

import styles from "./About.module.scss";

import { contactDetails } from "../../App";

type myTechDetail = {
	imgSrc: string;
	content: string;
};

const myTechsDetails: myTechDetail[] = [
	{
		imgSrc: htmlIcon,
		content: "Html",
	},
	{
		imgSrc: cssIcon,
		content: "Css",
	},
	{
		imgSrc: scssIcon,
		content: "Scss",
	},
	{
		imgSrc: javaScriptIcon,
		content: "JavaScript",
	},
	{
		imgSrc: reactJsIcon,
		content: "React.js",
	},
	{
		imgSrc: corelIcon,
		content: "Corel",
	},
	{
		imgSrc: tailwindCssIcon,
		content: "TailwindCss",
	},
	{
		imgSrc: reactNativeIcon,
		content: "React Native",
	},
	{
		imgSrc: gitIcon,
		content: "Git",
	},
	{
		imgSrc: nextJsIcon,
		content: "Next.js",
	},
	{
		imgSrc: nodeJsIcon,
		content: "Node.js",
	},
	{
		imgSrc: typeScriptIcon,
		content: "TypeScript",
	},
	{
		imgSrc: photoshopIcon,
		content: "Photoshop CC",
	},
	{
		imgSrc: mongoDbIcon,
		content: "Mongo Db",
	},
];

const About = () => {
	return (
		<div className={styles.About}>
			<div>
				<span className="font-semibold">Tech Personality:</span> I'm passionate
				about Technology and I love creating amazing websites/web Apps with good
				and wonderful User Experience. I have a dynamic and progressive
				personality, I'm open to learning as much as practically possible to
				increase my skill level and I'm forever open to work with good Team of
				developers all over the world in order to make a positive impact on the
				world.
			</div>
			<div>
				<span className="font-semibold">Hobbies:</span> Aside from writing
				codes, I also enjoy graphic designing, I'm a football lover and I just
				don't watch it, I play it. Before I forget I love music and just like
				football I listen, I sing and I play Piano too.
			</div>
			<div>
				<span className="font-semibold">Interests:</span> I have interest in
				Technology, Music, Sports and a little in politics.
			</div>
			<div>
				<span className="font-semibold">Soft Skills:</span> I'm organized,
				creative, reliable, motivated, professional, a fast learner, a team
				player, a time manager, a problem solver and goal oriented.
			</div>
			<div>
				<span className="font-semibold">Technologies I use:</span>
				<div className={styles.myTech}>
					{myTechsDetails.map((myTech, i) => (
						<div
							className="flex gap-2 items-center shadow-md px-4 py-2 rounded-sm"
							key={i}
						>
							<img
								src={myTech.imgSrc}
								alt=""
								width={20}
							/>
							<span>{myTech.content}</span>
						</div>
					))}
				</div>
			</div>
			<div className={styles.contactDetails}>
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
		</div>
	);
};

export default About;
