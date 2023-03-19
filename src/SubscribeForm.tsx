import { FC } from "react";
import { Box } from "@mui/system";
import {
	Button,
	Card, Typography,
	TextField
} from "@mui/material";

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
		<Card elevation={8} sx={{ width: "85%", justifyContent: "space-between", marginTop: 10, JustifyContent: "center", paddingBottom: 2, borderRadius: 5 }}>
			<Box component="div"
				sx={{ paddingTop: 3, paddingLeft: 2 }}
			>
				<Typography sx={{ fontWeight: "bold", fontSize: "2rem" }}>Rejoignez l'aventure Sequency !</Typography>
			</Box>
			<Box component="div"
				sx={{ paddingTop: 2, paddingLeft: 2 }}
			>
				<Typography sx={{ fontStyle: "italic", fontSize: "1.5rem", lineHeight: 3 }}>

					Rentrez votre Mail 📩 <br />
					Nous vous enverrons les avancées du projet 🔬<br />
					Vous aurez droit à une réduction lorsque le produit sera disponible ! </Typography>
			</Box>
			<Box component="div"
				sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 4, justifyContent: "space-between", alignItems: "center" }}
			>
				<TextField sx={{ width: "100%" }} id="outlined-basic" label="Email" variant="outlined" onChange={(newValue) => setTFValue(newValue.target.value)} />
				<Button sx={{ minWidth: "25%", padding: "10px", textTransform: 'none' }} id="send-mail" variant="contained" onClick={submit}>Je veux Sequency</Button>
			</Box>
		</Card>
	);
};
