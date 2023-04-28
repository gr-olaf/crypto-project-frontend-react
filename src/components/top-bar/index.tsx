import { useContext } from 'react';
import { Box, Grid, IconButton, useTheme, InputBase } from '@mui/material';
import { useAppSelector } from '../../utils/hook';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { tokens } from '../../theme';
import { ColorModeContext } from '../../theme';
import styles from './styles.module.scss';

const TopBarComponent = () => {
	const { user } = useAppSelector((state) => state.auth);
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);

	return (
		<Box
			className={styles.root}
			sx={{
				backgroundColor: colors.primary.DEFAULT,
				borderBottom: `1px solid ${colors.borderColor}`,
			}}
		>
			<Grid>Welcome {user.firstName}</Grid>
			<Box className={styles.iconBar}>
				<Grid
					sx={{ pr: '37px', borderRight: `1px solid ${colors.borderColor}` }}
				>
					<IconButton
						onClick={colorMode.toggleColorMode}
						className={styles.themeIcon}
					>
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
					className={styles.searchBar}
					sx={{
						backgroundColor: `${colors.primary[600]}`,
					}}
				>
					<IconButton className={styles.searchIcon}>
						<SearchIcon />
					</IconButton>
					<InputBase className={styles.searchInput} placeholder="Поиск" />
				</Grid>
			</Box>
		</Box>
	);
};

export default TopBarComponent;
