import { useState } from "react";
import { Box, Container } from "@mui/system";
import {
	AppBar, Drawer, IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	MenuItem,
	Toolbar
} from "@mui/material";
import { ReactComponent as Logo } from "../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";

type Section = {
	title: string;
	anchor: string;
};
export const NavigationBar = () => {
	const sections: Section[] = [
		{ title: "Newsletter", anchor: "newsletter" },
		{ title: "L'équipe", anchor: "team" },
		{ title: "Contact", anchor: "contact" },
		{ title: "Jeu", anchor: "game" },
	];
	const [drawer, setDrawer] = useState<boolean>(false);

	const handleOpenDrawer = () => {
		setDrawer(true);
	};

	const handleCloseDrawer = () => {
		setDrawer(false);
	};
	return (
		<>
			{drawer && (
				<Drawer open={drawer} onClose={handleCloseDrawer} anchor="right">
					<List>
						{sections.map((el: Section) => (
							<ListItem
								component="a"
								href={"#" + el.anchor}
								onClick={handleCloseDrawer}
							>
								<ListItemButton>
									<ListItemText sx={{ color: "black" }} primary={el.title} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Drawer>
			)}
			<Box component="div">
				<AppBar sx={{ padding: 1 }} elevation={0}>
					<Container
						sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
					>
						<Box component="div" sx={{ flexGrow: 1 }}>
							<Box component="div" sx={{ width: "200px" }}>
								<Box component="a" href="#home">
									<Logo />
								</Box>
							</Box>
						</Box>
						<Toolbar
							sx={{
								gap: 1,
								display: {
									xs: "none",
									md: "flex",
								},
							}}
						>
							{sections.map((el: Section) => {
								return (
									<MenuItem key={el.title} component="a" href={"#" + el.anchor}>
										{el.title}
									</MenuItem>
								);
							})}
						</Toolbar>
						<Toolbar
							sx={{
								display: {
									xs: "flex",
									md: "none",
								},
							}}
						>
							<IconButton onClick={handleOpenDrawer}>
								<MenuIcon />
							</IconButton>
						</Toolbar>
					</Container>
				</AppBar>
			</Box>
		</>
	);
};
