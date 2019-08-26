import styled from "styled-components/native";
import { Platform } from "react-native";
export interface IImageState {
  heightI: string;
  widthI: string;
}
export interface ITouchState {
  height: string;
  width: string;
}

export const Container = styled.View`
  height: 230px;
  background-color: white;
  margin-top: 7px;
  margin-bottom: 3px;
`;
export const SectionHeaderView = styled.Text`
  flex: 1;
  padding-left: 11px;
  color: rgba(0, 0, 0, 0.7);
  font-size: 16px;
  font-family: Avenir;
  letter-spacing: 0;
  font-weight: 900;
`;
export const SectionTextView = styled.Text`
	padding-left: 7px;
	color: #6d6e71;
	font-size: 15px
	font-family: Avenir-Medium;
	letter-spacing: 0;
`;
export const CuratorButtonView = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin-top: 35px;
  margin-left: 18px;
  width: ${(props: ITouchState) => {
    return props.width === "small" ? 55 : 80;
  }};
  height: ${(props: ITouchState) => {
    return props.height === "small" ? 55 : 80;
  }};
`;
export const CuratorImageView = styled.Image`
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  margin-top: 15px;

  width: ${(props: IImageState) => {
    return props.widthI === "small" ? 55 : 80;
  }};
  height: ${(props: IImageState) => {
    return props.heightI === "small" ? 55 : 80;
  }};
`;

export const TitleView = styled.Text`
  padding-top: 10px;
  padding-bottom: 10px;
  letter-spacing: 0;
  font-family: Avenir;
  font-size: 13px;
  font-weight: 900;
  color: #4a4a4a;
  text-align: center;
`;
