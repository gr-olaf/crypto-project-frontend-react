import { useContext } from 'react';
import { Box, Grid, IconButton, useTheme, InputBase } from '@mui/material';
import { useAppSelector } from '../../utils/hook';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { tokens } from '../../theme';
import { ColorModeContext } from '../../theme';

const TopBarComponent = () => {
	const { user } = useAppSelector((state) => state.auth);
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				px: '32px',
				py: '24px',
			}}
		>
			<Grid>Welcome {user.firstName}</Grid>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<Grid
					sx={{ pr: '37px', borderRight: `1px solid ${colors.borderColor}` }}
				>
					<IconButton onClick={colorMode.toggleColorMode} sx={{ mr: '45px' }}>
						{theme.palette.mode === 'dark' ? (
							<DarkModeIcon />
						) : (
							<LightModeIcon />
						)}
					</IconButton>
					<IconButton>
						<NotificationsNoneIcon />
					</IconButton>
				</Grid>
				<Grid
					sx={{
						display: 'flex',
						borderRadius: '8px',
						ml: '28px',
						backgroundColor: `${colors.primary[600]}`,
					}}
				>
					<IconButton sx={{ '&:hover': { background: 'transparent' } }}>
						<SearchIcon />
					</IconButton>
					<InputBase placeholder="Поиск" />
				</Grid>
			</Box>
		</Box>
	);
};

export default TopBarComponent;
