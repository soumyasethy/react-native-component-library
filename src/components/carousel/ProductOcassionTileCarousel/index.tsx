import { Image, Text, View, ImageBackground } from "react-native";

const OcassionProductTileHOC = () => props => {
  /////////////////////////////////////////////////
  return (
    <View
      style={{
        width: 375,
        height: 650
      }}
    >
      <ImageBackground
        source={{
          uri:
            "https://image.freepik.com/free-vector/abstract-orange-circular-halftone-background_1017-19328.jpg"
        }}
        style={{
          width: 375,
          height: 350
        }}
      >
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              width: 206,
              height: 60,
              fontFamily: "Avenir",
              fontSize: 24,
              fontWeight: "900",
              fontStyle: "normal",
              lineHeight: 30,
              letterSpacing: -0.55,
              color: "white",
              margin: 20
            }}
          >
            BREAK THE FAST WITH THE FEAST
          </Text>

          <Image
            style={{
              width: 149,
              left: -20,
              height: 107,
              borderRadius: 4
            }}
            source={{
              uri:
                "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/3/22/0/FNCC_bobby-flay-salmon-brown-sugar-mustard_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541357316.jpeg"
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: "Avenir",
            fontSize: 16,
            fontWeight: "500",
            fontStyle: "normal",
            letterSpacing: 0,
            color: "white",
            marginLeft: 20,
            marginBottom: 10
          }}
        >
          Our specially curated iftaar platter
        </Text>
        <View
          style={{
            height: 30,
            width: "100%",
            backgroundColor: "black",
            flexDirection: "row"
          }}
        />
        {props.children}
      </ImageBackground>
    </View>
  );
  /////////////////////////////////////////////////
};
const ProductOcassionTileCarousel = new OcassionProductTileHOC();
export default ProductOcassionTileCarousel;
