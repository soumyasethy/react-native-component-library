import React from "react";
import { FlatList, TouchableHighlight, Image, Button } from "react-native";
import {
  SingleCategoryView,
  FilterByView,
  FilterBy,
  CheckTextView,
  CategoryName,
  Container,
  HeadingView,
  FilterText,
  CategortHeading,
  Separator
} from "./styles";
import CheckBox from "./CheckBox";
class FilterView extends React.Component<{}> {
  state = {
    sectionsList: [
      {
        title: "By Cut type",
        data: ["Bombay Fish", "North Indian", "South indian", "Panjabi"]
      },
      {
        title: "By Source",
        data: ["River Fish", "Sea Indian", "Shell indian", "Exoctic"]
      },
      {
        title: "By Cusine",
        data: ["1-2 People", "3-4 People", "5-7 People", "More than 8 People"]
      },
      {
        title: "By Nutrition",
        data: ["Protien", "Carbohyderate", "Saturated Fats"]
      }
    ]
  };
  render() {
    return (
      <Container>
        <HeadingView>
          <FilterText
            onPress={() => {
              console.warn("Clciked comp...");
              this.props.setModalVisible(false);
            }}
          >
            Filter
          </FilterText>
          <TouchableHighlight onPress={this.props.setModalVisible}>
            <Image
              resizeMode={"contain"}
              source={{
                uri:
                  "https://www.scanningwizard.com/assets/images/check-mark@2x.png"
              }}
              style={{
                width: 35,
                height: 35,
                marginRight: 20
              }}
            />
          </TouchableHighlight>
        </HeadingView>
        <CategortHeading> Chicken</CategortHeading>
        <Separator />
        <FlatList
          numColumns={2}
          data={this.state.sectionsList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <SingleCategoryView>
              <FilterByView>
                <FilterBy>{item.title}</FilterBy>
              </FilterByView>
              <CheckTextView>
                <CheckBox />
                <CategoryName>{item.data[0]}</CategoryName>
              </CheckTextView>
              <CheckTextView>
                <CheckBox />
                <CategoryName>{item.data[1]}</CategoryName>
              </CheckTextView>
              <CheckTextView>
                <CheckBox />
                <CategoryName>{item.data[2]}</CategoryName>
              </CheckTextView>
              <CheckTextView>
                <CheckBox />
                <CategoryName>{item.data[3]}</CategoryName>
              </CheckTextView>
            </SingleCategoryView>
          )}
        />
        <Separator />
        <Button title="Clear all" onPress={this.props.setModalVisible} />
      </Container>
    );
  }
}
export default FilterView;
