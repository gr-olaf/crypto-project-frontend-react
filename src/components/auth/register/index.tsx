import {
	TextField,
	Button,
	Typography,
	createTheme,
	ThemeProvider,
} from '@mui/material';
import { IPropsRegister } from '../../../common/types/auth';

const theme = createTheme({
	typography: {
		fontFamily: ['Poppins', 'sans-serif'].join(','),
	},
});

const RegisterPage: React.FC<IPropsRegister> = (
	props: IPropsRegister
): JSX.Element => {
	const {
		setEmail,
		setPassword,
		setRepeatPassword,
		setFirstName,
		setUserName,
		navigate,
	} = props;

	return (
		<ThemeProvider theme={theme}>
			<Typography variant="h2" textAlign="center">
				Регистрация
			</Typography>
			<Typography variant="body1" marginBottom={3} textAlign="center">
				Введите данные для регистрации
			</Typography>
			<TextField
				fullWidth={true}
				margin="normal"
				label="Имя"
				variant="outlined"
				placeholder="Введите ваше имя"
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<TextField
				fullWidth={true}
				margin="normal"
				label="Username"
				variant="outlined"
				placeholder="Введите ваш username"
				onChange={(e) => setUserName(e.target.value)}
			/>
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
			<TextField
				fullWidth={true}
				type="password"
				margin="normal"
				label="Password"
				variant="outlined"
				placeholder="Повторите ваш пароль"
				onChange={(e) => setRepeatPassword(e.target.value)}
			/>
			<Button
				type="submit"
				sx={{ marginBlock: 2, width: '60%' }}
				variant="contained"
			>
				Регистрация
			</Button>
			<Typography variant="body1">
				У вас есть аккаунт?{' '}
				<span className="incitingText" onClick={() => navigate('/login')}>
					Авторизация
				</span>
			</Typography>
		</ThemeProvider>
	);
};

export default RegisterPage;
