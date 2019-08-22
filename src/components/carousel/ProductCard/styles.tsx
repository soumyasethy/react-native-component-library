import styled from "styled-components/native";
import { mS, mVs, s } from "../../../widget/ResponsiveScreen";

export const Container = styled.View`
  width: ${s(375)};
  height: ${mVs(430)};
  background-color: white;
  margin-top: 7px;
  margin-bottom: 3px;
`;
export const FreeDelView = styled.View`
  width: ${s(70)};
  height: ${mVs(32)};
  background-color: #ff8500;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top-left-radius: ${mS(15)};
  border-bottom-right-radius: ${mS(15)};
`;

export const OfferImageBackView = styled.ImageBackground`
  width: ${s(290)};
  height: ${mVs(219)};
	background-color: #ffffff;
	shadow-color: #f5f5f5;
	shadow-radius:${mS(15)};
	shadow-opacity: 1;
  left:35;
  elevation: 10;
	border-radius: ${mS(15)};
  shadow-offset: {
    width: 0,
    height: 2
	};
	top:4%;
	position:absolute;
`;
export const DetailCardView = styled.View`
width: ${s(315)};
height:  ${mVs(203)};
	background-color: #ffffff;
	border-radius:${mS(5)};
	shadow-color: #f2f2f2;
  shadow-offset: {
    width: 0,
    height: 2
  };
  shadow-radius: ${mS(5)};
	shadow-opacity: 1;
	elevation: 10;
	margin-left: ${mVs(20)};
	top:69%;
 `;
export const FreeDelText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  letter-spacing: 0;
  text-align: center;
  color: white;
`;
export const ItemNameText = styled.Text`
  font-size: 20px;
  font-weight: 900;
  font-style: normal;
  letter-spacing: 0;
  color: #000000;
  margin-left: ${mVs(9)};
  margin-top: ${mVs(30)};
`;

export const Seprator = styled.Text`
  width: ${s(2)};
  height: ${mVs(11)};
  border-width: ${mS(1)};
  border-color: #e9e9e9;
`;

export const ButtonView = styled.TouchableOpacity`
  background-color: #e41d36;
  align-items: center;
  justify-content: center;
  width: ${s(75)};
  height: ${mVs(32)};
  border-radius: ${mS(4)};
  top: 2;
`;

export const OfferViewAddSign = styled.Text`
  font-size: 12;
  font-weight: 900;
  font-style: normal;
  letter-spacing: 0;
  color: #fff;
`;
export const Serve = styled.View`
  width: ${s(295)};
  height: ${mVs(36)};
  opacity: 0.7;
  border-radius: ${mS(4)};
  border: solid 1px #000000;
  background-color: white;
  margin-left: ${mVs(9)};
  margin-top: ${mVs(10)};
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const DeliveryMsgRow = styled.View`
  top: 40;
  width: ${s(315)};
  height: ${mVs(27)};
  border-bottom-left-radius: ${mS(5)};
  border-bottom-right-radius: ${mS(5)};
  background-color: #f9f9f9;
  elevation: 10;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
export const DetailsOfItems = styled.View`
  width: ${s(315)};
  height: ${mVs(20)};
  margin-top: ${mVs(5)};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const AddButtonView = styled.View`
  width: ${s(315)};
  height: ${mVs(35)};
  top: 9;
  flex: 0.3;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const DetailText = styled.Text`
  opacity: 0.4;
  font-family: Avenir;
  font-size: 13;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0;
  text-align: center;
  color: #000000;
  margin-left: ${mVs(-5)};
`;
export const ServeText = styled.Text`
  opacity: 0.8;
  font-family: Avenir;
  font-size: 13;
  font-weight: 900;
  font-style: normal;
  letter-spacing: 0;
  text-align: center;
  color: #000000;
`;
export const ButtonSeprator = styled.View`
  width: ${s(1)};
  height: ${mVs(35)};
  opacity: 0.1;
  border-style: solid;
  border-width: 1px;
  border-color: #373737;
`;
export const IconView = styled.View`
  width: ${s(12)};
  height: ${mVs(12)};
`;
export const MRPText = styled.Text`
  opacity: 0.5;
  font-family: Avenir;
  font-size: 13;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0;
  text-align: center;
  color: #000000;
  left: -25;
`;
export const MRPTextStrike = styled.Text`
  opacity: 0.5;
  font-family: Avenir;
  font-size: 13;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0;
  text-align: center;
  color: #000000;
  top: -18;
  left: 12;
  text-decoration-line: line-through;
`;

export const RedPriceText = styled.Text`
  font-family: Avenir;
  font-size: 14;
  font-weight: 900;
  font-style: normal;
  letter-spacing: 0;
  color: #e41d36;
  text-align: center;
  margin-top: 8;
  left: -30;
`;
export const DashedLine = styled.View`
  width: ${s(83)};
  height: ${mVs(1)};
  border-style: dashed;
  border-width: 1;
  border-radius: 1;
  border-color: rgba(0, 0, 0, 0.9);
  top: -15;
`;

export const InfoIcon = styled.View`
  top: 13.5;
  width: ${s(11)};
  height: ${mVs(11)};
  background-color: red;
`;
export const MrpContainer = styled.View`
  width: ${s(107)};
  height: ${mVs(25)};
  top: -6;
`;
export const ScooterImage = styled.View`
  width: ${s(30)};
  height: ${mVs(20)};
  background-color: #e41d36;
  margin-left: ${mVs(5)};
`;
