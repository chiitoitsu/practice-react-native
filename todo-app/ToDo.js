import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native'
import PropTypes from 'prop-types'

const { height, width } = Dimensions.get('window')

export default class ToDo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isEditing: false,
			toDoValue: props.text
		}
	}
	static propTypes = {
		text: PropTypes.string.isRequired,
		isCompleted: PropTypes.bool.isRequired,
		deleteToDo: PropTypes.func.isRequired,
		id: PropTypes.string.isRequired
	}

	_toggleComplete = () => {
		this.setState(prevState => {
			return {
				isCompleted: !prevState.isCompleted
			}
		})
	}

	_startEditing = () => {
		this.setState({
			isEditing: true
		})
	}

	_finishEditing = () => {
		this.setState({
			isEditing: false
		})
	}

	_controlInput = text => {
		this.setState({
			toDoValue: text
		})
	}

	render() {
		const { isCompleted, isEditing, toDoValue } = this.state
		const { text, id, deleteToDo } = this.props
		return (
			<View style={styles.container}>
				<View style={styles.column}>
					<TouchableOpacity onPress={this._toggleComplete}>
						<View
							style={[
								styles.circle,
								isCompleted ? styles.completedCircle : styles.uncompletedCircle
							]}
						/>
					</TouchableOpacity>
					{isEditing ? (
						<TextInput
							style={[
								styles.input,
								styles.text,
								isCompleted ? styles.completedText : styles.uncompletedText
							]}
							value={toDoValue}
							multiline={true}
							onChange={this._controlInput}
							returnKeyType='done'
							onBlur={this._finishEditing}
						/>
					) : (
						<Text
							style={[
								styles.text,
								isCompleted ? styles.completedText : styles.uncompletedText
							]}
						>
							{text}
						</Text>
					)}
				</View>

				{isEditing ? (
					<View style={styles.actions}>
						<TouchableOpacity onPressOut={this._finishEditing}>
							<View style={styles.actionContainer}>
								<Text style={styles.actionText}>Done</Text>
							</View>
						</TouchableOpacity>
					</View>
				) : (
					<View style={styles.actions}>
						<TouchableOpacity onPressOut={this._startEditing}>
							<View style={styles.actionContainer}>
								<Text style={styles.actionText}>Edit</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPressOut={() => deleteToDo(id)}>
							<View style={styles.actionContainer}>
								<Text style={styles.actionText}>Delete</Text>
							</View>
						</TouchableOpacity>
					</View>
				)}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		width: width - 50,
		borderBottomColor: '#bbb',
		borderBottomWidth: StyleSheet.hairlineWidth,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	circle: {
		width: 30,
		height: 30,
		borderRadius: 15,
		borderColor: 'red',
		borderWidth: 3,
		marginRight: 20
	},
	completedCircle: {
		borderColor: '#bbb'
	},
	uncompletedCircle: {
		borderColor: '#f23657'
	},
	text: {
		fontWeight: '600',
		fontSize: 20,
		marginVertical: 20
	},
	completedText: {
		color: '#bbb',
		textDecorationLine: 'line-through'
	},
	uncompletedText: {
		color: '#353535'
	},
	column: {
		width: width / 2,
		flexDirection: 'row',
		alignItems: 'center'
	},
	actions: {
		flexDirection: 'row'
	},
	actionContainer: {
		marginVertical: 10,
		marginHorizontal: 10
	},
	input: {
		width: width / 2,
		marginVertical: 10,
		marginHorizontal: 10
	}
})
