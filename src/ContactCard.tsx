import { FC } from "react";
import { Box } from "@mui/system";
import { Card, Typography } from "@mui/material";

type ContactCardProps = {
	title: string;
	icon: JSX.Element;
	value: JSX.Element;
};
export const ContactCard: FC<ContactCardProps> = (props) => {
	return (
		<Card elevation={8} sx={{ justifyContent: "space-between" }}>
			<Box component="div"
				sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 4 }}
			>
				<Box component="div"
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					{props.icon}
					<Typography>{props.title}</Typography>
				</Box>
				<Box component="div" sx={{ display: "flex", justifyContent: "center" }}>
					{props.value}
				</Box>
			</Box>
		</Card>
	);
};
