import React from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  HeaderContainerV2,
  IconForShare,
  BackButtonView,
  HeaderTitle
} from "./styles";
interface IProps {
  heading?: string;
  share_icon?: string;
  onShare?: Function;
}
class HeaderWithShareIcon extends React.Component<IProps, {}> {
  render() {
    return (
      <HeaderContainerV2>
        <BackButtonView>
          <Image
            style={{ height: 17, width: 14 }}
            source={{
              uri: "https://img.icons8.com/ios/100/000000/back.png"
            }}
          />
        </BackButtonView>
        <HeaderTitle> {this.props.heading}</HeaderTitle>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            this.props.onShare("Hello Clicked");
          }}
        >
          <IconForShare>
            <Image
              style={{ height: 17, width: 14 }}
              source={{
                uri: this.props.share_icon
              }}
            />
          </IconForShare>
        </TouchableOpacity>
      </HeaderContainerV2>
    );
  }
}
export default HeaderWithShareIcon;
