import React from "react";
import { HeaderContainerV1 } from "./styles";
import { LogoView, LocationView, MapIcon } from "./styles";
import { Image, TouchableOpacity, Text } from "react-native";
interface IProps {
  logo_url?: string;
  alt_text?: string;
}
class HeaderWithLocation extends React.Component<IProps, {}> {
  render() {
    const { logo_url, alt_text } = this.props;
    return (
      <HeaderContainerV1>
        <LogoView accessible={true}>
          <Image
            style={{ height: 30, width: 78 }}
            source={{ uri: logo_url }}
            accessibilityLabel="LOGO"
            alt="LOGO"
          />
        </LogoView>

        <TouchableOpacity activeOpacity={1}>
          <LocationView>
            <MapIcon>
              <Image
                style={{
                  width: 15,
                  height: 15,
                  marginTop: 3,
                  marginLeft: 8,
                  opacity: 0.2
                }}
                source={{
                  uri:
                    "http://www.myiconfinder.com/uploads/iconsets/1e4cc580dab18a00e87286915a6221ed-pin.png"
                }}
                resizeMode={"center"}
              />
            </MapIcon>
            <Text style={{ opacity: 0.2 }}> Harlur Road</Text>
            <MapIcon>
              <Image
                style={{
                  width: 15,
                  height: 15,
                  marginTop: 3,
                  opacity: 0.2
                }}
                source={{
                  uri:
                    "https://cdn3.iconfinder.com/data/icons/arrows-149/512/directional-chevron-down-512.png"
                }}
                resizeMode={"center"}
              />
            </MapIcon>
          </LocationView>
        </TouchableOpacity>
      </HeaderContainerV1>
    );
  }
}
export default HeaderWithLocation;
