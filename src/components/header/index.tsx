import React, { useState, useEffect } from "react";

import {
  ScrollView,
  View,
  StatusBar,
  SafeAreaView,
  Share,
  Modal,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import HeaderWithShareIcon from "./HeaderWithShareIcon";
import HeaderWithLocation from "./HeaderWithLocation";
import HeaderWithFilterIcon from "./HeaderWithFilterIcon";
import FilterView from "./HeaderWithFilterIcon/FilterView";

interface propsType {
  type: typeProps;
  config?: configProps;
  style: object;
}
enum typeProps {
  HeaderWithShareIcon = "HeaderWithShareIcon",
  HeaderWithLocation = "HeaderWithLocation",
  HeaderWithFilterIcon = "HeaderWithFilterIcon"
}
interface configProps {
  header?: string;
}

const HeaderHOC = () => (props: propsType) => {
  const [showFilter, toggleFilter] = useState(false);

  const _renderHeaderType = (type: typeProps) => {
    switch (type) {
      case "HeaderWithShareIcon": {
        return (
          <HeaderWithShareIcon
            heading={
              !!props.config && !!props.config.header && props.config.header
            }
            share_icon={
              "https://cdn.zeplin.io/5d149ec83ea6b873570dba32/assets/6C8AF338-9F2B-405E-B639-213A87509F34.png"
            }
            onShare={shareMessage}
          />
        );
      }
      case "HeaderWithLocation": {
        return (
          <HeaderWithLocation
            logo_url={
              "https://upload.wikimedia.org/wikipedia/commons/c/c6/Licious-Logo.png"
            }
            alt_text={"Logo"}
          />
        );
      }
      case "HeaderWithFilterIcon": {
        return (
          <HeaderWithFilterIcon
            filter_icon={
              "https://cdn4.iconfinder.com/data/icons/multimedia-68/32/multimedia_setting_control_faders_tuning_adjustment_sound-512.png"
            }
            heading={"Chicken  "}
            setModalVisible={toggleFilter}
          />
        );
      }
    }
  };
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={"#fbfbfb"} barStyle="dark-content" />
      {_renderHeaderType(props.type)}
      <ScrollView>
        <View style={[{ flex: 1 }, props.style]}>{props.children}</View>
      </ScrollView>
      {!!showFilter && (
        <Modal
          animationType="slide"
          transparent={showFilter}
          presentationStyle="overFullScreen"
          onRequestClose={() => {
            toggleFilter(!showFilter);
          }}
        >
          {/* <PriceExplainer setModalVisible={this.setModalVisible} /> */}
          {/* <WeightVarient setModalVisible={this.setModalVisible} /> */}
          <FilterView setModalVisible={toggleFilter} />
        </Modal>
      )}
    </SafeAreaView>
  );
};

export const Header = new HeaderHOC();

const shareMessage = text => {
  console.warn("Clicked");
  if (!text) return;
  //Here is the Share API
  Share.share({
    message: text,
    title: "Sharing via react native"
  })
    //after successful share return result
    .then(result => console.log(result))
    //If any thing goes wrong it comes here
    .catch(errorMsg => console.log(errorMsg));
};
