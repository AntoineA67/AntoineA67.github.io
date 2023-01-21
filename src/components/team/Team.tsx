import { Typography, Grid, Card } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useState } from "react";
import "../../App.css";
import hanounaImg from "../../assets/team/hanouna.webp";
import theoImg from "../../assets/team/theo.jpg";
import emilieImg from "../../assets/team/emilie-transformed.jpeg";
import delhiaImg from "../../assets/team/delhiaa.jpeg";
import watiImg from "../../assets/team/tschlege.jpeg";
import antoineImg from "../../assets/team/arangoni.jpeg";

type member = {
  name: string;
  role: string;
  description: string;
  image: any;
};

const teams: member[] = [
  {
    name: "Théo Schlegel",
    role: "42 Lyon",
    image: watiImg,
    description:
      `Son esprit inventif 💡et ses fortes compétences en électroniques 🧲  permettent à l'équipe d'avoir une vision claire sur la technique et la faisabilité du projet.
	   Co-Founder/Diplômé en DUT GEII /étudiant à 42 Lyon.`
  },
  {
    name: "Antoine Adamy",
    role: "CTO",
    image: antoineImg,
    description:
      `Le vrai couteau-suisse 👷🪛 de Sequency, avec ses connaissances poussée dans le développement informatique, et son habileté dans la conception et la réalisation 3D, permet à Sequency d'évoluer chaque jour.
	   Co-Founder / étudiant à 42 Lyon.`
  },
  {
    name: "Théo Cerdan",
    role: "VEVE",
    image: theoImg,
    description:
      "Développeur JS Fullstack et étudiant à 42 depuis 2 ans, sa rapidité d'exécution en terme de programmation et son esprit créatif sont pour la team un atout unique.",
  },
  {
    name: "Emilie Lajon",
    role: "Archer",
    image: emilieImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididuntut labore et dolore magna aliqua.",
  },
  {
    name: "Delhia Cocquaz",
    role: "Archer",
    image: delhiaImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const AvatarTeamCard: FC<member> = (props) => {
  return (
    <Card elevation={4} sx={{ width: "13em", height: "auto", borderRadius: "20px", mr: 1, ml: 1, mb: 1}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", 
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            borderRadius: "4px",
          }}
          src={props.image}
        />
        <Box sx={{ padding: 1 }}>
          <Typography sx={{ textAlign: "center" }}>{props.name}</Typography>
        </Box>
      </Box>
    </Card>
  );
};

const Team = () => {
  const [member, setMember] = useState<member | undefined>(undefined);
  return (
    	<Box
    	  sx={{
    	    width: "80%",
    	    display: "flex",
    	    justifyContent: "space-evenly",
    	    flexDirection: {
    	      xs: "column",
    	      md: "row",
    	    },
    	    gap: 3,
    	  }}
    	>
    	  <Box
    	    sx={{
    	    	width: {
    	        xs: "100%",
    	        md: "50%",
    	      },
    	      display: "flex",
    	      flexDirection: "column",
    	      justifyContent: "center",
    	      gap: "10px",
    	    }}
    	  >
    	    <Typography variant="h2" sx={{ fontFamily: "Llewie" }}>
    	      {member ? member.name : "L'équipe."}
    	    </Typography>
    	    <Typography variant="subtitle1" sx={{fontWeight:"500", fontSize:"17px", lineHeight: "1.5"}}>
    	      {member
    	        ? member.description
    	        : "Théo Schlegel et Antoine Adamy ont fondé Sequency dans le but d'aider les enfants à mieux approcher le monde numérique. Rejoins ensuite par Théo Cerdan, ils se sont rencontrés au sein de l'école 42 et partagent la même passion pour l’informatique et l'électronique. En participant au programme DPE de l'ESDES, Delhia Cocquaz et Emilie Lajon ont rejoint Sequency afin d'assister le plan commercial."}
    	    </Typography>
    	  </Box>
    	  <Box
    	    sx={{
    	    	display: "flex",
    	    	flexDirection: "row",
    	    }}
    	  >
    	    <Box
    	      sx={{
				borderRadius: "25px",
    	        display: {
    	          xs: "flex",
    	          md: "none",
    	        },
    	        overflowX: "scroll",
    	        flexDirection: "row",
    	        gap: 1,
    	        paddingBottom: 1,
    	        width: {
    	          xs: "100%",
    	          md: "50%",
    	        },
    	      }}
    	    >

    	      {teams.map((member: member) => {
				  return (
						<Grid key={member.name}
						item
						onMouseEnter={() => {
							setMember(member);
						}}
						onMouseLeave={() => {
							setMember(undefined);
						}}
						>
						<AvatarTeamCard {...member} />
						</Grid>
    	        );
			})}
    	    </Box>
    	    <Grid
    	      sx={{
    	        display: {
    	          xs: "none",
    	          md: "flex",
    	        },
    	        justifyContent: "center",
    	      }}
    	      container
    	      gap={1}
    	    >
    	      {teams.map((member: member) => {
    	        return (
    	          <Grid key={member.name}
    	            item
    	            onMouseEnter={() => {
    	              setMember(member);
    	            }}
    	            onMouseLeave={() => {
    	              setMember(undefined);
    	            }}
    	          >
    	            <AvatarTeamCard {...member} />
    	          </Grid>
    	        );
    	      })}
    	    </Grid>
    	  </Box>
    	</Box>
		);
};

export default Team;
