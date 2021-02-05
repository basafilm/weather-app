import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { CustomizeButton } from "./CustomizeButton";
import { RouteProp } from "@react-navigation/native";

type RootStackParamList = {
  Profile: { country: any | undefined; city: string };
};
type ProfileScreenRouteProp = RouteProp<RootStackParamList, "Profile">;
type ProfileScreenNavigationProp = { navigate: any };

type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
  title: string;
};

export function Weatherdetails({ navigation, route }: Props) {
  return (
    <SafeAreaView>
      <View>
        <Text>Weather details</Text>
        <Text>{route.params.country}</Text>
        <Text>{route.params.city}</Text>
        <CustomizeButton
          onPress={() => {
            navigation.navigate("Details");
          }}
          text="get more details"
        />
      </View>
    </SafeAreaView>
  );
}
