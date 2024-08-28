import { FC } from "react";
import { Box } from "@mui/system";
import {
	Button,
	Card, Typography,
	TextField,
	Grid,
	CardMedia
} from "@mui/material";

import presBlocks from "./assets/pres-blocks.jpg";

type SubscribeFormProps = {
	onValidated: Function;
	status: string;
	message: string | Error;
};
export const SubscribeForm: FC<SubscribeFormProps> = (props) => {
	let email = "";

	const submit = () => {
		email &&
			email.indexOf("@") > -1 &&
			props.onValidated({
				EMAIL: email
			});
		var sendMail = document.getElementById("send-mail");
		if (sendMail != null) {
			sendMail.textContent = "Merci !";
		}
	};

	const setTFValue = (value: string) => {
		email = value;
	};

	return (
		<Card elevation={8} sx={{ width: { md: "60%", xs: "90%" }, borderRadius: 5 }}>
			<Grid container gap={ {md: 3} } sx={{  }}>
				<Grid item xs={12} md={5}>
					<CardMedia component="img" height={"100%"} image={presBlocks} />
				</Grid>
				
				<Grid item container xs={12} md={6} rowGap={2} gap={3} p={2} >
					<Typography variant="h4" >Recevez nos actualités!</Typography>
					<Typography variant="body1">
						Rentrez votre Mail 📩 <br />
						Nous vous enverrons les avancées du projet 🔬<br />
						Vous aurez droit à une réduction lorsque le produit sera disponible!
					</Typography>
					{/* <TextField sx={{ width: {xs: "100%", md: "50%"} }} id="outlined-basic-prenom" label="Prénom" variant="outlined" onChange={(newValue) => setTFValue(newValue.target.value)} /> */}
					<TextField sx={{ width: {xs: "100%", md: "100%"} }} id="outlined-basic" label="Email" variant="outlined" onChange={(newValue) => setTFValue(newValue.target.value)} />
					<Button sx={{ mb:2, width: {xs: "100%", md: "100%"}, textTransform: 'none' }} id="send-mail" variant="contained" onClick={submit}>Je veux Sequency</Button>
				</Grid>
			</Grid>
		</Card>
	);
};
