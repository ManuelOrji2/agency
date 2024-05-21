import resumeIcon from "../images/icons8-resume-50.png";
import worksIcon from "../images/icons8-document-30.png";
import aboutIcon from "../images/icons8-contact-50.png";

export type navLinkDetails = {
	imgSrc: string;
	path: string;
	name: string;
	target: string;
};

export const navLinks: navLinkDetails[] = [
	{
		imgSrc: worksIcon,
		path: "/works",
		name: "Works",
		target: "",
	},
	{
		imgSrc: aboutIcon,
		path: "/about",
		name: "About",
		target: "",
	},
	{
		imgSrc: resumeIcon,
		path: "https://drive.google.com/file/d/1OnU-3HXrGF2WlVP8n77VS4XRMxvo_jxz/view?usp=sharing",
		name: "Resume",
		target: "_blank",
	},
];
