import { Container } from "@mui/system";
import InstagramIcon from '@mui/icons-material/Instagram';
import {
	Grid,
	Typography
} from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { ContactCard } from "./ContactCard";

export const Contact = () => {
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
			<Typography variant="subtitle1" sx={{ fontWeight: "500", fontSize: "17px", paddingTop: "14px" }}>
				Vous êtes parent, voulez faire tester les blocs Sequency à vos enfants ?
				Envie d’en savoir plus sur Sequency ?
			</Typography>
			<Grid container sx={{ gap: 4, justifyContent: "center" }}>
				<Grid item xs={12} sm={3}>
					<ContactCard
						title="Email"
						icon={<AlternateEmailIcon fontSize="large" />}
						value={<>
							<a href="mailto:contact.sequency@gmail.com">
								<Typography sx={{ fontWeight: "500", fontSize: "16px" }}>contact.sequency@gmail.com</Typography>
							</a>
						</>} />
				</Grid>
				<Grid item xs={12} sm={3}>
					<ContactCard
						title="Instagram"
						icon={<InstagramIcon fontSize="large" />}
						value={<>
							<a
								href="https:www.instagram.com/sequency.me/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Typography sx={{ fontWeight: "500", fontSize: "16px" }}>sequency.me</Typography>
							</a>
						</>} />
				</Grid>
				<Grid item xs={12} sm={3}>
					<ContactCard
						title="Téléphone"
						icon={<LocalPhoneIcon fontSize="large" />}
						value={<>
							<a href="tel:0695184492">
								<Typography sx={{ fontWeight: "500", fontSize: "16px" }}>06 95 18 44 92</Typography>
							</a>
						</>} />
				</Grid>
				<Grid item xs={12} sm={3}>
					<ContactCard
						title="Linkedin"
						icon={<LinkedInIcon fontSize="large" />}
						value={<>
							<a
								href="https:linkedin.com/company/we-are-sequency"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Typography sx={{ fontWeight: "500", fontSize: "16px" }}>we-are-sequency</Typography>
							</a>
						</>} />
				</Grid>
			</Grid>
		</Container>
	);
};
