import { Dimensions } from "react-native";
import styled from "styled-components";
import { COLORS } from "../../../utils/Colors";
const { height, width } = Dimensions.get("window");
export const ScrollWrapper = styled.View`
  width: ${width};
  height: ${width / 2 + 20};
  justify-content: center;
  align-items: center;
`;
export const ImageBox = styled.ImageBackground`
  width: ${width - 20};
  height: ${width / 2 + 10};
  justify-content: center;
  align-items: center;
  resize-mode: contain;
  margin: 10px;
`;
export const LabelSmall = styled.Text`
  font-family: Avenir;
  font-size: 20.2px;
  font-weight: 900;
  line-height: 36.4px;
  letter-spacing: -0.8px;
  text-align: center;
  color: ${COLORS.WHITE};
`;
export const LabelLarge = styled.Text`
  font-family: Avenir;
  font-size: 25.2px;
  font-weight: 900;
  line-height: 36.4px;
  letter-spacing: -0.8px;
  text-align: center;
  color: ${COLORS.WHITE};
`;

export const ActiveIndecator = styled.View`
  width: 12px;
  height: 3px;
  border-radius: 3.5px;
  background-color: ${COLORS.WHITE};
  margin-left: 5px;
  margin-right: 5px;
`;
export const InactiveIndicator = styled.View`
  width: 12px;
  height: 3px;
  border-radius: 3.5px;
  background-color: rgba(161, 161, 161, 0.53);
  margin-left: 5px;
  margin-right: 5px;
`;
