import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SectionHeaderView, SectionTextView } from "../styles";
class SectionHeader extends React.Component<{}> {
  render() {
    return (
      <View style={{ height: 50, marginTop: 25 }}>
        <SectionHeaderView>
          Categories Cuarated by your preferences
        </SectionHeaderView>
        <SectionTextView> Since you like our Deals, Marinades.</SectionTextView>
      </View>
    );
  }
}

export default SectionHeader;
