import emoji from "react-easy-emoji";

export const greetings = {
	name: "Thomas Kim",
	title: "Hi all, I'm Thomas",
	description:
		"A Certified Full Stack Web Developer and Blockchain Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Web3js and some other cool libraries and frameworks and Decentralized Blockchain applications using Ethereum and Hyper ledger.",
	resumeLink: "https://cv.hanzla.ga",
};

export const openSource = {
	githubUserName: "th5maskim",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/th5maskim",
	instagram: "https://www.instagram.com/th5maskim",
	twitter: "https://twitter.com/th5maskim",
	github: "https://github.com/th5maskim",
	linkedin: "https://www.linkedin.com/in/thomas-kim-477b68236/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Decentralized Blockchain applications using Ethereum and Web3js"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		emoji(
			"⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "flutter",
			fontAwesomeClassname: "logos:flutter",
		},
		{
			skillName: "swift",
			fontAwesomeClassname: "vscode-icons:file-type-swift",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
		{
			skillName: 'solidity',
			fontAwesomeClassname: "logos:solidity"
		}
	],
};

export const SkillBars = [
	{
		Stack: "Coding Languages", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Smart Contract Development",
		progressPercentage: "100",
	},
	{
		Stack: "Data Structures",
		progressPercentage: "100",
	},
	{
		Stack: "Cryptography",
		progressPercentage: "80",
	},
	{
		Stack: "Web Development",
		progressPercentage: "100",
	},
	{
		Stack: "Basic Architectures",
		progressPercentage: "90",
	},
];

export const educationInfo = [
	{
		schoolName: "Colorado Technical University",
		subHeader: "Master's Degree Information Technology",
		duration: "2011 ~ 2016",
		desc: "",
		descBullets: [
		],
	}
];

export const experience = [
	{
		role: "Blockchain Developer",
		company: "7PH Technologies, Inc",
		companylogo: "/img/icons/common/google.svg",
		date: "Jun 2020 – Feb 2022",
		// desc: "Worked on the development and implementation of new blockchain technologies and completed professional market research.",
		descBullets: [
			"Built and maintained strategic relationships with potential investors and business partners and brainstormed new ideas",
			"Collaborated with colleagues from other departments and participated in the creation and testing of new software applications",
			// "Represented the company at various workshops and industry events and executed multiple key clerical tasks",
			// "Won the Employee of the Month Award once for finishing all assigned projects within budget and schedule"
		],
	},
	{
		role: "Full Stack Developer",
		company: "Almaty Healthcare, Inc",
		companylogo: "/img/icons/common/github.svg",
		date: "Sep 2016 - May 2020",
		descBullets: [
			"Performed initial client assessment analysis to begin the research process and supported the Chief Operating Officer",
			"Defined the structure of the Blockchain Development for the Product team and defined the Access controls and security and environment",
		],
	},
];

export const projects = [
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		link: "https://example.com",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
		link: "https://example.com",
	},
];

export const feedbacks = [
	{
		name: "David Feinleib",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Thomas Kim has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose Thomas web developer services for u.",
	},
	{
		name: "Mehmet Sabirli",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
