import {
	Text,
	ImageBackground,
	Pressable,
	View,
	TextInput,
	type TextInputChangeEventData,
	type NativeSyntheticEvent,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { homeStyles } from './index.style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNormalize } from '@/hooks/normalize.hook';
import RiveApp from '@/comp/rive-a';

export default function HomeView() {
	const insets = useSafeAreaInsets();
	const bg = {
		cold: require('@/assets/images/cold.png'),
		hot: require('@/assets/images/hot.png'),
	};
	const [bgImage, setBgImage] = useState<keyof typeof bg>('hot');
	const { normalize } = useNormalize();
	const [unit, setUnit] = useState<'°C' | '°F'>('°C');
	const [inputValue, setInputValue] = useState<string>('0');
	const [outputValue, setOutputValue] = useState<string>('0');
	const handleTempCalculation = useCallback(
		(temperature: string) => {
			let temp = 0;
			if (Number.isNaN(Number(temperature))) return;
			if (unit === '°C') temp = (Number(temperature) * 9) / 5 + 32;
			if (unit === '°F') temp = ((Number(temperature) - 32) * 5) / 9;
			setOutputValue(temperature);
			setBgImage(temp > 32 ? 'hot' : 'cold');
			setInputValue(temp?.toFixed(1));
		},

		[unit],
	);
	const handleInputValue = (
		text: NativeSyntheticEvent<TextInputChangeEventData>,
	) => {
		console.log('🪲 🪲 index.tsx:25 🪲 text:', text.nativeEvent.text);
		handleTempCalculation(text.nativeEvent.text);
		return text;
	};

	return (
		<ImageBackground
			source={bg[bgImage]}
			style={[{ paddingTop: insets.top }, homeStyles.screen]}>
			<View style={homeStyles.content__wrapper}>
				<View style={homeStyles.temperature__tempDisplay}>
					<Text style={homeStyles.temperature__title}>{inputValue}</Text>
					<Text style={homeStyles.temperature__celsius}>{unit}</Text>
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
					onPressIn={() => {
						setUnit((prev) => (prev === '°C' ? '°F' : '°C'));
						handleTempCalculation(outputValue);
					}}
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
				<RiveApp />
			</View>
		</ImageBackground>
	);
}
