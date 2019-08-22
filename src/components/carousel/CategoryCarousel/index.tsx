import React from "react";
import { FlatList, TouchableOpacity, Alert } from "react-native";
import {
  CategoryCarouselButtonView,
  CategoryCarouselImageView,
  Container,
  TitleView
} from "./styles";

const CuratedData = [
  {
    imageUrl:
      "https://cdnzeplin.io/5c91fd8fbb1e6105d5c42535/assets/27F9733F-21B8-4CEB-8D05-E6465208BF54.png",
    title: "Bengali"
  },
  {
    imageUrl:
      "https://cdnzeplin.io/5c91fd8fbb1e6105d5c42535/assets/CF05B149-6929-4C77-ABC4-787030C9C077.png",
    title: "Kerela"
  },
  {
    imageUrl:
      "https://cdnzeplin.io/5c91fd8fbb1e6105d5c42535/assets/C181BDD7-D142-4F5D-910C-96488A134B98.png",
    title: "Spicy"
  },
  {
    imageUrl:
      "https://cdnzeplin.io/5c91fd8fbb1e6105d5c42535/assets/BAD01689-12C7-4DBB-B98D-CE78284C1E4B.png",
    title: "Gluten"
  },
  {
    imageUrl:
      "https://cdnzeplin.io/5c91fd8fbb1e6105d5c42535/assets/5E0708C9-2296-41C4-ACF7-E3FD447F7261.png",
    title: "Biryani"
  },
  {
    imageUrl:
      "https://cdnzeplin.io/5c91fd8fbb1e6105d5c42535/assets/C181BDD7-D142-4F5D-910C-96488A134B98.png",
    title: "Spicy"
  }
];

class CategoryCarousel extends React.Component<{}> {
  getListViewItem = item => {
    Alert.alert(item.title);
  };
  renderItem = ({ item }: { item: any }) => {
    return (
      <CategoryCarouselButtonView>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.getListViewItem(item)}
        >
          <CategoryCarouselImageView source={{ uri: item.imageUrl }} />
        </TouchableOpacity>
        <TitleView> {item.title}</TitleView>
      </CategoryCarouselButtonView>
    );
  };

  keyExtractor = (item: Idata, index: number): string => index.toString();

  render() {
    return (
      <Container>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingRight: 18 }}
          renderItem={this.renderItem}
          data={CuratedData}
          keyExtractor={this.keyExtractor}
          horizontal
        />
      </Container>
    );
  }
}

export default CategoryCarousel;
