import {
	Platform,
	PixelRatio,
	useWindowDimensions,
} from 'react-native';

export const useNormalize = () => {
	const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
		useWindowDimensions();

	const scale = SCREEN_WIDTH / 320; // 320 is the layout size in figma
	const verticalScale = SCREEN_HEIGHT / 568;

	function normalize(size: number) {
		const newSize = size * scale;
		if (Platform.OS === 'ios') {
			return Math.round(PixelRatio.roundToNearestPixel(newSize));
		} else {
			return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
		}
	}

	function normalizeVertical(size: number) {
		const newSize = size * verticalScale;
		if (Platform.OS === 'ios') {
			return Math.round(PixelRatio.roundToNearestPixel(newSize));
		} else {
			return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
		}
	}

	return {
		normalize,
		normalizeVertical,
	};
};
