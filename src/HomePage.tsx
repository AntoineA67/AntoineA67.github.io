import { FC, useState } from "react";
import "./App.css";
import { Box, Container } from "@mui/system";
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";
import InstagramIcon from '@mui/icons-material/Instagram';

import {
	AppBar,
	Button,
	Card,
	Drawer,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	MenuItem,
	Toolbar,
	Typography,
	TextField,
	Switch
} from "@mui/material";
import { ReactComponent as Logo } from "./assets/logo.svg";

import anim1Img from "./assets/anim/1.png";
import anim2Img from "./assets/anim/2.png";
import anim3Img from "./assets/anim/3.png";
import cubeImg from "./assets/cube.jpg";
import Background from "./assets/background.svg";

import Tilt from "react-parallax-tilt";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Team from "./components/team/Team";
import { Link } from "react-router-dom";

const url = "https://sequency.us17.list-manage.com/subscribe/post?u=20731daf6bdd5bf1a788885e0&amp;id=927bd8923a&amp;f_id=00ad55e0f0";


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

type Section = {
	title: string;
	anchor: string;
};

const NavigationBar = () => {
	const sections: Section[] = [
		{ title: "Nos valeurs", anchor: "values" },
		{ title: "L'équipe", anchor: "team" },
		{ title: "Contact", anchor: "contact" },
	];
	const [drawer, setDrawer] = useState<boolean>(false);

	const handleOpenDrawer = () => {
		setDrawer(true);
	};

	const handleCloseDrawer = () => {
		setDrawer(false);
	};
	return (
		<>
			{drawer && (
				<Drawer open={drawer} onClose={handleCloseDrawer} anchor="right">
					<List>
						{sections.map((el: Section) => (
							<ListItem
								component="a"
								href={"#" + el.anchor}
								onClick={handleCloseDrawer}
							>
								<ListItemButton>
									<ListItemText sx={{ color: "black" }} primary={el.title} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Drawer>
			)}
			<Box>
				<AppBar sx={{ padding: 1 }} elevation={0}>
					<Container
						sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
					>
						<Box sx={{ flexGrow: 1 }}>
							<Box sx={{ width: "200px" }}>
								<Box component="a" href="#home">
									<Logo />
								</Box>
							</Box>
						</Box>
						<Toolbar
							sx={{
								gap: 1,
								display: {
									xs: "none",
									md: "flex",
								},
							}}
						>
							{sections.map((el: Section) => {
								return (
									<MenuItem key={el.title} component="a" href={"#" + el.anchor}>
										{el.title}
									</MenuItem>
								);
							})}
						</Toolbar>
						<Toolbar
							sx={{
								display: {
									xs: "flex",
									md: "none",
								},
							}}
						>
							<IconButton onClick={handleOpenDrawer} >
								<MenuIcon/>
							</IconButton>
						</Toolbar>
					</Container>
				</AppBar>
			</Box>
		</>
	);
};

type ElementProps = {
	buttonColor: string;
	reverse: boolean;
	image: any;
	title: string;
	description: string;
};

type WrapperProps = {
	anchor: string;
	children?: JSX.Element | JSX.Element[];
};

const Wrapper: FC<WrapperProps> = (props) => {
	return (
		<Box
			id={props.anchor}
			sx={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{props.children}
		</Box>
	);
};

const Element: FC<ElementProps> = (props) => {
	return (
		<Container
			sx={{
				display: "flex",
				alignItems: "center",
			}}
		>
			<Grid
				container
				sx={{
					alignItems: "center",
					...(props.reverse
						? { flexDirection: "row-reverse" }
						: { flexDirection: "row" }),
				}}
			>
				<Grid item xs={12} md={6}>
					<Box sx={{ display: "flex", justifyContent: "center" }}>
						<Tilt tiltEnable={false} scale={1.2} >
							<Box
								component="img"
								sx={{ maxWidth: "100%", height: "auto", padding: "3em"}}
								src={props.image}
							></Box>
						</Tilt>
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
						<Typography variant="h2" sx={{ fontFamily: "Llewie" }}>
							{props.title}
						</Typography>
						<Typography variant="subtitle1" sx={{fontWeight:"500", fontSize:"17px", paddingTop: "14px", lineHeight: "1.5"}}>{props.description}</Typography>
						<Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
							<Button
								sx={{ backgroundColor: "#E3F6FF"}}
								component="a"
								href="#contact"
								size="large"
								variant="contained"
							>
								En savoir plus.
							</Button>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

type ContactCardProps = {
	title: string;
	icon: JSX.Element;
	value: JSX.Element;
};

type SubscribeFormProps = {
	onValidated: Function;
	status: string;
	message: string | Error;
};

type GameLinkProps = {

};

const GameLink: FC<GameLinkProps> = (props) => {
	return (
			<Card elevation={8} sx={{ width: "85%", justifyContent: "space-between", marginTop: 10, JustifyContent:"center", paddingBottom: 2, borderRadius: 5}}>
				<Box
					sx={{ paddingTop: 3, paddingLeft: 2}}
					>
					<Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>Jouez au jeu !</Typography>
				</Box>
				<Box
					sx={{ paddingTop:  2, paddingLeft: 2}}
				>
					<Typography sx={{ fontStyle: "italic", fontSize: "1.5rem" }}>Un petit jeu pour tester votre logique ! 🧩🧠</Typography>
				</Box>
				<Box
					sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 4, justifyContent: "space-between", alignItems: "center" }}
				>
				
				<Box
          			component="img"
          			sx={{
            		width: "75%",
            		height: "auto",
            		objectFit: "contain",
            		borderRadius: "4px",
          			}}
					src={cubeImg}/>
					<Button component={Link} to="/game" sx={{ minWidth: "35%", padding: "10px", textTransform: 'none'}} id="play-game" variant="contained" >Jouez</Button>
				</Box>
			</Card>
	);
};

const SubscribeForm: FC<SubscribeFormProps> = (props) => {
	let email = ""

	const submit = () => { 
		email &&
		email.indexOf("@") > -1 &&
		props.onValidated({
			EMAIL: email
		});
		var sendMail = document.getElementById("send-mail")
		if (sendMail != null) {
			sendMail.textContent = "Merci !"
		}
	}

	const setTFValue = (value: string) => {
		email = value
	}

	return (
			<Card elevation={8} sx={{ width: "85%", justifyContent: "space-between", marginTop: 10, JustifyContent:"center", paddingBottom: 2, borderRadius: 5}}>
				<Box
					sx={{ paddingTop: 3, paddingLeft: 2}}
					>
					<Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>Rejoignez l'aventure Sequency !</Typography>
				</Box>
				<Box
					sx={{ paddingTop:  2, paddingLeft: 2}}
				>
					<Typography sx={{ fontStyle: "italic", fontSize: "1.5rem", lineHeight: 3 }}>
						
						Rentrez votre Mail 📩 <br/>
						Nous vous enverrons les avancées du projet 🔬<br/>
						Vous aurez droit à une réduction lorsque le produit sera disponible ! </Typography>
				</Box>
				<Box
					sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 4, justifyContent: "space-between", alignItems: "center" }}
				>
					<TextField sx={{ width: "100%"}} id="outlined-basic" label="Email" variant="outlined" onChange={(newValue) => setTFValue(newValue.target.value)} />
					<Button sx={{ minWidth: "25%", padding: "10px", textTransform: 'none'}} id="send-mail" variant="contained" onClick={submit}>Je veux Sequency</Button>
				</Box>
			</Card>
	);
};

const ContactCard: FC<ContactCardProps> = (props) => {
	return (
		<Card elevation={8} sx={{ justifyContent: "space-between" }}>
			<Box
				sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 4 }}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{props.icon}
					<Typography>{props.title}</Typography>
				</Box>
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					{props.value}
				</Box>
			</Box>
		</Card>
	);
};

