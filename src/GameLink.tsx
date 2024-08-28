import { FC } from "react";
import { Box } from "@mui/system";
import {
	Button,
	Card, CardMedia, Grid, Typography
} from "@mui/material";
import cubeImg from "./assets/cube.jpg";
import { Link } from "react-router-dom";

type GameLinkProps = {};
export const GameLink: FC<GameLinkProps> = (props) => {
	return (
		<Card elevation={8} sx={{ width: { md: "60%", xs: "90%" }, borderRadius: 5 }}>
			<Grid container gap={ {md: 3} } sx={{  }}>
				<Grid item xs={12} md={5}>
					<CardMedia component="img" height={"100%"} image={cubeImg} />
				</Grid>
				
				<Grid item container xs={12} md={6} rowGap={2} gap={3} p={2} >
					<Typography variant="h4" >Jouez au jeu!</Typography>
					<Typography variant="body1" sx={{ fontStyle: "italic",}}>
						Un petit jeu pour tester votre logique ! 🧩🧠
					</Typography>
		 			<Button sx={{ width: {xs: "100%", md: "50%"}, textTransform: 'none' }} component={Link} to="/game" id="play-game" variant="contained">Jouez</Button>
				</Grid>
			</Grid>
		</Card>
	);
};
