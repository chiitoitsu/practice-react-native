import React from 'react'
import { StyleSheet, Text, View, StatusBar, Alert } from 'react-native'
import * as Location from 'expo-location'
import Weather from './Weather'

export default class App extends React.Component {
	state = {
		isLoaded: false,
		error: null
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
			this.setState({
				isLoaded: true
			})
		} catch (error) {
			Alert.alert('Error', error.message)
		}
	}
	render() {
		const { isLoaded } = this.state
		return (
			<View style={styles.container}>
				<StatusBar hidden={true} />
				{isLoaded ? (
					<Weather />
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
