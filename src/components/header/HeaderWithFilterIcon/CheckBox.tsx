import React, { Component } from 'react'
import styled from 'styled-components'
import { TouchableOpacity, View } from 'react-native'
const CustomCheckBox = styled(View)`
  height: 20px;
  width: 20px;
  background: ${props => (props.checkBoxActive ? '#e41d36' : 'transparent')};
  border-radius:5px;
  position: relative;
  justify-content: center;
  margin: 0px 8px 0 0;
  border: solid 1px #e1e4e5;
`
const CheckIcon = styled(View)`
  border-radius: 1px;
  align-self: center;
  transform: rotate(-40deg);
`
const CheckIconWrapper = styled(View)`
  position: relative;
  left: 2px;
  top: -2px;
`
const CheckIconVertical = styled(View)`
  height: 5px;
  width: 2px;
  background: ${props => (props.checkBoxActive ? '#fff' : 'transparent')};
`
const CheckIconHorizontal = styled(View)`
  height: 2px;
  width: 10px;
  background: ${props => (props.checkBoxActive ? '#fff' : 'transparent')};
`
class CheckBox extends Component {
	state = {
		checkBox: false
	}
	render() {
		return (
			<TouchableOpacity
				onPress={() => {
					this.setState({ checkBox: !this.state.checkBox })
				}}>
				<CustomCheckBox checkBoxActive={this.state.checkBox}>
					<CheckIcon>
						<CheckIconWrapper>
							<CheckIconVertical checkBoxActive={this.state.checkBox} />
							<CheckIconHorizontal checkBoxActive={this.state.checkBox} />
						</CheckIconWrapper>
					</CheckIcon>
				</CustomCheckBox>
			</TouchableOpacity>
		)
	}
}
export default CheckBox
