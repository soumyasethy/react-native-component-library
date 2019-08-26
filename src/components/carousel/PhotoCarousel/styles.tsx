import styled from "styled-components/native";
import { mS, mVs, s } from "../../../widget/ResponsiveScreen";
export const Container = styled.View`
  height: ${mVs(730)};
  background-color: white;
  align-items: center;
  margin-top: 7px;
  margin-bottom: 3px;
`;
export const BoxImage = styled.Image`
  width: ${s(85)};
  height: ${mVs(75)};

  margin-top: 20px;
`;
export const Heading = styled.View`
  width: ${s(175)};
  height: ${mVs(27)};
  margin-top: 20px;
`;

export const Discription = styled.View`
  width: ${s(338)};
  height: ${mVs(76)};
  font-family: Avenir;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
`;
export const FullContainer = styled.View`
  width: ${s(315)};
  height: ${mVs(390)};
  border-radius: 20px;
  flex-direction: column;
  box-shadow: 10px 21px 14px rgba(0, 0, 0, 0.3);
  elevation: 10;
  margin-left: 25px;
  margin-top: 12px;
`;
export const ImageContainer = styled.Image`
  width: ${s(315)};
  height: ${mVs(278)};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Feed = styled.View`
  width: ${s(315)};
  height: ${mVs(121)};
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  elevation: 10;
`;

export const InstaIDContainer = styled.View`
  width: 100%;
  height: 40px;
  height: ${mVs(40)};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InstaImage = styled.Image`
  width: 30px;
  height: 30px;
  width: ${s(30)};
  height: ${mVs(30)};
  margin-left: 10px;
`;

export const InstaName = styled.Text`
  font-family: Avenir-Heavy;
  font-size: 14px;
  margin-left: 10px;
`;
export const InstaIcon = styled.Image`
  width: ${s(14)};
  height: ${mVs(14)};
  margin-left: 120px;
`;

export const InstaText = styled.Text`
  margin-left: 6px;
  font-family: Avenir-Medium;
  font-size: 14px;
  color: #d6249f;
`;

export const DescriptionText = styled.Text`
  opacity: 0.5;
  font-family: Avenir;
  font-size: 14;
  font-weight: 500;
  font-style: normal;
  letter-spacing: 0;
  text-align: center;
  color: #000000;
`;

export const FoodContent = styled.View`
  width: 100%;
  height: ${mVs(37)};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FoodIcon = styled.Image`
  width: 15px;
  height: 15px;
  width: ${s(15)};
  height: ${mVs(15)};
  margin-left: 10px;
`;

export const FoodText = styled.Text`
  opacity: 0.4;
  font-family: Avenir-Medium;
  font-size: 12px;
  color: #9b9b9b;
  margin-left: 13.5px;
`;

export const KnowAbout = styled.View`
width: ${s(204)};
height: ${mVs(40)};
border-radius: 5;
border-style: solid;
border-width: 1;
border-color:  #e41d36
align-items: center;
flex-direction: row;
justify-content: space-evenly;
top:-4%;
`;

export const KnowAboutText = styled.Text`
  font-family: Avenir;
  font-size: 12;
  font-weight: 900;
  font-style: normal;
  letter-spacing: 0;
  color: #e41d36;
`;
