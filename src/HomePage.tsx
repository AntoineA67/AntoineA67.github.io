import { useEffect } from "react";
import "./styles/App.css";
import { Box } from "@mui/system";
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";

import {
	Grid,
	CardMedia,
} from "@mui/material";

import anim1Img from "./assets/anim/1.png";
import anim2Img from "./assets/anim/2.png";
import anim3Img from "./assets/anim/3.png";
import kidsBlocks from "./assets/Kids Blocks.png"
import Background from "./assets/background.svg";
import ELBlockosAndPlata from "./assets/ELBlockosAndPlata.png"
import WatiCar from "./assets/Wati-Car.png"

import LosBlockos from "./assets/Videos/LosBlockos.mp4";
import LosBlockosConnectos from "./assets/Videos/LosBlockosConnectos.mp4"
import LETSGOOOBLOCKOS from "./assets/Videos/LETSGOOOBLOCKOS.mp4"

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Team from "./components/team/Team";
import CustomWrapper from "./components/CustomWrapperComponent";
import VideoElement from "./components/VideoElement";
import { NavigationBar } from "./components/NavigationBar";
import { Element } from "./components/Element";
import { GameLink } from "./GameLink";
import { SubscribeForm } from "./SubscribeForm";
import { Contact } from "./Contact";
import { SubscribePlusGameLink } from "./components/SubscribePlusGameLink";

const theme = createTheme({
	palette: {
		primary: {
			main: "#fff",
		},
		secondary: {
			main: "#000000",
		},
	},
	typography: {
		fontFamily: ["Poppins"].join(","),
	},
});

function HomePage() {
	// Du sale pour fix le zoom sur mobile
	useEffect(() => {
		var html = document.querySelector('html')
		if (html) {
			html.style.overflow = "auto"
		}
		var body = document.querySelector('body')
		if (body) {
			body.style.overflow = "auto";
			body.style.background = "#ffffff";
		}
	})
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<NavigationBar />
				<Box component="div"
					sx={{
						backgroundImage: `url(${Background})`,
						backgroundSize: "cover",
						paddingTop: "60px",
						paddingBottom: "60px",
					}}
				>
					<CustomWrapper anchor="home">
						<Element
							buttonColor="#2C5EAF"
							reverse={false}
							image={WatiCar}
							title="Apprendre le code sans écran ? C'est possible avec Sequency !"
							description="Notre mission est claire : apporter à l'enfant toutes les clés de réussite dans un monde ultra-connecté."
						/>
					</CustomWrapper>
			
					<CustomWrapper anchor="test">
						<VideoElement
							buttonColor="#2C5EAF"
							reverse={true}
							description="les enfants peuvent manipuler les blocs de programmation avec leurs mains et les explorer sous tous les angles, ce qui rend l'apprentissage de la logique informatique encore plus concret et amusant."
							title="Avec Sequency, la programmation devient un jeu d'enfant grâce à des blocs connectables et intuitifs."
							video={LosBlockos} />
					</CustomWrapper>
					<CustomWrapper anchor="test">
						<VideoElement
							buttonColor="#2C5EAF"
							reverse={false}
							description="En connectant les blocs entre eux, les enfants peuvent créer des séquences de programmation personnalisées et voir leur robot réaliser chaque commande dans l'ordre. Cela développe leur créativité et leur capacité à résoudre des problèmes de manière logique."
							title="Créez des programmes en connectant des blocs ! 🤖💡"
							video={LosBlockosConnectos} />
					</CustomWrapper>
					<CustomWrapper anchor="test">
						<VideoElement
							buttonColor="#2C5EAF"
							reverse={true}
							description="Une fois le programme prêt, il suffit de le lancer et de voir le robot se mettre en mouvement ! Les enfants peuvent suivre leur robot et s'amuser à observer les résultats de leur travail en temps réel, ce qui les encourage à continuer, à apprendre et à explorer."						
							title="Laissez votre enfant voir concrètement les résultats de son travail avec Sequency !"
							video={LETSGOOOBLOCKOS} />
					</CustomWrapper>

					<CustomWrapper anchor="subscribe">
						<SubscribePlusGameLink/>
					</CustomWrapper>

					<CustomWrapper anchor="team">
						<Team />
					</CustomWrapper>
					<CustomWrapper anchor="contact">
						<Contact />
					</CustomWrapper>
				</Box>
			</div >
		</ThemeProvider >
	)
};

export default HomePage;
