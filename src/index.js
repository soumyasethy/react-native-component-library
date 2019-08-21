import React from "react";
import { View, Text } from "react-native";
import { mS } from "./widget/ResponsiveScreen";

// import HeaderWithShareIcon from "./header";
// export { HeaderWithShareIcon };
import { MyReactNativeComponent } from "./styledComponent";
export { MyReactNativeComponent };

export default class ReactNativeLibraryStarter extends React.Component {
  render() {
    return (
      <View style={{ padding: mS(20) }}>
        <Text>Hello Soumya from RN-Lib</Text>
      </View>
    );
  }
}
