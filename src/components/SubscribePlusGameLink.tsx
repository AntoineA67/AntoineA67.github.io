import {
	Grid,
} from "@mui/material";
import { GameLink } from "../GameLink";
import MailchimpSubscribe, { EmailFormFields } from "react-mailchimp-subscribe";
import { SubscribeForm } from "../SubscribeForm";

const url = "https:sequency.us17.list-manage.com/subscribe/post?u=20731daf6bdd5bf1a788885e0&amp;id=927bd8923a&amp;f_id=00ad55e0f0";

export const SubscribePlusGameLink = () => {
	return (
	<Grid container>
		<Grid item xs={12} sm={4} sx={{ display: " flex", justifyContent: "center" }}>
			<GameLink />
		</Grid>
		<Grid item xs={12} sm={8} sx={{ display: " flex", justifyContent: "center" }}>
			<MailchimpSubscribe
				url={url}
				render={({ subscribe, status, message }) => (
					<SubscribeForm status={status ? status : ""} message={message ? message : ""}
						onValidated={(formData: EmailFormFields) => subscribe(formData)}
					/>

				)}
			/>
		</Grid>

	</Grid>
	);
}