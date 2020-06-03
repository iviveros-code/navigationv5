import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      ></Button>
    </View>
  );
};

export default HomeScreen;
