import { Dimensions, PixelRatio, Platform } from 'react-native';

/**
 * # Adjusts a given size value based on the screen width to ensure consistent sizing across different devices.
 * using a base layout size of 320 for Figma designs.
 * On iOS, the adjusted size is rounded to the nearest pixel. On other platforms,
 * the value is rounded and slightly reduced to account for platform-specific differences.
 *
 * @param size - The original size value to be normalized.
 * @returns The normalized size, adjusted for the current device's screen width.
 */
export const normalize = (size: number): number => {
	const { width: screenWidth, height: screenHeight } =
		Dimensions.get('window');
	const scale = screenWidth / 320; // 320 is the layout size in Figma
	const newSize = size * scale;

	return Platform.OS === 'ios'
		? Math.round(PixelRatio.roundToNearestPixel(newSize))
		: Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};
