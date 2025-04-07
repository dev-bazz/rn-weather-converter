import { normalize } from '@/hooks/normalize.fn';
import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'stretch',
		justifyContent: 'center',
	},
	convertBtn: {
		backgroundColor: '#000',
		width: '100%',
	},
	convertBtnPressed: {
		backgroundColor: '#333',
	},
	btnText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: 'bold',
	},
	content__wrapper: {
		alignItems: 'center',
		gap: 16,
	},

	temperature__display: {
		backgroundColor: '#fff',
		width: '100%',
	},
	temperature_input: {
		backgroundColor: '#fff',
		borderRadius: 12,
		width: '100%',
		maxWidth: normalize(200),
		padding: normalize(12),
		paddingInline: normalize(16),
	},
	temperature__title: {
		color: '#fff',
		fontSize: normalize(38),
		fontWeight: 'bold',
		position: 'relative',
	},
	temperature__celsius: {
		position: 'absolute',
		top: 0,
		right: '30%',
		textAlign: 'center',
		color: '#fff',
		fontWeight: 'bold',
	},
	temperature__tempDisplay: {
		position: 'relative',
		maxWidth: normalize(200),
		width: '100%',
		alignItems: 'center',
	},
});
