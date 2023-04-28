import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery, Box } from '@mui/material';
import { ILayout } from '../../common/types/layout';
import TopBarComponent from '../top-bar';
import SideBarComponent from '../side-bar';
import styles from './styles.module.scss';

const LayoutComponent: React.FC<ILayout> = ({ children }: ILayout) => {
	const [isOpen, setIsOpen] = useState(true);
	const location = useLocation();
	const isNonMobile = useMediaQuery('(min-width:600px)');

	return location.pathname === '/login' || location.pathname === '/register' ? (
		<>{children}</>
	) : (
		<>
			<Box display={isNonMobile ? 'flex' : 'block'} className={styles.root}>
				<SideBarComponent
					isNonMobile={isNonMobile}
					drawerWidth="250"
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
				<Box className={styles.wrapper}>
					<TopBarComponent />
					{children}
				</Box>
			</Box>
		</>
	);
};

export default LayoutComponent;
