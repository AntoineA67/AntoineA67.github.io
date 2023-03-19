import { useEffect } from "react";
import "./styles/App.css";
import { Box } from "@mui/system";
import Background from "./assets/background.svg";
import WatiCar from "./assets/Wati-Car.png"

import LosBlockos from "./assets/Videos/LosBlockos.mp4";
import LosBlockosConnectos from "./assets/Videos/LosBlockosConnectos.mp4"
import LETSGOOOBLOCKOS from "./assets/Videos/LETSGOOOBLOCKOS.mp4"

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Team from "./components/team/Team";
import CustomWrapper from "./components/CustomWrapperComponent";
import Element from "./components/Element";
import { NavigationBar } from "./components/NavigationBar";
import { Contact } from "./Contact";
import { Newsletter } from "./components/Newsletter";
import { Parallax } from "react-parallax";
import { GameLink } from "./GameLink";
import { responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
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
		h4: {
			fontFamily: "Llewie",
		},
		body1: {
			fontFamily: "Poppins",
			lineHeight: "1.5",
		}
	},
});

theme = responsiveFontSizes(theme);

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
						paddingTop: {md: "60px", xs: "30px"},
						paddingBottom: {md: "60px"},
					}}
				>
					{/* <Parallax bgImage={Background} strength={2000} blur={{ min: -5, max: 5 }}> */}
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
						<Element
							buttonColor="#2C5EAF"
							reverse={true}
							description="les enfants peuvent manipuler les blocs de programmation avec leurs mains et les explorer sous tous les angles, ce qui rend l'apprentissage de la logique informatique encore plus concret et amusant."
							title="Avec Sequency, la programmation devient un jeu d'enfant grâce à des blocs connectables et intuitifs."
							video={LosBlockos} />
					</CustomWrapper>
					<CustomWrapper anchor="test">
						<Element
							buttonColor="#2C5EAF"
							reverse={false}
							description="En connectant les blocs entre eux, les enfants peuvent créer des séquences de programmation personnalisées et voir leur robot réaliser chaque commande dans l'ordre. Cela développe leur créativité et leur capacité à résoudre des problèmes de manière logique."
							title="Créez des programmes en connectant des blocs ! 🤖💡"
							video={LosBlockosConnectos} />
					</CustomWrapper>
					<CustomWrapper anchor="test">
						<Element
							buttonColor="#2C5EAF"
							reverse={true}
							description="Une fois le programme prêt, il suffit de le lancer et de voir le robot se mettre en mouvement ! Les enfants peuvent suivre leur robot et s'amuser à observer les résultats de leur travail en temps réel, ce qui les encourage à continuer, à apprendre et à explorer."
							title="Laissez votre enfant voir concrètement les résultats de son travail avec Sequency !"
							video={LETSGOOOBLOCKOS} />
					</CustomWrapper>
					<CustomWrapper anchor="team">
						<Team />
					</CustomWrapper>
					<CustomWrapper anchor="newsletter">
						<Newsletter />
					</CustomWrapper>
					<CustomWrapper anchor="contact">
						<Contact />
					</CustomWrapper>
					<CustomWrapper anchor="game">
						<GameLink />
					</CustomWrapper>
				</Box>
				{/* </Parallax> */}

			</div >
		</ThemeProvider >
	)
};

export default HomePage;
