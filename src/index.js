import React from "react";
import { View, Text } from "react-native";
import { MyReactNativeComponent } from "./styledComponent";

import { Header } from "./components/header";
import { mS, s, mVs } from "./widget/ResponsiveScreen";
import HeaderWithShareIcon from "./components/header/HeaderWithShareIcon";
import HeaderWithLocation from "./components/header/HeaderWithLocation";
import HeaderWithFilterIcon from "./components/header/HeaderWithFilterIcon";
import BannerComponentWithImage from "./components/carousel/BannerCarousel";
import CategoryCarousel from "./components/carousel/CategoryCarousel";
import ProductCard from "./components/carousel/ProductCard";

export {
  s,
  mS,
  mVs,
  Header,
  HeaderWithShareIcon,
  HeaderWithLocation,
  HeaderWithFilterIcon,
  BannerComponentWithImage,
  CategoryCarousel,
  ProductCard
};

/*** Testing purpose ***/
/*export default class ReactNativeLibraryStarter extends React.Component {
  render() {
    return (
      <>
        <HeaderWithShareIcon
          heading={"Chicken"}
          share_icon={
            "https://cdn.zeplin.io/5d149ec83ea6b873570dba32/assets/6C8AF338-9F2B-405E-B639-213A87509F34.png"
          }
        />
        <View style={{ padding: mS(10) }}>
          <Text>Hello Soumya from Nice RN-Lib</Text>
          <MyReactNativeComponent />
        </View>
      </>
    );
  }
}*/
