import { FC } from "react";
import { Box } from "@mui/system";
import {
	Button,
	Card, Typography
} from "@mui/material";
import cubeImg from "./assets/cube.jpg";
import { Link } from "react-router-dom";

type GameLinkProps = {};
export const GameLink: FC<GameLinkProps> = (props) => {
	return (
		<Card elevation={8} sx={{ width: "85%", justifyContent: "space-between", marginTop: 10, JustifyContent: "center", paddingBottom: 2, borderRadius: 5 }}>
			<Box component="div"
				sx={{ paddingTop: 3, paddingLeft: 2 }}
			>
				<Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>Jouez au jeu !</Typography>
			</Box>
			<Box component="div"
				sx={{ paddingTop: 2, paddingLeft: 2 }}
			>
				<Typography sx={{ fontStyle: "italic", fontSize: "1.5rem" }}>Un petit jeu pour tester votre logique ! 🧩🧠</Typography>
			</Box>
			<Box component="div"
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
					src={cubeImg} />
				<Button component={Link} to="/game" sx={{ minWidth: "35%", padding: "10px", textTransform: 'none' }} id="play-game" variant="contained">Jouez</Button>
			</Box>
		</Card>
	);
};
