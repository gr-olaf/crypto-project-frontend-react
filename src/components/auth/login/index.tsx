import {
	TextField,
	Button,
	Typography,
	createTheme,
	ThemeProvider,
} from '@mui/material';
import { IPropsLogin } from '../../../common/types/auth';

const theme = createTheme({
	typography: {
		fontFamily: ['Poppins', 'sans-serif'].join(','),
	},
});

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
	const { setEmail, setPassword, navigate } = props;

	return (
		<ThemeProvider theme={theme}>
			<Typography variant="h2" textAlign="center">
				Авторизация
			</Typography>
			<Typography variant="body1" marginBottom={3} textAlign="center">
				Введите ваш логин и пароль
			</Typography>
			<TextField
				fullWidth={true}
				margin="normal"
				label="Email"
				variant="outlined"
				placeholder="Введите ваш email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<TextField
				fullWidth={true}
				type="password"
				margin="normal"
				label="Password"
				variant="outlined"
				placeholder="Введите ваш пароль"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button
				type="submit"
				sx={{ marginBlock: 2, width: '60%' }}
				variant="contained"
			>
				Войти
			</Button>
			<Typography variant="body1">
				У вас нет аккаунта?{' '}
				<span className="incitingText" onClick={() => navigate('/register')}>
					Регистрация
				</span>
			</Typography>
		</ThemeProvider>
	);
};

export default LoginPage;
