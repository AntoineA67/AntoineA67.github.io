import { Box } from '@mui/material';
import { FC } from 'react';

type CustomWrapperProps = {
	anchor: string;
	children?: JSX.Element | JSX.Element[];
};

const CustomWrapper: FC<CustomWrapperProps> = (props) => {
	return (
		<Box component="div"
			
			id={props.anchor}
			sx={{
				py: {
					xs: 5,
					md: 5,
				},
				// px: 2,
				// minHeight: {md: "100vh"},
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",

			}}
		>
			{props.children}
		</Box>
	);
};

export default CustomWrapper;