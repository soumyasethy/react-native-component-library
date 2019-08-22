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
  filter_icon?: string;
  setModalVisible: Function;
}

class HeaderWithFilterIcon extends React.Component<IProps, {}> {
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
          onPress={() => this.props.setModalVisible(true)}
        >
          <IconForShare>
            <Image
              style={{ height: 17, width: 14 }}
              source={{
                uri: this.props.filter_icon
              }}
            />
          </IconForShare>
        </TouchableOpacity>
      </HeaderContainerV2>
    );
  }
}
export default HeaderWithFilterIcon;
