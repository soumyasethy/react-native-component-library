import styled from "styled-components/native";
import { mS, mVs, s } from "../../../widget/ResponsiveScreen";
export const HeaderContainerV1 = styled.View`
  width: ${s(375)};
  height: ${mVs(51)};
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 0.4;
  background-color: white;
`;
export const LogoView = styled.View`
  width: ${s(78)};
  height: ${mVs(30)};
  margin-left: 10;
`;
export const LocationView = styled.View`
  width: ${s(85)};
  height: ${mVs(16)};
  margin-right: 40;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
export const MapIcon = styled.View`
  width: 20px;
  height: 20px;
  width: ${s(20)};
  height: ${mVs(20)};
  background-color: transparent;
`;
export const HeaderContainerV2 = styled.View`
  width: ${s(375)};
  height: ${mVs(52)};
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin-top: 10;
  background-color: #fbfbfb;
  box-shadow: 1px 6px 5px rgba(0, 0, 0, 0.1);
`;

export const HeaderTitle = styled.Text`
  width: ${s(293)};
  height: ${mVs(27)};
  font-family: Avenir;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  color: #4a4a4a;
`;

export const BackButtonView = styled.View`
  width: ${s(9)};
  height: ${mVs(15)};
`;

export const IconForShare = styled.View`
  width: ${s(14)};
  height: ${mVs(17)};
`;

export const Container = styled.View`
 border-radius: 16px;
 background-color: #fff;
 margin-top:190px;
    flex:0.9
    bottom:0;
position:absolute;
`;

export const HeadingView = styled.View`
  width: ${s(375)};
  height: ${mVs(60)};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: #e41d36;
  justify-content: space-between;
  align-content: center;
  flex-direction: row;
  align-items: center;
`;

export const FilterText = styled.Text`
  font-family: Avenir;
  font-size: 18px;
  font-weight: 500;
  color: white;
  left: 22;
`;
export const CategortHeading = styled.Text`
  font-family: Avenir;
  font-size: 18px;
  font-weight: 900;
  color: #4a4a4a;
  margin-top: 18px;
  margin-left: 8px;
`;

export const Separator = styled.View`
  width: ${s(358)};
  height: ${mVs(2)};
  border: solid 1px #e0e0e0;
  margin-top: 8px;
  margin-left: 8px;
`;

export const CheckTextView = styled.View`
  width: ${s(144)};
  height: ${mVs(20)};
  flex-direction: row;
  margin-top: 13;
`;
export const CategoryName = styled.Text`
 opacity: 0.7;
 font-family: Avenir;
 font-size: 12px;
    font-weight: 500;
    left:5
    margin-top:2px
`;
export const FilterBy = styled.Text`
  opacity: 0.6;
  font-family: Avenir;
  font-size: 14px;
  font-weight: 900;
`;

export const FilterByView = styled.View`
  width: ${s(145)};
  height: ${mVs(30)};
  border-radius: 5px;
  border: solid 1px #e0e0e0;
  justify-content: center;
  align-items: center;
`;

export const FilterCategoryView = styled.View`
  margin-top: 10px;
  margin-left: 25px;
  width: 320px;
  height: 170px;
  width: ${s(320)};
  height: ${mVs(17)};
  flex-direction: row;
`;
export const SingleCategoryView = styled.View`
  width: 145px;
  height: 170px;
  margin-top: 15px;
  margin-left: 25px;
`;
