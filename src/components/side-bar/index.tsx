import {
	Box,
	Drawer,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
	useTheme,
} from '@mui/material';
import {
	ChevronLeftOutlined,
	ChevronRightOutlined,
	LogoutOutlined,
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { tokens } from '../../theme';
import FlexBetween from '../flex-between';
import { navMenu } from '../../common/moks/navigate';
import Logo from '../../assets/images/side-bar/logo.svg';
import styles from './styles.module.scss';

const SideBarComponent = (props: any) => {
	const [active, setActive] = useState('');
	const { isNonMobile, drawerWidth, isOpen, setIsOpen } = props;
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	useEffect(() => {
		setActive(pathname.substring(1));
	}, [pathname]);

	return (
		<Box component="nav">
			{isOpen && (
				<Drawer
					open={isOpen}
					onClose={() => setIsOpen(false)}
					variant="persistent"
					anchor="left"
					sx={{
						width: drawerWidth,
						'& .MuiDrawer-paper': {
							color: `${colors.secondary.DEFAULT}`,
							background: `${colors.primary.DEFAULT}`,
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					<Box
						className={styles.navBar}
						sx={{ borderBottom: `1px solid ${colors.borderColor}` }}
					>
						<Box>
							<FlexBetween>
								<Box className={styles.brand}>
									<img src={Logo} alt="Logo" />
									<Typography
										variant="h1"
										color={
											theme.palette.mode === 'dark'
												? colors.white.DEFAULT
												: colors.black.DEFAULT
										}
									>
										Demo
									</Typography>
								</Box>
								{!isNonMobile && (
									<IconButton onClick={() => setIsOpen(!isOpen)}>
										<ChevronLeftOutlined />
									</IconButton>
								)}
							</FlexBetween>
						</Box>
						<List className={styles.navList}>
							{navMenu.map((element) => {
								return (
									<ListItem key={element.id}>
										<ListItemButton
											className={styles.navItem}
											sx={{
												'&:hover': {
													'& .MuiSvgIcon-root': { color: colors.white.DEFAULT },
												},
											}}
											onClick={() => navigate(element.path)}
										>
											<ListItemIcon>{element.icon}</ListItemIcon>
											<ListItemText>
												<Typography variant="body1">{element.name}</Typography>
											</ListItemText>
										</ListItemButton>
									</ListItem>
								);
							})}
						</List>
					</Box>
					<Box
						className={styles.logoutBar}
						sx={{
							'&:hover': {
								'& .MuiSvgIcon-root': { color: colors.white.DEFAULT },
							},
						}}
					>
						<List>
							<ListItem>
								<ListItemButton className={styles.navItem}>
									<ListItemIcon>
										<LogoutOutlined />
									</ListItemIcon>
									<ListItemText>
										<Typography>Выход</Typography>
									</ListItemText>
								</ListItemButton>
							</ListItem>
						</List>
					</Box>
				</Drawer>
			)}
		</Box>
	);
};

export default SideBarComponent;
