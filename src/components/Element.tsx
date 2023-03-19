import { FC } from "react";
import { Box, Container } from "@mui/system";
import {
	Button, Grid,
	Typography
} from "@mui/material";

type ElementProps = {
	buttonColor: string;
	reverse: boolean;
	image: any;
	title: string;
	description: string;
};
export const Element: FC<ElementProps> = (props) => {
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
					<Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
						<Box
							component="img"
							sx={{ maxWidth: "100%", height: "auto", padding: "2em", borderRadius: "4em" }}
							src={props.image}
						></Box>
					</Box>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box component="div" sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
						<Typography variant="h3" sx={{ fontFamily: "Llewie" }}>
							{props.title}
						</Typography>
						<Typography variant="subtitle1" sx={{ fontWeight: "500", fontSize: "17px", paddingTop: "14px", lineHeight: "1.5" }}>{props.description}</Typography>
						<Box component="div" sx={{ display: "flex", flexDirection: "row-reverse" }}>
							<Button
								sx={{ backgroundColor: "#82B6FF" }}
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
