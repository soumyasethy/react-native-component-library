import React from "react";
import { View, Text } from "react-native";
import { mS } from "./widget/ResponsiveScreen";

// import HeaderWithShareIcon from "./header";
// export { HeaderWithShareIcon };
import { MyReactNativeComponent } from "./styledComponent";

export default class ReactNativeLibraryStarter extends React.Component {
  render() {
    return (
      <View style={{ padding: mS(100) }}>
        <Text>Hello Soumya from Nice RN-Lib</Text>
        <MyReactNativeComponent />
      </View>
    );
  }
}
