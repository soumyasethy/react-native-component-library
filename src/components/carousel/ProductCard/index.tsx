import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import {
  Container,
  FreeDelView,
  OfferImageBackView,
  FreeDelText,
  ItemNameText,
  Seprator,
  ButtonView,
  OfferViewAddSign,
  DetailCardView,
  DetailsOfItems,
  Serve,
  DeliveryMsgRow,
  AddButtonView,
  DetailText,
  ServeText,
  ButtonSeprator,
  IconView,
  MRPText,
  MRPTextStrike,
  RedPriceText,
  DashedLine,
  InfoIcon,
  MrpContainer,
  ScooterImage
} from "./styles";
interface IProps {
  heading: string;
  sub_heading: string;
  min_items?: string;
  max_items?: string;
}
const CuratedData = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1557164158-11e97f2bb220?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Bengali"
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1552089123-2d26226fc2b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Kerela"
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1553659971-f01207815844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Spicy"
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Gluten"
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1558024920-b41e1887dc32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Biryani"
  },

  {
    imageUrl:
      "https://images.unsplash.com/photo-1559703248-dcaaec9fab78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Spicy1"
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1559814048-149b70765d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Spicy12"
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1559553156-2e97137af16f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Spicy2"
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1559503061-3ac6c1787f4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Spicy21"
  }
];

class ProductCard extends React.Component<{}> {
  render() {
    return (
      <Container>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 28 }}
          keyExtractor={(item, index) => item.title}
          renderItem={({ item }) => (
            <>
              <DetailCardView>
                <ItemNameText>{this.props.heading}</ItemNameText>
                <DetailsOfItems>
                  <DetailText> Naati koli</DetailText>
                  <Seprator />
                  <DetailText> With skin</DetailText>
                  <Seprator />
                  <DetailText> Gutted</DetailText>
                  <View
                    style={{ height: 20, width: 30, backgroundColor: "red" }}
                  />
                </DetailsOfItems>
                <Serve>
                  <ServeText> Serves: 4 - 6</ServeText>
                  <Seprator />
                  <ServeText> Net wt: 350gm</ServeText>
                  <ButtonSeprator />
                  <TouchableOpacity onPress={this.props.setModalVisible}>
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={{
                        uri:
                          "http://iconsetc.com/icons-watermarks/simple-red/bfa/bfa_caret-up/bfa_caret-up_simple-red_512x512.png"
                      }}
                      resizeMode={"contain"}
                    />
                  </TouchableOpacity>
                </Serve>
                <AddButtonView>
                  <MrpContainer>
                    <TouchableOpacity onPress={this.props.setModalVisible}>
                      {/* <InfoIcon /> */}
                      <Image
                        style={{ width: 15, height: 15, top: 14.5, left: -6 }}
                        source={{
                          uri:
                            "http://www.iconhot.com/icon/png/colorcons-blue/128/info-9.png"
                        }}
                        resizeMode={"contain"}
                      />
                    </TouchableOpacity>

                    <MRPText> MRP :</MRPText>
                    <MRPTextStrike> ₹160</MRPTextStrike>
                    <DashedLine />
                  </MrpContainer>
                  <View style={{ width: 88, height: 25, alignItems: "center" }}>
                    <RedPriceText>₹160</RedPriceText>
                  </View>
                  <ButtonView activeOpacity={1}>
                    <OfferViewAddSign>ADD</OfferViewAddSign>
                  </ButtonView>
                </AddButtonView>
                <DeliveryMsgRow>
                  <ScooterImage />
                  <DetailText> Available by 08 to 11 pm</DetailText>
                </DeliveryMsgRow>
              </DetailCardView>
              <OfferImageBackView
                imageStyle={{ borderRadius: 15 }}
                resizeMode={"cover"}
                source={{
                  uri:
                    "https://images.unsplash.com/photo-1558980664-4d79c6e77b93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                }}
              >
                <FreeDelView>
                  <FreeDelText>50% OFF</FreeDelText>
                </FreeDelView>
              </OfferImageBackView>
            </>
          )}
          data={CuratedData}
          horizontal
        />
      </Container>
    );
  }
}
export default ProductCard;
