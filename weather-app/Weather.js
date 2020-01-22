import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Weather({ temp, name, country, condition }) {
	return (
		<LinearGradient style={styles.container} colors={weatherCases[condition].colors}>
			<View style={styles.upper}>
				<MaterialCommunityIcons
					color='white'
					size={144}
					name={weatherCases[condition].icon}
				/>
				<Text style={styles.temp}>{temp}°c</Text>
				<Text style={styles.name}>
					{name}, {country}
				</Text>
			</View>
			<View style={styles.lower}>
				<Text style={styles.title}>{weatherCases[condition].title}</Text>
				<Text style={styles.subtitle}>{weatherCases[condition].subtitle}</Text>
			</View>
		</LinearGradient>
	)
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		'Thunderstorm',
		'Drizzle',
		'Rain',
		'Snow',
		'Clear',
		'Clouds',
		'Haze',
		'Mist',
		'Dust'
	]).isRequired
}
const weatherCases = {
	Thunderstorm: {
		icon: 'weather-lightning',
		colors: ['#373B44', '#4286f4'],
		title: 'Thunderstorm in the house',
		subtitle: 'Actually, outside of the house'
	},
	Drizzle: {
		icon: 'weather-hail',
		colors: ['#89F7FE', '#66A6FF'],
		title: 'Drizzle',
		subtitle: 'Who needs an umbrella?'
	},
	Rain: {
		icon: 'weather-rainy',
		colors: ['#00C6FB', '#005BEA'],
		title: 'Raining',
		subtitle: "It's raining men, hallelujah"
	},
	Snow: {
		icon: 'weather-snowy',
		colors: ['#7DE2FC', '#B9B6E5'],
		title: 'Snowing',
		subtitle: 'Time to go Hokkaido'
	},
	Clear: {
		icon: 'weather-sunny',
		colors: ['#FF7300', '#FEF253'],
		title: 'Sunny',
		subtitle: 'Go outside, bro'
	},
	Clouds: {
		icon: 'weather-cloudy',
		colors: ['#D7D2CC', '#304352'],
		title: 'Clouds',
		subtitle: 'I know, fucking boring'
	},
	Mist: {
		icon: 'weather-hail',
		colors: ['#4DA0B0', '#D39D38'],
		title: 'Mist!',
		subtitle: "It's so moist"
	},
	Dust: {
		icon: 'weather-hail',
		colors: ['#4DA0B0', '#D39D38'],
		title: 'Dusty',
		subtitle: '(╯°□°）╯︵ ┻━┻'
	},
	Haze: {
		icon: 'weather-hail',
		colors: ['#4DA0B0', '#D39D38'],
		title: 'Haze',
		subtitle: "Can't see anything."
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	upper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent'
	},
	lower: {
		flex: 1,
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		paddingLeft: 25,
		backgroundColor: 'transparent'
	},
	temp: {
		fontSize: 40,
		color: 'white',
		marginTop: 10
	},
	name: {
		fontSize: 40,
		color: 'white',
		marginTop: 20
	},
	title: {
		fontSize: 40,
		color: 'white',
		marginBottom: 10,
		fontWeight: '300'
	},
	subtitle: {
		fontSize: 25,
		color: 'white',
		marginBottom: 24
	}
})
