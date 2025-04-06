import {
	Text,
	ImageBackground,
	Pressable,
	View,
	TextInput,
	type TextInputChangeEventData,
	type NativeSyntheticEvent,
} from 'react-native';
import React, { useState } from 'react';
import { homeStyles } from './index.style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNormalize } from '@/hooks/normalize.hook';

export default function HomeView() {
	const insets = useSafeAreaInsets();
	const bg = {
		cold: require('@/assets/images/cold.png'),
		hot: require('@/assets/images/hot.png'),
	};
	const [bgImage, setBgImage] = useState<keyof typeof bg>('hot');
	const { normalize } = useNormalize();
	const [temperature, setTemperature] = useState<string>('0');
	const [inputValue, setInputValue] = useState<string>('0');

	const handleInputValue = (
		text: NativeSyntheticEvent<TextInputChangeEventData>,
	) => {
		console.log('🪲 🪲 index.tsx:25 🪲 text:', text.nativeEvent.text);
		setInputValue(text.nativeEvent.text ? text.nativeEvent.text : '0');
		return text;
	};
	return (
		<ImageBackground
			source={bg[bgImage]}
			style={[{ paddingTop: insets.top }, homeStyles.screen]}>
			<View style={homeStyles.content__wrapper}>
				<View>
					<Text style={homeStyles.temperature__title}>{inputValue}</Text>
					<Text style={homeStyles.temperature__celsius}>co</Text>
				</View>
				<TextInput
					maxLength={3}
					keyboardAppearance={'dark'}
					keyboardType={'number-pad'}
					style={homeStyles.temperature_input}
					placeholder="Enter temperature"
					placeholderTextColor={'#969696'}
					onChange={handleInputValue}
				/>
				<Pressable
					style={({ pressed }) => [
						homeStyles.convertBtn,
						{
							paddingInline: normalize(24),
							paddingBlock: normalize(12),
							borderRadius: normalize(4),
							maxWidth: normalize(200),
						},
						pressed && homeStyles.convertBtnPressed,
					]}>
					<Text style={homeStyles.btnText}>Convert</Text>
				</Pressable>
			</View>
		</ImageBackground>
	);
}
