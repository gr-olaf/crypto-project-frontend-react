import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery, Box } from '@mui/material';
import { ILayout } from '../../common/types/layout';
import TopBarComponent from '../top-bar';
import SideBarComponent from '../side-bar';

const LayoutComponent: React.FC<ILayout> = ({ children }: ILayout) => {
	const [isOpen, setIsOpen] = useState(true);
	const location = useLocation();
	const isNonMobile = useMediaQuery('mid-width:600px');

	return location.pathname === '/login' || location.pathname === '/register' ? (
		<>{children}</>
	) : (
		<>
			<Box
				display={isNonMobile ? 'flex' : 'block'}
				sx={{
					width: '100%',
					height: '100%',
				}}
			>
				<SideBarComponent
					isNonMobile={isNonMobile}
					drawerWidth="250"
					isOpen={isOpen}
					setIsOpen={setIsOpen}
				/>
				<Box>
					<TopBarComponent />
					{children}
				</Box>
			</Box>
		</>
	);
};

export default LayoutComponent;
