import styled from 'styled-components/native'
import { Platform } from 'react-native'
export interface IImageState {
  heightI: string
  widthI: string
}
export interface ITouchState {
  height: string
  width: string
}

export const Container = styled.View`
	height:120px;
	margin-bottom: 10px;
`
export const SectionHeaderView = styled.Text`
	flex: 1;
	padding-left: 11px;
	color: #000;
	font-size: 16px;
	font-family: Avenir;
	letter-spacing: 0;
	font-weight: 900;
`
export const SectionTextView = styled.Text`
	padding-left: 7px;
	padding-top: 4px
	color: #6d6e71;
	font-size: 15px
	font-family: Avenir-Medium;
	letter-spacing: 0;
`
export const CategoryCarouselButtonView = styled.TouchableOpacity`
	display: flex;
	background-color: transparent;
	justify-content: center;
	align-items: center;
	border-radius: 70px;
	margin-top: 25px;
	margin-left: 18px;
	border-color:#e41d36;
	border-width:1px;
	width:52px;
	height:52px;
 
`
export const CategoryCarouselImageView = styled.Image`
	align-items: center;
	justify-content: center;
 
	border-radius: 7px;
	margin-top:15px; 
	width:52px;
	height:52px;
`

export const TitleView = styled.Text`

	letter-spacing: 0;
	top:10;
	font-family: Avenir;
	color: #000;
  font-family: Avenir;
  font-size: 10px;
`
