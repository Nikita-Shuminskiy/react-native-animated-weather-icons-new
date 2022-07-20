import React from 'react';
import {
	RainIconAnimated,
	SnowIconAnimated,
	SunCloudIconAnimated,
	SunIconAnimated,
	ThunderIconAnimated,
	WindCloudIconAnimated
} from './AnimatedIcons/index';

const AnimatedWeatherIcon = (props: Props) => {
	const icons = {
		'weather-rainy': <RainIconAnimated {...props} />,
		'weather-sunny': <SunIconAnimated {...props} />,
		'weather-lightning': <ThunderIconAnimated {...props} />,
		'weather-cloudy': <SunCloudIconAnimated {...props} />,
		'weather-snowy': <SnowIconAnimated {...props} />,
		'weather-hail': <RainIconAnimated {...props} />,
		'weather-fog': <SunCloudIconAnimated {...props} />,
		'weather-windy': <WindCloudIconAnimated {...props} />
	}

	return icons[props.weatherName]
}

AnimatedWeatherIcon.defaultProps = {
	weatherName: 'weather-sunny',
	size: 50,
	speed: 1,
	color: 'black'
}

interface Props {
	weatherName: string,
	color?: string,
	size?: number,
	speed?: number
}

export default AnimatedWeatherIcon
