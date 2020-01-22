import React from 'react'
import { StyleSheet, Text, View, StatusBar, Alert } from 'react-native'
import * as Location from 'expo-location'
import Weather from './Weather'

const API_KEY = 'USE_YOUR_OWN_KEY'

export default class App extends React.Component {
	state = {
		isLoaded: false,
		temp: null,
		name: null,
		country: null,
		condition: null
	}
	componentDidMount() {
		this._getLocation()
	}
	_getLocation = async () => {
		try {
			await Location.requestPermissionsAsync()
			const {
				coords: { latitude, longitude }
			} = await Location.getCurrentPositionAsync()
			this._getWeather(latitude, longitude)
		} catch (error) {
			Alert.alert('Error', error.message)
		}
	}
	_getWeather = async (lat, lon) => {
		fetch(
			`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
		)
			.then(response => response.json())
			.then(json => {
				console.log(json)
				this.setState({
					isLoaded: true,
					temp: json.main.temp,
					name: json.name,
					country: json.sys.country,
					condition: json.weather[0].main
				})
			})
	}
	render() {
		const { isLoaded, temp, name, country, condition } = this.state
		return (
			<View style={styles.container}>
				<StatusBar hidden={true} />
				{isLoaded ? (
					<Weather
						temp={Math.round(temp)}
						name={name}
						country={country}
						condition={condition}
					/>
				) : (
					<View style={styles.loading}>
						<Text style={styles.loadingText}>Getting the weather</Text>
					</View>
				)}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	loading: {
		flex: 1,
		backgroundColor: '#fdf6aa',
		justifyContent: 'flex-end',
		paddingLeft: 25
	},
	loadingText: {
		fontSize: 30,
		marginBottom: 24
	}
})