const Contact = () => {
	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 4,
			}}
		>
			<Typography variant="h2" sx={{ fontFamily: "Llewie" }}>
				Gardons contact.
			</Typography>
			<Typography variant="subtitle1" sx={{fontWeight:"500", fontSize:"17px", paddingTop: "14px"}}>
				Vous êtes parent, voulez faire tester les blocs Sequency à vos enfants ?
				Envie d’en savoir plus sur Sequency ?
			</Typography>
			<Grid container sx={{ gap: 4, justifyContent: "center" }}>
				<Grid item xs={12} sm={3}>
					<ContactCard
						title="Email"
						icon={<AlternateEmailIcon fontSize="large" />}
						value={
							<>
								<a href="mailto:contact.sequency@gmail.com">
									<Typography sx={{fontWeight:"500", fontSize:"16px"}} >contact.sequency@gmail.com</Typography>
								</a>
							</>
						}
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<ContactCard
						title="Instagram"
						icon={<InstagramIcon fontSize="large" />}
						value={
							<>
								<a
									href="https://www.instagram.com/sequency.me/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Typography sx={{fontWeight:"500", fontSize:"16px"}}>sequency.me</Typography>
								</a>
							</>
						}
					/>
				</Grid>
				<Grid item xs={12} sm={3} >
					<ContactCard 
						title="Téléphone"
						icon={<LocalPhoneIcon fontSize="large" />}
						value={
							<>
								<a href="tel:0695184492">
									<Typography sx={{fontWeight:"500", fontSize:"16px"}} >06 95 18 44 92</Typography>
								</a>
							</>
						}
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<ContactCard
						title="Linkedin"
						icon={<LinkedInIcon fontSize="large" />}
						value={
							<>
								<a
									href="https://linkedin.com/company/we-are-sequency"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Typography sx={{fontWeight:"500", fontSize:"16px"}}>we-are-sequency</Typography>
								</a>
							</>
						}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};


