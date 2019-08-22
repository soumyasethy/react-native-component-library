import React from "react";
import PropTypes from "prop-types";
import {
  ImageBox,
  LabelLarge,
  LabelSmall,
  InactiveIndicator,
  ActiveIndecator,
  ScrollWrapper
} from "./styles";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  View
} from "react-native";
import { COLORS } from "../../../utils/Colors";
const { height, width } = Dimensions.get("window");

class BannerComponentWithImage extends React.PureComponent {
  state = {
    currentIndex: 0
  };
  componentDidMount() {
    this.setCurrentIndexTo(0);
    this.props.autoScroll && this.startAutoScroll();
  }
  componentWillUnmount() {
    this.stopAutoScroll();
  }
  startAutoScroll = () => {
    this.activeInterval =
      this.props.uri.length > 0 &&
      setInterval(() => this.manageScrolling(), this.props.delay || 2000);
  };
  stopAutoScroll = () => {
    clearInterval(this.activeInterval);
  };
  manageScrolling = () => {
    if (this.state.currentIndex === this.props.uri.length - 1) {
      this.setCurrentIndexTo(0);
      return;
    }

    this.setCurrentIndexTo(this.state.currentIndex + 1);
  };
  setCurrentIndexTo = currentIndex => {
    this.scrollView.scrollTo({
      x: width * currentIndex,
      animated: true
    });
  };
  render() {
    if (typeof this.props.uri === "string")
      return this.component(this.props.uri, this.props);
    else if (Array.isArray(this.props.uri)) {
      return (
        <ScrollWrapper>
          <ScrollView
            ref={ref => (this.scrollView = ref)}
            horizontal={true}
            pagingEnabled={true}
            onTouchStart={() => {
              this.props.autoScroll && this.stopAutoScroll();
            }}
            onTouchEnd={() => {
              this.props.autoScroll && this.startAutoScroll();
            }}
            onMomentumScrollEnd={event => {
              let currentIndex = event.nativeEvent.contentOffset.x / width;
              this.setState({ currentIndex });
            }}
          >
            {Array.isArray(this.props.uri) &&
              this.props.uri.map((item, index) => {
                return this.component(item, this.props, index);
              })}
          </ScrollView>
          {this._renderIndicator(this.props.uri)}
        </ScrollWrapper>
      );
    }
  }
  component = (uri, props, index) => {
    return (
      <ImageBox
        imageStyle={{ borderRadius: 15 }}
        key={"ImageBox" + index.toString() || ""}
        source={{
          uri
        }}
      >
        <TouchableOpacity
          activeOpacity={5}
          onPress={() => props.callBack(this.state.currentIndex)}
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: `rgba(69,85,117,${props.backgroundOpacity ||
              0.8})`,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15
          }}
        >
          <LabelSmall>{props.titleSmall}</LabelSmall>
          <LabelLarge>{props.titleLarge}</LabelLarge>
        </TouchableOpacity>
      </ImageBox>
    );
  };
  _renderIndicator = array => {
    if (array.length > 1) {
      return (
        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            bottom: 10
          }}
        >
          {array.map((item, index) => {
            if (index === this.state.currentIndex) {
              return <ActiveIndecator key={index.toString()} />;
            } else {
              return <InactiveIndicator key={index.toString()} />;
            }
          })}
        </View>
      );
    }
  };
}

BannerComponentWithImage.propTypes = {
  uri: PropTypes.array.isRequired,
  titleSmall: PropTypes.string,
  titleLarge: PropTypes.string,
  callBack: PropTypes.func,
  backgroundOpacity: PropTypes.number,
  autoScroll: PropTypes.bool
};

export default BannerComponentWithImage;
