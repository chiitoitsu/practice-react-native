import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

export default class Weather extends React.Component {
	render() {
		return (
			<LinearGradient style={styles.container} colors={['#00c6fb', '#005bea']}>
				<View style={styles.upper}>
					<Ionicons color='white' size={144} name='ios-rainy' />
					<Text style={styles.temp}>20°c</Text>
				</View>
				<View style={styles.lower}>
					<Text style={styles.title}>Raining</Text>
					<Text style={styles.subtitle}>For more info, look outside</Text>
				</View>
			</LinearGradient>
		)
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