function HomePage() {
	return (
	<ThemeProvider theme={theme}>
		<div className="App">
			<NavigationBar />
			<Box
				sx={{
					backgroundImage: `url(${Background})`,
					backgroundSize: "cover",
					paddingTop: "60px",
					paddingBottom: "60px",
				}}
			>
				<Wrapper anchor="home">
					<Element
						buttonColor="#2C5EAF"
						reverse={false}
						image={anim3Img}
						title="Apprendre le code sans écran."
						description="Sequency est une solution innovante qui permet aux enfants d'apprendre la logique informatique de manière ludique et sans écran."
					/>
					<Grid container>
						<Grid item xs={12} sm={4} sx={{display:" flex", justifyContent: "center"}}>
							<GameLink/>
						</Grid>
						<Grid item xs={12} sm={8} sx={{display:" flex", justifyContent: "center"}}>
							<MailchimpSubscribe
						url={url}
						render={({ subscribe, status, message }) => (
							<SubscribeForm status={status ? status : ""} message={message ? message : ""}
								onValidated={(formData    : EmailFormFields ) => subscribe(formData)}
							/>
							
						)}
					/>
						</Grid>
						
					</Grid>
					
				</Wrapper>
				<Wrapper anchor="values">
					<Element
						buttonColor="#FFD372"
						reverse={true}
						image={anim2Img}
						title="S'amuser tout en apprenant"
						description="Avec Sequency, les enfants peuvent apprendre les concepts de base de la logique informatique de manière ludique et interactive grâce à notre solution innovante composée d'un robot et de blocs connectables."
					/>
				</Wrapper>
				<Wrapper anchor="">
					<Element
						buttonColor="#6BC678"
						reverse={false}
						image={anim1Img}
						title="Difficulté évolutive."
						description="Le plateau de jeu Sequency s'adapte parfaitement au niveau intellectuel de l'enfant, il permet également d'explorer de nouveaux concepts logiques."
					/>
				</Wrapper>
				<Wrapper anchor="team">
					<Team />
				</Wrapper>
				<Wrapper anchor="contact">
					<Contact />
				</Wrapper>
			</Box>
		</div>
	</ThemeProvider>
)};

export default HomePage;
