import React, { Component } from "react";
import {
  Container,
  BoxImage,
  Discription,
  Heading,
  FullContainer,
  ImageContainer,
  Feed,
  InstaIDContainer,
  DescriptionText,
  FoodContent,
  InstaImage,
  InstaName,
  InstaIcon,
  InstaText,
  FoodIcon,
  FoodText,
  KnowAbout,
  KnowAboutText
} from "./styles";
import { FlatList, Text, Image } from "react-native";
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
    title: "Spicy"
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1559814048-149b70765d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Spicy"
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1559553156-2e97137af16f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Spicy"
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1559503061-3ac6c1787f4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    title: "Spicy"
  }
];

export default class PhotoCarousel extends Component {
  renderItem = ({ item }: { item: any }) => {
    return (
      <FullContainer>
        <ImageContainer
          source={{
            uri: item.imageUrl
          }}
        />
        <Feed>
          <InstaIDContainer>
            <InstaImage
              source={{
                uri:
                  "https://simg.nicepng.com/png/small/132-1327448_png-royalty-free-library-instagram-free-icons-designed.png"
              }}
            />
            <InstaName>{item.title}</InstaName>
            <InstaIcon
              source={{
                uri:
                  "https://simg.nicepng.com/png/small/132-1327448_png-royalty-free-library-instagram-free-icons-designed.png"
              }}
            />
            <InstaText>Instagram</InstaText>
          </InstaIDContainer>
          <DescriptionText>
            Sauce making poached egges is definitely not as easy as it
            looks.@Licious_foods
          </DescriptionText>
          <FoodContent>
            <FoodIcon
              source={{
                uri:
                  "https://cdn2.iconfinder.com/data/icons/meat-18/50/6-512.png"
              }}
            />
            <FoodText>Pouched Eggs</FoodText>
          </FoodContent>
        </Feed>
      </FullContainer>
    );
  };
  render() {
    return (
      <Container>
        <BoxImage
          source={{
            uri:
              "https://simg.nicepng.com/png/small/132-1327448_png-royalty-free-library-instagram-free-icons-designed.png"
          }}
        />
        <Heading>
          <Text
            style={{
              fontFamily: "Avenir",
              fontSize: 20,
              fontWeight: "900",
              fontStyle: "normal",
              letterSpacing: 0,
              textAlign: "center",
              color: "#000000"
            }}
          >
            #MadeWithLicious
          </Text>
        </Heading>
        <Discription>
          <DescriptionText>
            Cooking with Licious meats is more fun now! Post a picture of your
            Licious dish on our Facebook page, tag us & use #MadeWithLicious;
            every entry wins a hamper. Happy Cooking!
          </DescriptionText>
        </Discription>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 28 }}
          renderItem={this.renderItem}
          data={CuratedData}
          horizontal
        />
        <KnowAbout>
          <KnowAboutText> Know How to Participate</KnowAboutText>
          <Image
            style={{ height: 10, width: 10 }}
            resizeMode={"contain"}
            source={{
              uri:
                "http://res.freestockphotos.biz/pictures/6/6302-illustration-of-a-right-facing-red-arrow-pv.png"
            }}
          />
        </KnowAbout>
      </Container>
    );
  }
}
