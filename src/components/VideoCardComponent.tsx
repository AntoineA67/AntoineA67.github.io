import { FC } from "react";
import {
	CardMedia,
	Grid,
	Typography,
	Button,
} from "@mui/material";

import CustomWrapper from '../components/CustomWrapperComponent';

type VideoCardProps = {
	image: any;
};

const VideoCard: FC<VideoCardProps> = (props) => {
	return (
		<CustomWrapper anchor="">
			<Grid container sx={{ display: " flex", justifyContent: "center" }}>
				<Grid item xs={12} sm={6} sx={{ display: " flex", justifyContent: "center" }}>
					<Typography variant="h4" sx={{marginTop:"0.6em", width: "90%", fontFamily: "Llewie" }}>
						Avec Sequency, la programmation devient un jeu d'enfant grâce à des blocs connectables et intuitifs.
						<Typography variant="subtitle1" sx={{ marginTop: "1.5em", fontFamily: "Poppins", fontWeight: "500", fontSize: "0.5em" }}>
							les enfants peuvent manipuler les blocs de programmation avec leurs mains et les explorer sous tous les angles, ce qui rend l'apprentissage de la logique informatique encore plus concret et amusant.
						</Typography>
						<Button
							sx={{ marginTop: "1em", backgroundColor: "#FFFFF" }}
							component="a"
							href="#contact"
							size="large"
							variant="contained"
						>
							Je veux Sequency !
						</Button>
					</Typography>
				</Grid>
				<Grid item xs={12} sm={4} sx={{ display: "flex", justifyContent: "center" }}>
					<CardMedia
					sx={{ minHeight: "100vh", width:"100%", padding: 2, display: "flex", flexDirection: "column", gap: 4, justifyContent: "space-between", alignItems: "center", borderRadius:"3em"}}
					component="video"
					autoPlay
					loop
					image={props.image}
				/>
				</Grid>
			</Grid>
		</CustomWrapper>
	);
};