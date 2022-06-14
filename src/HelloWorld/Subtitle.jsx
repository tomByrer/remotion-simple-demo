import {interpolate, useCurrentFrame} from 'remotion';
import {COLOR_1} from './config';

export const Subtitle = ({subtitleText, subtitleColor}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 0.84]);
	return (
		<div
			style={{
				fontFamily: 'Helvetica, Arial',
				fontSize: 54.4,
				textAlign: 'center',
				position: 'absolute',
				bottom: 103,
				width: '100%',
				color: subtitleColor,
				opacity,
			}}
		>
			{subtitleText}
		</div>
	);
};
