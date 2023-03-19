import { FC } from "react";
import {
	CardMedia,
	Grid,
	Typography,
	Box,
	Container,
	Button,
} from "@mui/material";

type VideoElementProps = {
	buttonColor: string;
	reverse: boolean;
	video: any;
	title: string;
	description: string;
};

const VideoElement: FC<VideoElementProps> = (props) => {
	return (
		<Container maxWidth="xl">
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
					<CardMedia
						sx={{ borderRadius: "3em", width: "100%", p: 4 }}
						component="video"
						autoPlay
						loop
						image={props.video}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box component="div" sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
						<Typography variant="h3" sx={{ fontFamily: "Llewie" }}>
							{props.title}
						</Typography>
						<Typography variant="subtitle1" sx={{ fontWeight: "500", fontSize: "17px", paddingTop: "14px", lineHeight: "1.5" }}>
							{props.description}
						</Typography>
						<Box component="div" sx={{ display: "flex", flexDirection: "row-reverse" }}>
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

export default VideoElement;