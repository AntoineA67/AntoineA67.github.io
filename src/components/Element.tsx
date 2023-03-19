import { FC } from "react";
import {
	CardMedia,
	Grid,
	Typography,
	Box,
	Container,
	Button,
} from "@mui/material";

type ElementProps = {
	buttonColor: string;
	reverse: boolean;
	video?: string;
	image?: string;
	title: string;
	description: string;
};

const Element: FC<ElementProps> = (props) => {
	return (
		<Container maxWidth={false}>
			<Grid
				container
				sx={{
					alignItems: "center",
					...(props.reverse
						? { flexDirection: "row-reverse" }
						: { flexDirection: "row" }),
				}}
			>
				<Grid item
					xs={12} md={6} sm={6}
					sx={{
						px: {md: 5},
						maxWidth: {md: "40%", sm: "80%"},
					}}>
					<CardMedia
						sx={{ borderRadius: "10%", m: {md: 0}, my: {xs: 2},}}
						component={props.image ? "img" : "video" }
						autoPlay
						loop
						image={props.image ? props.image : props.video}
					/>
				</Grid>
				<Grid item xs={12} md={6} sm={6} sx={{px: {md: 10, sm: 5}}}>
					<Box component="div" sx={{ display: "flex", flexDirection: "column", gap: 2}}>
						<Typography variant="h4" sx={{ fontFamily: "Llewie" }}>
							{props.title}
						</Typography>
						<Typography variant="subtitle1" sx={{ fontWeight: "500", fontSize: "17px", paddingTop: "14px", lineHeight: "1.5" }}>
							{props.description}
						</Typography>
						<Box component="div" sx={{ display: "flex", flexDirection: "row" }}>
							<Button
								sx={{ backgroundColor: "#82B6FF", borderRadius: "3em" }}
								component="a"
								href="#contact"
								size="large"
								variant="contained"
								
							>
								Je veux Sequency !
							</Button>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Element;